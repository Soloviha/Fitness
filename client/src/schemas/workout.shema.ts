import { z } from 'zod';

export const workoutSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  exOne: z.string(),
  descOne: z.string(),
  exTwo: z.string(),
  descTwo: z.string(),
  exThree: z.string(),
  descThree: z.string(),
  exFour: z.string(),
  descFour: z.string(),
  exFive: z.string(),
  descFive: z.string(),
  isPublic: z.boolean(),
  typeId: z.number(),
});

export type WorkoutType = z.infer<typeof workoutSchema>;

export type WorkoutSliceType = {
  workouts: WorkoutType[];
  error: string | null;
};
