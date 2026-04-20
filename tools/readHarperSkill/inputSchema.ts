import { ruleNames } from '@harperfast/skills';
import { z } from 'zod';

export const inputSchema = z.object({
	skill: z.enum(ruleNames),
});
