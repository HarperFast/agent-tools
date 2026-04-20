import { z } from 'zod';

export interface ServerSideTool<TInput = any> {
	name: string;
	description: string;
	inputSchema: z.Schema<TInput>;
}
