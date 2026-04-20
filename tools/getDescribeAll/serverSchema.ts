import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool.ts';
import { inputSchema } from './inputSchema.ts';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'getDescribeAll',
	description: 'Retrieves a map of the names of databases and their tables stored on the server.',
	inputSchema,
};
