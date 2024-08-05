import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Recette } from '../recettes/recette.entity';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  allee: string;

  @ManyToMany(() => Recette, (recette) => recette.ingredients)
  recettes: Recette[];
}
