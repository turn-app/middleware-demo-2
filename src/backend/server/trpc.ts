import { initTRPC, TRPCError } from '@trpc/server';
import { OpenApiMeta } from 'trpc-openapi';
import { Context } from './context';

const t = initTRPC.meta<OpenApiMeta>().context<Context>().create();

const authorizer = t.middleware(({ next, ctx }) => {
  if (!ctx.userId || !ctx.organizationId) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: `orgId: ${ctx.organizationId}, userId: ${ctx.userId}, ctx: ${ctx}` });
  }
  return next({
    ctx,
  });
});

export const protectedProcedure = t.procedure.use(authorizer);

// Base router and procedure helpers
export const { router, procedure, mergeRouters } = t;
