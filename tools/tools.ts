import { serverSchema as collectFeedbackServerSchema } from './collectFeedback/serverSchema';
import { serverSchema as createAppServerSchema } from './createApp/serverSchema';
import { serverSchema as deleteTableRecordsServerSchema } from './deleteTableRecords/serverSchema';
import { serverSchema as dropComponentFileServerSchema } from './dropComponentFile/serverSchema';
import { serverSchema as getAnalyticsServerSchema } from './getAnalytics/serverSchema';
import { serverSchema as getComponentFileServerSchema } from './getComponentFile/serverSchema';
import { serverSchema as getComponentsServerSchema } from './getComponents/serverSchema';
import { serverSchema as getDescribeAllServerSchema } from './getDescribeAll/serverSchema';
import { serverSchema as getDescribeTableServerSchema } from './getDescribeTable/serverSchema';
import { serverSchema as insertTableRecordsServerSchema } from './insertTableRecords/serverSchema';
import { serverSchema as readHarperSkillServerSchema } from './readHarperSkill/serverSchema';
import { serverSchema as readLogsServerSchema } from './readLogs/serverSchema';
import { serverSchema as readTableRecordsServerSchema } from './readTableRecords/serverSchema';
import { serverSchema as restartHTTPServiceServerSchema } from './restartHTTPService/serverSchema';
import { serverSchema as setComponentFileServerSchema } from './setComponentFile/serverSchema';
import { serverSchema as updateTableRecordsServerSchema } from './updateTableRecords/serverSchema';

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
