export interface Usage {
	id: string;
	userId?: string;
	modelId?: string;
	inputTokens?: number;
	outputTokens?: number;
	cacheReadTokens?: number;
	cacheWriteTokens?: number;
	totalTokens?: number;
	cost?: number;
	yearMonth?: string;
	timestamp?: string;
}
