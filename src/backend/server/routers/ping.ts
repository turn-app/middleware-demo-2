import { procedure } from '@backend/server/trpc';

export const pingRouter = procedure
  .query(async () => 'ok');
