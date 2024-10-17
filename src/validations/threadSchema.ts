import { z } from "zod";

export const createThreadSchema = z.object({
   content: z.string().optional(),
   images: z.any().optional(),
   mainThreadId: z.number().optional(),
   userId: z.number().optional(),
});

export type CreateThreadDTO = z.infer<typeof createThreadSchema>;
