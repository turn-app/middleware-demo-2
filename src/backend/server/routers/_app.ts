import { router } from '../trpc';
import { pingRouter } from './ping';

export const appRouter = router({
  ping: pingRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
