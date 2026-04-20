import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool.js';
import { inputSchema } from './inputSchema.js';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'dropComponentFile',
	description: 'Drops a component file by its full path (which was returned by getComponents)',
	inputSchema,
};
