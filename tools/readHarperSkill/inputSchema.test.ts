import { ruleNames } from '@harperfast/skills';
import { describe, expect, it } from 'vitest';
import { inputSchema } from './inputSchema';

describe('readHarperSkill inputSchema', () => {
	it('should validate correct input with valid skill', () => {
		if (ruleNames.length > 0) {
			const validInput = {
				skill: ruleNames[0],
			};
			const result = inputSchema.safeParse(validInput);
			expect(result.success).toBe(true);
		}
	});

	it('should fail validation on invalid skill', () => {
		const invalidInput = {
			skill: 'non-existent-skill',
		};
		const result = inputSchema.safeParse(invalidInput);
		expect(result.success).toBe(false);
	});

	it('should fail validation on missing skill', () => {
		const invalidInput = {};
		const result = inputSchema.safeParse(invalidInput);
		expect(result.success).toBe(false);
	});
});
