import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool';
import { inputSchema } from './inputSchema';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'deleteTableRecords',
	description:
		'Deletes records in a particular table in a particular database on the server ' +
		'by their primary keys.',
	inputSchema,
};
