import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool.js';
import { inputSchema } from './inputSchema.js';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'listAnalyticsMetrics',
	description:
		'Lists the available analytics metric names available for calling getAnalytics upon.',
	inputSchema,
};
