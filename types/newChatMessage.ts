import type { ChatMessage } from './chatMessage';

export type NewChatMessage = Omit<ChatMessage, 'id' | 'createdAt'>;
