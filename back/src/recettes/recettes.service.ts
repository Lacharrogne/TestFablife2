import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecetteDto } from './dto/create-recette.dto';
import { Recette } from './recette.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from '../ingredients/ingredient.entity';

@Injectable()
export class RecettesService {
  constructor(
    @InjectRepository(Recette)
    private recetteRepository: Repository<Recette>,
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async findAll(): Promise<Recette[]> {
    return this.recetteRepository.find({ relations: ['ingredients'] });
  }

  async create(createRecetteDto: CreateRecetteDto): Promise<Recette> {
    const { ingredients, ...recetteData } = createRecetteDto;

    const loadedIngredients =
      await this.ingredientRepository.findByIds(ingredients);

    const newRecette = this.recetteRepository.create({
      ...recetteData,
      ingredients: loadedIngredients,
    });

    return this.recetteRepository.save(newRecette);
  }

  async remove(id: number): Promise<void> {
    const recette = await this.recetteRepository.findOne({
      where: { id },
    });

    if (!recette) {
      throw new NotFoundException(`Recette avec l'ID ${id} introuvable`);
    }

    await this.recetteRepository.remove(recette);
  }

  async findOne(id: number): Promise<Recette> {
    const recette = await this.recetteRepository.findOne({
      where: { id },
      relations: ['ingredients'],
    });

    if (!recette) {
      throw new NotFoundException(`Recette avec l'ID ${id} introuvable`);
    }

    return recette;
  }
}
