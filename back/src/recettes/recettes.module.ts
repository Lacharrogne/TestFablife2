import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecettesService } from './recettes.service';
import { RecettesController } from './recettes.controller';
import { Recette } from './recette.entity';
import { Ingredient } from '../ingredients/ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recette, Ingredient])],
  providers: [RecettesService],
  controllers: [RecettesController],
  exports: [RecettesService],
})
export class RecettesModule {}
