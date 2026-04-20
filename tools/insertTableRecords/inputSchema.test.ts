import { describe, expect, it } from 'vitest';
import { inputSchema } from './inputSchema.js';

describe('insertTableRecords inputSchema', () => {
	it('should validate correct input', () => {
		const validInput = {
			database: 'my_db',
			table: 'my_table',
			records: [{ id: 1, name: 'Harper' }],
		};
		const result = inputSchema.safeParse(validInput);
		expect(result.success).toBe(true);
	});

	it('should fail validation on missing fields', () => {
		const invalidInput = {
			database: 'my_db',
			// missing table
			records: [],
		};
		const result = inputSchema.safeParse(invalidInput);
		expect(result.success).toBe(false);
	});

	it('should fail validation on incorrect types', () => {
		const invalidInput = {
			database: 'my_db',
			table: 'my_table',
			records: 'not an array',
		};
		const result = inputSchema.safeParse(invalidInput);
		expect(result.success).toBe(false);
	});
});
