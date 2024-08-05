import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Ingredient } from '../ingredients/ingredient.entity';

@Entity()
export class Recette {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  type: 'Petit-déjeuner' | 'Déjeuner' | 'Dîner';

  @ManyToMany(() => Ingredient, (ingredient) => ingredient.recettes, {
    cascade: true,
  })
  @JoinTable()
  ingredients: Ingredient[];

  @Column('text')
  instructions: string;
}
