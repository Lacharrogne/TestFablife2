import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  findAll() {
    return this.ingredientsService.findAll();
  }

  @Post()
  create(@Body() createIngredientDto: CreateIngredientDto) {
    return this.ingredientsService.create(createIngredientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const isDeleted = this.ingredientsService.remove(parseInt(id, 10));
    if (!isDeleted) {
      throw new HttpException(
        'Impossible de supprimer un ingrédient utilisé dans une recette',
        HttpStatus.CONFLICT,
      );
    }
    return { message: 'Ingrédient supprimé avec succès' };
  }
}
