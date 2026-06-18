import { templateNames } from 'create-harper/templates';
import { describe, expect, it } from 'vitest';
import { inputSchema } from './inputSchema.js';

describe('createApp inputSchema', () => {
	it('should accept every template create-harper exposes', () => {
		for (const type of templateNames) {
			const result = inputSchema.safeParse({ name: 'my-app', type });
			expect(result.success).toBe(true);
		}
	});

	it('should reject the legacy vanilla-js value (now vanilla)', () => {
		const result = inputSchema.safeParse({ name: 'my-app', type: 'vanilla-js' });
		expect(result.success).toBe(false);
	});

	it('should reject an unknown template type', () => {
		const result = inputSchema.safeParse({ name: 'my-app', type: 'svelte' });
		expect(result.success).toBe(false);
	});

	it('should require a name', () => {
		const result = inputSchema.safeParse({ type: 'vanilla' });
		expect(result.success).toBe(false);
	});
});
