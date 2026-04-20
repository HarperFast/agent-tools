import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool.js';
import { inputSchema } from './inputSchema.js';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'getDescribeAll',
	description: 'Retrieves a map of the names of databases and their tables stored on the server.',
	inputSchema,
};
