import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool';
import { inputSchema } from './inputSchema';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'collectFeedback',
	description:
		'Collects feedback from the user by fetching a link to a pre-populated GitHub Discussion. Use this if' +
		' the user lets us know we did something well, or if the user seems frustrated, or wants to report a bug.',
	inputSchema,
};
