import { createContext } from '@backend/server/context';
import { appRouter } from '@backend/server/routers/_app';
import { createOpenApiNextHandler } from 'trpc-openapi';

// Handle incoming OpenAPI requests
export default createOpenApiNextHandler({
  router: appRouter,
  createContext,
});
