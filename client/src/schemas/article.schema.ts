import { z } from 'zod';

export const articleSchema = z.object({
  id: z.number(),
  title: z.string(),
  desc: z.string(),
});

export const articleFormSchema = z.object({
    title: z.string(),
    desc: z.string(),
  });


export type ArticleType = z.infer<typeof articleSchema>;
export type ArticleFormType = z.infer<typeof articleFormSchema>;


export type ArticleSliceType = {
  article: ArticleType[];
  error: string | null;
};