import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { IsEmail, Length } from 'class-validator';
import { USER_ROLES } from 'gym-shared';

import * as E from '@/entities';

@Entity()
@Unique(['email'])
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @IsEmail()
  @Column('text')
  email!: string;

  @Column('text')
  username!: string;

  @Column({
    type: 'enum',
    enum: USER_ROLES,
    default: USER_ROLES.USER,
  })
  role!: USER_ROLES;

  @OneToOne(() => E.UserSettingsEntity, { cascade: true, eager: true })
  @JoinColumn()
  settings!: E.UserSettingsEntity;

  // @OneToMany(() => E.MeasurementsEntity, ({ user }) => user)
  // measurements: E.MeasurementsEntity[];

  // @OneToMany(() => E.NutritionGoalsEntity, ({ user }) => user)
  // nutritionGoals: E.NutritionGoalsEntity[];

  //   @OneToMany(() => E.IngredientEntity, ({ user }) => user)
  //   ingredients!: E.IngredientEntity[];

  // @OneToMany(() => E.MealEntity, ({ user }) => user)
  // meals: E.MealEntity[];

  // @OneToMany(() => E.EatingDayPlanEntity, ({ user }) => user)
  // eatingDayPlans: E.EatingDayPlanEntity[];

  // // Nutrition groups

  //   @OneToMany(() => E.IngredientGroupEntity, ({ user }) => user, {
  //     cascade: true,
  //   })
  //   ingredientGroups!: E.IngredientGroupEntity[];

  // @OneToMany(() => E.MealGroupEntity, ({ user }) => user, { cascade: true })
  // mealGroups: E.MealGroupEntity[];

  // @OneToMany(() => E.EatingDayPlanGroupEntity, ({ user }) => user, {
  //   cascade: true,
  // })
  // eatingDayPlanGroups: E.EatingDayPlanGroupEntity[];
}
