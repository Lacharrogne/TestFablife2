import { IsString, IsArray, IsEnum } from 'class-validator';

export class CreateRecetteDto {
  @IsString()
  nom: string;

  @IsEnum(['Petit-déjeuner', 'Déjeuner', 'Dîner'])
  type: 'Petit-déjeuner' | 'Déjeuner' | 'Dîner';

  @IsArray()
  ingredients: number[];

  @IsString()
  instructions: string;
}
