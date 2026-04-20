import { z } from 'zod';
import type { ServerSideTool } from '../../types/serverSideTool';
import { inputSchema } from './inputSchema';

export const serverSchema: ServerSideTool<z.infer<typeof inputSchema>> = {
	name: 'readHarperSkill',
	description:
		'Returns documentation for a Harper skill or best practice. Skills provide guidance on developing' +
		' Harper applications.',
	inputSchema,
};
