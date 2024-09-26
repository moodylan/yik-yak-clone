import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { posts } from "~/server/db/schema";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  create: protectedProcedure
    .input(
      z.object({
        content: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.db.insert(posts).values({
        userID: ctx.session.user.id,
        content: input.content,
      });
    }),
});
