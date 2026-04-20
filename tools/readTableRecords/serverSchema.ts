import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool.js';
import { inputSchema } from './inputSchema.js';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'readTableRecords',
	description: 'Retrieves some or all table records from a database on the server.',
	inputSchema,
};
