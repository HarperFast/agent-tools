import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool';
import { inputSchema } from './inputSchema';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'getAnalytics',
	description:
		'Retrieves analytics metrics for the server, such as CPU usage or database operations (reads, writes,' +
		' messages).',
	inputSchema,
};
