import { TokenPayload } from 'google-auth-library';
import {
  DEFAULT_PALETTE_MODE,
  DEFAULT_CURRENCY,
  MEASUREMENTS,
  UpdateUserSettingsPayload,
} from 'gym-shared';

import { UserSettingsEntity, UserEntity } from '@/entities';
import { dataSource } from '../container/modules/database';

function createInitialUserSettings(payload?: UpdateUserSettingsPayload) {
  const settings = new UserSettingsEntity();
  settings.palette = payload?.palette || DEFAULT_PALETTE_MODE;
  settings.currency = payload?.currency || DEFAULT_CURRENCY;
  settings.activeMeasurementsKeys = Object.values(MEASUREMENTS);

  return settings;
}

function UserRepo() {
  return dataSource.getRepository(UserEntity).extend({
    async createUserWithGoogle(payload: TokenPayload) {
      const user = this.create({
        email: payload.email,
        username: payload.name,
      });

      user.settings = createInitialUserSettings();

      await this.save(user);

      return user;
    },

    async updateUserSettings(user: UserEntity, payload: UpdateUserSettingsPayload) {
      const currentUser = await this.findOneOrFail({ where: { id: user.id } });

      const { palette, activeMeasurementsKeys } = currentUser.settings;

      currentUser.settings = {
        ...currentUser.settings,
        palette: payload?.palette || palette,
        activeMeasurementsKeys: payload?.activeMeasurementsKeys || activeMeasurementsKeys,
      };

      const updated = await this.preload({
        id: user.id,
        settings: {
          activeMeasurementsKeys:
            payload?.activeMeasurementsKeys || activeMeasurementsKeys,
          palette: payload?.palette || palette,
        },
      });

      if (updated) {
        await this.save(updated);

        return updated?.settings;
      }

      return currentUser.settings;
    },
  });
}

export default UserRepo();
