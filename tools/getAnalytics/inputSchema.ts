import { z } from 'zod';

export const inputSchema = z.object({
	metricName: z
		.enum(['db-read', 'db-write', 'db-message', 'cpu-usage'])
		.describe('The name of the metric to retrieve.'),
	path: z.string().optional().describe('An optional path to filter the metric by.'),
	startTime: z
		.number()
		.describe('The start of the time range for the metric, in milliseconds since the Unix epoch.'),
	endTime: z
		.number()
		.describe('The end of the time range for the metric, in milliseconds since the Unix epoch.'),
});
