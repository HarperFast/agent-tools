import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool.js';
import { inputSchema } from './inputSchema.js';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'getUserContext',
	description:
		'Retrieves the context of what the user is looking at on their screen, such as the current page, ' +
		'the file they are viewing, the database and table visible to them, that sort of thing.',
	inputSchema,
};
