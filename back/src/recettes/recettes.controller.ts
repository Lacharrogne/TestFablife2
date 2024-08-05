import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { RecettesService } from './recettes.service';
import { CreateRecetteDto } from './dto/create-recette.dto';

@Controller('recettes')
export class RecettesController {
  constructor(private readonly recettesService: RecettesService) {}

  @Get()
  findAll() {
    return this.recettesService.findAll();
  }

  @Post()
  create(@Body() createRecetteDto: CreateRecetteDto) {
    return this.recettesService.create(createRecetteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recettesService.remove(parseInt(id, 10));
  }
}
