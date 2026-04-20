import { describe, expect, it } from 'vitest';
import { serverTools } from './tools';

describe('serverTools', () => {
	it('should export all expected tools', () => {
		const someTools = ['readHarperSkill', 'createApp', 'readLogs'];

		for (const toolName of someTools) {
			expect(serverTools).toHaveProperty(toolName);
			expect(serverTools[toolName as keyof typeof serverTools]).toHaveProperty('name', toolName);
			expect(serverTools[toolName as keyof typeof serverTools]).toHaveProperty('description');
			expect(serverTools[toolName as keyof typeof serverTools]).toHaveProperty('inputSchema');
		}
	});
});
