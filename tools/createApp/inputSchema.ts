import { z } from 'zod';

export const inputSchema = z.object({
	name: z.string().trim(),
	// TODO: Bind this up to the `templates` array somehow
	type: z.enum(['vanilla-js', 'vanilla-ts']),
});
