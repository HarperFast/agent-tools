# @HarperFast/Schema-Codegen

Schema Codegen will generate TypeScript types for your GraphQL schemas, making it easier to work with your data in TypeScript and JavaScript applications.

## Installation

Install this with your favorite package manager!

```bash
npm install --save @harperfast/schema-codegen
```

Drop this in your Harper application's config.yaml:

```yaml
'@harperfast/schema-codegen':
  package: '@harperfast/schema-codegen'
  globalTypes: 'schemas/globalTypes.d.ts'
  schemaTypes: 'schemas/types.ts'
```

Alternatively, if you are using pure JavaScript, you can generate JSDoc instead:

```yaml
'@harperfast/schema-codegen':
  package: '@harperfast/schema-codegen'
  jsdoc: 'schemas/jsdocTypes.js'
```

When you `harper dev`, it will generate types based on the schema that's actually in your Harper database. If you change the schema, we will automatically regenerate the types for you.

## Example

For example, here's a tracks.graphql schema:

```graphql
type Tracks @table @sealed {
	id: ID @primaryKey
	name: String! @indexed
	mp3: Blob
}
```

Next to it, a schemas/types.ts file will get generated with this:

```typescript
/**
 Generated from HarperDB schema
 Manual changes will be lost!
 > harper dev .
 */
export interface Track {
	id: string;
	name: string;
	mp3?: any;
}

export type NewTrack = Omit<Track, 'id'>;
export type Tracks = Track[];
export type { Track as TrackRecord };
export type TrackRecords = Track[];
export type NewTrackRecord = Omit<Track, 'id'>;
```

An ambient declaration will also be generated in globalTypes.d.ts to enhance the global `tables` and `databases` from Harper:

```typescript
/**
 Generated from your schema files
 Manual changes will be lost!
 > harper dev .
 */
import type { Table } from 'harperdb';
import type { Track } from './types.ts';

declare module 'harperdb' {
	export const tables: {
		Tracks: { new (...args: any[]): Table<Track> };
	};
	export const databases: {
		data: {
			Tracks: { new (...args: any[]): Table<Track> };
		};
	};
}
```

## Development

To use this in an application, first link it:

```bash
git clone git@github.com:HarperFast/schema-codegen.git
cd schema-codegen
npm link
```

Then cd to your awesome application you want to test this with:

```bash
cd ~/my-awesome-app
npm link @harperfast/schema-codegen
```
