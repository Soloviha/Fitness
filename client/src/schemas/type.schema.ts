import { z } from 'zod';

export const typeSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
});

export type TypeType = z.infer<typeof typeSchema>;

export type TypeSliceType = {
  types: TypeType[];
  error: string | null;
};
