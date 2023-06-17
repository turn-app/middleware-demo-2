import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '@backend/server/routers/_app';
import { createContext } from '../../../backend/server/context';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
