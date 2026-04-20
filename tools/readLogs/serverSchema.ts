import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool.ts';
import { inputSchema } from './inputSchema.ts';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'readLogs',
	description: 'Returns the matching logs from the server.',
	inputSchema,
};
