import { serverSchema as collectFeedbackServerSchema } from './collectFeedback/serverSchema.ts';
import { serverSchema as createAppServerSchema } from './createApp/serverSchema.ts';
import { serverSchema as deleteTableRecordsServerSchema } from './deleteTableRecords/serverSchema.ts';
import { serverSchema as dropComponentFileServerSchema } from './dropComponentFile/serverSchema.ts';
import { serverSchema as getAnalyticsServerSchema } from './getAnalytics/serverSchema.ts';
import { serverSchema as getComponentFileServerSchema } from './getComponentFile/serverSchema.ts';
import { serverSchema as getComponentsServerSchema } from './getComponents/serverSchema.ts';
import { serverSchema as getDescribeAllServerSchema } from './getDescribeAll/serverSchema.ts';
import { serverSchema as getDescribeTableServerSchema } from './getDescribeTable/serverSchema.ts';
import { serverSchema as insertTableRecordsServerSchema } from './insertTableRecords/serverSchema.ts';
import { serverSchema as readHarperSkillServerSchema } from './readHarperSkill/serverSchema.ts';
import { serverSchema as readLogsServerSchema } from './readLogs/serverSchema.ts';
import { serverSchema as readTableRecordsServerSchema } from './readTableRecords/serverSchema.ts';
import { serverSchema as restartHTTPServiceServerSchema } from './restartHTTPService/serverSchema.ts';
import { serverSchema as setComponentFileServerSchema } from './setComponentFile/serverSchema.ts';
import { serverSchema as updateTableRecordsServerSchema } from './updateTableRecords/serverSchema.ts';

export const serverTools = {
	// Application management.
	readHarperSkill: readHarperSkillServerSchema,
	createApp: createAppServerSchema,
	readLogs: readLogsServerSchema,
	getAnalytics: getAnalyticsServerSchema,
	restartHTTPService: restartHTTPServiceServerSchema,
	collectFeedback: collectFeedbackServerSchema,
	// File manipulation.
	getComponentFile: getComponentFileServerSchema,
	getComponents: getComponentsServerSchema,
	setComponentFile: setComponentFileServerSchema,
	dropComponentFile: dropComponentFileServerSchema,
	// Database interaction.
	getDescribeAll: getDescribeAllServerSchema,
	getDescribeTable: getDescribeTableServerSchema,
	insertTableRecords: insertTableRecordsServerSchema,
	readTableRecords: readTableRecordsServerSchema,
	updateTableRecords: updateTableRecordsServerSchema,
	deleteTableRecords: deleteTableRecordsServerSchema,
};

export type ToolNames = keyof typeof serverTools;
