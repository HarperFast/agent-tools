import { z } from 'zod';

export const inputSchema = z.object({
	path: z.string().trim(),
});
