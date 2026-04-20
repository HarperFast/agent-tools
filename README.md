# @harperfast/agent-tools

Shares the basic schema for agent tools used by Harper.

This repository contains the definitions and Zod schemas for various tools used by Harper agents. These tools are categorized into application management, file manipulation, and database interaction.

## Installation

```bash
npm install @harperfast/agent-tools
```

## Usage

The package exports `serverTools`, which contains schemas for all available tools.

```typescript
import { serverTools } from '@harperfast/agent-tools';

// Access a specific tool schema
const feedbackTool = serverTools.collectFeedback;

console.log(feedbackTool.name); // 'collectFeedback'
console.log(feedbackTool.description);
```

## Available Tools

### Application Management

- `readHarperSkill`: Read the content of a Harper skill.
- `createApp`: Create a new application.
- `readLogs`: Read application logs.
- `getAnalytics`: Get application analytics.
- `restartHTTPService`: Restart the HTTP service.
- `collectFeedback`: Collect user feedback via GitHub Discussions.

### File Manipulation

- `getComponentFile`: Get the content of a component file.
- `getComponents`: List all components.
- `setComponentFile`: Create or update a component file.
- `dropComponentFile`: Delete a component file.

### Database Interaction

- `getDescribeAll`: Describe all tables in the database.
- `getDescribeTable`: Describe a specific table.
- `insertTableRecords`: Insert records into a table.
- `readTableRecords`: Read records from a table.
- `updateTableRecords`: Update records in a table.
- `deleteTableRecords`: Delete records from a table.

### Tool Structure

Each tool in `serverTools` follows the `ServerSideTool` interface:

```typescript
import { ServerSideTool } from '@harperfast/agent-tools/types/serverSideTool.js';
```

## Exported Types

The package also exports several utility types used across Harper agent services.

### Chat Messages

Used for representing messages in a chat conversation.

```typescript
import { ChatMessage, NewChatMessage } from '@harperfast/agent-tools/types/chatMessage';
```

### Usage Tracking

Used for monitoring token usage and costs associated with LLM calls.

```typescript
import { Usage } from '@harperfast/agent-tools/types/usage';
import { NewUsage } from '@harperfast/agent-tools/types/newUsage';
```

### Tool Names

A union type of all available tool names in `serverTools`.

```typescript
import { ToolNames } from '@harperfast/agent-tools/types/toolNames';
```

## Development

### Build

```bash
npm run build
```

### Linting and Formatting

```bash
npm run lint:check
npm run format:check
```

### Testing

```bash
npm test
```

## License

Apache-2.0
