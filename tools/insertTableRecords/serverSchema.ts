import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool';
import { inputSchema } from './inputSchema';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'insertTableRecords',
	description:
		'Inserts one or more records into a particular table in a particular database on the server.',
	inputSchema,
};
