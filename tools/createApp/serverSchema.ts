import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool';
import { inputSchema } from './inputSchema';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'createApp',
	description: 'Create a new Harper app with the specified name and template type.',
	inputSchema,
};
