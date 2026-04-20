import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool.js';
import { inputSchema } from './inputSchema.js';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'getComponents',
	description:
		'Retrieves a tree of all the component (files and folders) names and sizes stored on the server.',
	inputSchema,
};
