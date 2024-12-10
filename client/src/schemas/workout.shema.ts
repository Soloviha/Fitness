import { z } from 'zod';

export const workoutSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  isPublic: z.boolean(),
  time: z.number(),
  kcal: z.number(),
  typeId: z.number(),
});

export type WorkoutType = z.infer<typeof workoutSchema>;

export type WorkoutSliceType = {
  workouts: WorkoutType[];
  error: string | null;
};
