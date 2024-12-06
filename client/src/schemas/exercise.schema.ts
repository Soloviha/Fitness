import { z } from 'zod';

export const exerciseSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  time: z.number().nullable(),
  reps: z.number().nullable(),
  relax: z.number().nullable(),
  isPublic: z.boolean(),
  workoutId: z.number(),
});


export type ExerciseType = z.infer<typeof exerciseSchema>;

export type ExerciseSliceType = { 
  exercises: ExerciseType[];
  error: string | null;
};