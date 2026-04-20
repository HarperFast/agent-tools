import { z } from 'zod';

export const inputSchema = z.object({
	feedbackSummary: z
		.string()
		.describe('A brief summary of the feedback, used as the discussion title.'),
	feedbackDetails: z.string().describe('Detailed feedback from the user or agent observation.'),
	recap: z
		.string()
		.describe(
			'A sanitized recap of what the agent and user did together and if it was successful. No sensitive information.',
		),
});
