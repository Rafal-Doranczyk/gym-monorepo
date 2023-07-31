import { z } from 'zod';

import { PALETTE_MODES, CURRENCIES, MEASUREMENTS_TYPES } from '../index';

export const UserSettingsSchema = z.object({
  palette: z.nativeEnum(PALETTE_MODES),
  currency: z.nativeEnum(CURRENCIES),
  activeMeasurementsKeys: z.array(z.nativeEnum(MEASUREMENTS_TYPES)),
});

export const UserSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  email: z.string().email(),
  username: z.string(),
  settings: UserSettingsSchema,
});

export type GetUserResponse = z.infer<typeof UserSchema>;
export type UpdateUserSettingsPayload = z.infer<typeof UserSettingsSchema>;
export type UpdateUserSettingsResponse = z.infer<typeof UserSettingsSchema>;
