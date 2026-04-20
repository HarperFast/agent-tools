import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool';
import { inputSchema } from './inputSchema';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'restartHTTPService',
	description:
		'Restarts the HTTP service on the server to allow schema and resource changes to be applied.',
	inputSchema,
};
