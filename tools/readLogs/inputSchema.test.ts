import { describe, expect, it } from 'vitest';
import { inputSchema } from './inputSchema.js';

describe('readLogs inputSchema', () => {
	it('should validate correct input with hdb.log', () => {
		const validInput = {
			log_name: 'hdb.log',
			limit: '100',
			level: 'info',
		};
		const result = inputSchema.safeParse(validInput);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data.log_name).toBe('hdb.log');
		}
	});

	it('should validate correct input with system.log', () => {
		const validInput = {
			log_name: 'system.log',
		};
		const result = inputSchema.safeParse(validInput);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data.log_name).toBe('system.log');
		}
	});

	it('should default to hdb.log if log_name is missing', () => {
		const validInput = {
			limit: '100',
		};
		const result = inputSchema.safeParse(validInput);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data.log_name).toBe('hdb.log');
		}
	});

	it('should fail validation on invalid log_name', () => {
		const invalidInput = {
			log_name: 'invalid.log',
		};
		const result = inputSchema.safeParse(invalidInput);
		expect(result.success).toBe(false);
	});

	it('should fail validation if install.log is used (no longer supported in v5)', () => {
		const invalidInput = {
			log_name: 'install.log',
		};
		const result = inputSchema.safeParse(invalidInput);
		expect(result.success).toBe(false);
	});
});
