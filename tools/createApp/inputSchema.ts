import { templateNames } from 'create-harper/templates';
import { z } from 'zod';

export const inputSchema = z.object({
	name: z.string().trim(),
	type: z.enum(templateNames),
});
