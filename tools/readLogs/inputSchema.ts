import { z } from 'zod';

export const inputSchema = z.object({
	limit: z.string().or(z.null()),
	level: z.enum(['notify', 'error', 'warn', 'info', 'debug', 'trace', 'undefined']).or(z.null()),
	from: z.string().or(z.null()),
	until: z.string().or(z.null()),
});
