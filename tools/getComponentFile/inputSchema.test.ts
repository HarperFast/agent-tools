import { describe, expect, it } from 'vitest';
import { inputSchema } from './inputSchema';

describe('getComponentFile inputSchema', () => {
	it('should validate correct input', () => {
		const validInput = {
			path: 'components/MyComponent.tsx',
		};
		const result = inputSchema.safeParse(validInput);
		expect(result.success).toBe(true);
	});

	it('should fail validation on missing path', () => {
		const invalidInput = {};
		const result = inputSchema.safeParse(invalidInput);
		expect(result.success).toBe(false);
	});

	it('should fail validation on non-string path', () => {
		const invalidInput = { path: 123 };
		const result = inputSchema.safeParse(invalidInput);
		expect(result.success).toBe(false);
	});
});
