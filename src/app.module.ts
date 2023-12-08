// src/app.module.ts
import { Module } from '@nestjs/common';
import { ListsModule } from './lists/lists.module';
import { UsersModule } from './users/users.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [ListsModule, UsersModule, CardsModule],
})
export class AppModule {}
