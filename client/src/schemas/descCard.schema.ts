import { z } from 'zod';

export const descCardSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  
});

export type DescCardType = z.infer<typeof descCardSchema>;

export type DescCardSliceType = {
  descCard: DescCardType[];
  error: string | null;

};
