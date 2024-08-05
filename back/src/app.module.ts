import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecettesModule } from './recettes/recettes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'maxime',
      password: 'Asce0610',
      database: 'recipes',
      autoLoadEntities: true,
      synchronize: true,
    }),
    IngredientsModule,
    RecettesModule,
  ],
})
export class AppModule {}
