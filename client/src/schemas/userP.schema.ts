import { z } from 'zod';

export const userPSchema = z.object({
  id: z.number(),
  gender: z.string(),
  weight: z.number(),
  height: z.number(),
  dateOfBirth: z.string(),
  BMI: z.number(),
  secondName: z.string(),
  img: z.string(),
  userId: z.number(),
});

export const userPFormSchema = z.object({
  gender: z.string(),
  weight: z.number(),
  height: z.number(),
  dateOfBirth: z.string(),
  BMI: z.number(),
  secondName: z.string(),
  img: z.string(),
})

export type userPType = z.infer<typeof userPSchema>;
export type userPForm = z.infer<typeof userPFormSchema>

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export type UserPSliceType = {
  userP: Nullable<userPType>;
  error: string | null;
};
