import { z } from 'zod';

export const inputSchema = z.object({
	log_name: z.enum(['hdb.log', 'system.log']).default('hdb.log'),
	limit: z.string().or(z.null()).optional(),
	level: z
		.enum(['notify', 'error', 'warn', 'info', 'debug', 'trace', 'undefined'])
		.or(z.null())
		.optional(),
	from: z.string().or(z.null()).optional(),
	until: z.string().or(z.null()).optional(),
});
