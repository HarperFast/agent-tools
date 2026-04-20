import { z } from 'zod';

export const inputSchema = z.object({
	database: z.string().trim(),
	table: z.string().trim(),
	pageIndex: z.number().default(0),
	pageSize: z.number().default(10),
	primaryKey: z.string(),
	conditions: z.array(z.object({
		search_attribute: z.string(),
		search_type: z.enum([
			'between',
			'eq',
			'equals',
			'greater_than',
			'greater_than_equal',
			'less_than',
			'less_than_equal',
			'ne',
			'not_equal',
			'starts_with',
		]),
		search_value: z.any(),
	})),
	sort: z.object({
		attribute: z.string(),
		descending: z.boolean(),
	}),
});
