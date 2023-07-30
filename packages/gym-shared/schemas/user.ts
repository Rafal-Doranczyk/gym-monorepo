import { z } from 'zod';

import { PALETTE_MODES, CURRENCIES, MEASUREMENTS_TYPES } from '../index';

export const UserSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
  email: z.string().email(),
  username: z.string(),
});

export const UserSettingsSchema = z.object({
  palette: z.nativeEnum(PALETTE_MODES),
  currency: z.nativeEnum(CURRENCIES),
  activeMeasurementsKeys: z.array(z.nativeEnum(MEASUREMENTS_TYPES)),
});

export const GetUserResponseSchema = z.object({
  ...UserSchema.omit({ id: true }).shape,
  settings: UserSettingsSchema,
});

export type GetUserResponse = z.infer<typeof GetUserResponseSchema>;
export type UpdateUserSettingsPayload = z.infer<typeof UserSettingsSchema>;
export type UpdateUserResponse = z.infer<typeof GetUserResponseSchema>;
