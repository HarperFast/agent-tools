export interface ChatMessage {
	id: string;
	userId?: string;
	role?: string;
	parts?: any;
	createdAt?: string;
}
