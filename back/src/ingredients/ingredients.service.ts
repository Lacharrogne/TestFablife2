import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { Ingredient } from './ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async findAll(): Promise<Ingredient[]> {
    return this.ingredientRepository.find();
  }

  async create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    const newIngredient: Ingredient = this.ingredientRepository.create({
      ...createIngredientDto,
      recettes: [],
    });

    return this.ingredientRepository.save(newIngredient);
  }

  async remove(id: number): Promise<void> {
    const ingredient = await this.ingredientRepository.findOneBy({ id });

    if (!ingredient) {
      throw new NotFoundException(`Ingrédient avec l'ID ${id} introuvable`);
    }

    await this.ingredientRepository.remove(ingredient);
  }
}
