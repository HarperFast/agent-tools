import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool.ts';
import { inputSchema } from './inputSchema.ts';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'getDescribeTable',
	description: 'Returns the schema metadata describing a particular table in a particular database on the server.',
	inputSchema,
};
