// src/cards/cards.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CardsService {
  private cards = [];
  private currentId = 1;

  createCard(listId: number, title: string, description: string) {
    const newCard = { id: this.currentId++, title, description };
    const listIndex = this.cards.findIndex(l => l.id === listId);
    if (listIndex !== -1) {
      this.cards[listIndex].cards.push(newCard);
      return newCard;
    } else {
      throw new NotFoundException('List not found');
    }
  }

  updateCard(cardId: number, newInfo: any) {
    const cardIndex = this.cards.findIndex(c => c.id === cardId);
    if (cardIndex !== -1) {
      this.cards[cardIndex] = { ...this.cards[cardIndex], ...newInfo };
      return this.cards[cardIndex];
    } else {
      throw new NotFoundException('Card not found');
    }
  }

  deleteCard(cardId: number) {
    const cardIndex = this.cards.findIndex(c => c.id === cardId);
    if (cardIndex !== -1) {
      this.cards.splice(cardIndex, 1);
    } else {
      throw new NotFoundException('Card not found');
    }
  }
}
