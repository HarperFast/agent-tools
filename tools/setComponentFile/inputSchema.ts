import { z } from 'zod';

export const inputSchema = z.object({
	path: z.string().trim(),
	payload: z.string(),
	encoding: z.enum(['utf8', 'ASCII', 'binary', 'hex', 'base64', 'utf16le', 'latin1', 'ucs2']),
});
