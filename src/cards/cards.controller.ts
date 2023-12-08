// src/cards/cards.controller.ts
import { Controller, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { CardsService } from './cards.service';

@ApiTags('cards')
@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post(':listId')
  @ApiOperation({ summary: 'Create a new card in a list' })
  @ApiBody({ type: String })
  @ApiResponse({ status: 201, description: 'Card successfully created' })
  createCard(@Param('listId') listId: number, @Body() { title, description }: { title: string, description: string }) {
    return this.cardsService.createCard(listId, title, description);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update card information' })
  @ApiBody({ type: String })
  @ApiResponse({ status: 200, description: 'Card information successfully updated' })
  updateCard(@Param('id') id: number, @Body() newInfo: string) {
    return this.cardsService.updateCard(id, newInfo);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a card' })
  @ApiResponse({ status: 200, description: 'Card successfully deleted' })
  deleteCard(@Param('id') id: number) {
    return this.cardsService.deleteCard(id);
  }
}
