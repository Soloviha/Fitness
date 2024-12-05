import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
});

export const authResponseSchema = z.object({
  user: userSchema,
  accessToken: z.string(),
});

export const signupFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const loginFormSchema = signupFormSchema.omit({ name: true });

export type UserType = z.infer<typeof userSchema>;
export type signupFormType = z.infer<typeof signupFormSchema>;
export type loginFormType = z.infer<typeof loginFormSchema>;
export type authResponseType = z.infer<typeof authResponseSchema>;

export type AuthSliceType = {
  user: UserType | null;
  accessToken: string | null;
  error: string | null;
  isModalOpen: boolean;
  isSignupModalOpen: boolean;
};
