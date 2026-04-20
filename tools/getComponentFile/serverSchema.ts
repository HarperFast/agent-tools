import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool.js';
import { inputSchema } from './inputSchema.js';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'getComponentFile',
	description:
		'Returns the contents of a component file by its full path (which was returned by getComponents)',
	inputSchema,
};
