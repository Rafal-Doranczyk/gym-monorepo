import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import {
  PALETTE_MODES,
  DEFAULT_PALETTE_MODE,
  CURRENCIES,
  DEFAULT_CURRENCY,
  MEASUREMENTS,
} from 'gym-shared';

import { UserEntity } from '@/entities';

@Entity()
export default class UserSettings {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    type: 'enum',
    enum: PALETTE_MODES,
    default: DEFAULT_PALETTE_MODE,
  })
  palette!: PALETTE_MODES;

  @Column({
    type: 'enum',
    enum: CURRENCIES,
    default: DEFAULT_CURRENCY,
  })
  currency!: CURRENCIES;

  @Column({
    type: 'enum',
    enum: MEASUREMENTS,
    default: [Object.values(MEASUREMENTS)],
    array: true,
  })
  activeMeasurementsKeys!: MEASUREMENTS[];

  @OneToOne(() => UserEntity)
  user!: UserEntity;
}
