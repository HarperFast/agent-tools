import { z } from 'zod';

export const inputSchema = z.object({
	database: z.string().trim(),
	table: z.string().trim(),
	primaryKeys: z.array(z.string()),
});
