import { inferAsyncReturnType } from '@trpc/server';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';

export const createContext = async (options?: CreateNextContextOptions) => {
  return {
    options,
    userId: null,
    organizationId: null,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
