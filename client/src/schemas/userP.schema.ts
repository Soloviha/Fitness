import { z } from 'zod';

export const userPSchema = z.object({
  gender: z.string(),
  weight: z.number(),
  height: z.number(),
  dateOfBirth: z.string(),
  BMI: z.number(),
  secondName: z.string(),
  img: z.string(),
  userId: z.number(),
});

export type userPType = z.infer<typeof userPSchema>;

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export type UserPSliceType = {
  userP: Nullable<userPType>;
  error: string | null;
};
