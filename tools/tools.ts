import { serverSchema as collectFeedbackServerSchema } from './collectFeedback/serverSchema.js';
import { serverSchema as createAppServerSchema } from './createApp/serverSchema.js';
import { serverSchema as deleteTableRecordsServerSchema } from './deleteTableRecords/serverSchema.js';
import { serverSchema as dropComponentFileServerSchema } from './dropComponentFile/serverSchema.js';
import { serverSchema as getAnalyticsServerSchema } from './getAnalytics/serverSchema.js';
import { serverSchema as getComponentFileServerSchema } from './getComponentFile/serverSchema.js';
import { serverSchema as getComponentsServerSchema } from './getComponents/serverSchema.js';
import { serverSchema as getDescribeAllServerSchema } from './getDescribeAll/serverSchema.js';
import { serverSchema as getDescribeTableServerSchema } from './getDescribeTable/serverSchema.js';
import { serverSchema as insertTableRecordsServerSchema } from './insertTableRecords/serverSchema.js';
import { serverSchema as readHarperSkillServerSchema } from './readHarperSkill/serverSchema.js';
import { serverSchema as readLogsServerSchema } from './readLogs/serverSchema.js';
import { serverSchema as readTableRecordsServerSchema } from './readTableRecords/serverSchema.js';
import { serverSchema as restartHTTPServiceServerSchema } from './restartHTTPService/serverSchema.js';
import { serverSchema as setComponentFileServerSchema } from './setComponentFile/serverSchema.js';
import { serverSchema as updateTableRecordsServerSchema } from './updateTableRecords/serverSchema.js';

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
