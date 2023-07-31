import { z } from 'zod';

export const GoogleSigninPayloadSchema = z.object({
  idToken: z.string(),
});

export const GoogleSigninResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type GoogleSigninPayload = z.infer<typeof GoogleSigninPayloadSchema>;
export type GoogleSigninResponse = z.infer<typeof GoogleSigninResponseSchema>;
