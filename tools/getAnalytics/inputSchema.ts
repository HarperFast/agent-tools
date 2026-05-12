import { z } from 'zod';

export const inputSchema = z.object({
	metricName: z.string().describe('The name of the metric to retrieve.'),
	startTime: z
		.number()
		.describe('The start of the time range for the metric, in milliseconds since the Unix epoch.'),
	endTime: z
		.number()
		.describe('The end of the time range for the metric, in milliseconds since the Unix epoch.'),
});
