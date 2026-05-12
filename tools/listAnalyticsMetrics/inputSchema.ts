import { z } from 'zod';

export const inputSchema = z.object({
	metricTypes: z.enum(['builtin', 'custom']),
	customWindowMS: z
		.number()
		.optional()
		.describe('Default to one week time window for finding custom metrics.'),
});
