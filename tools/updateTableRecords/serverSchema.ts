import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool.js';
import { inputSchema } from './inputSchema.js';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'updateTableRecords',
	description: 'Updates records in a particular table in a particular database on the server.',
	inputSchema,
};
