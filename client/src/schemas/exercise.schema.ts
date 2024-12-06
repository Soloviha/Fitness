import { z } from 'zod';

export const exerciseSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  isPublic: z.boolean(),
  time: z.number(),
  reps: z.number(),
  relax: z.number(),
  workoutId: z.number(),
});

export type ExerciseType = z.infer<typeof exerciseSchema>;

export type ExerciseSliceType = {
  exersices: ExerciseType[];
  error: string | null;
};