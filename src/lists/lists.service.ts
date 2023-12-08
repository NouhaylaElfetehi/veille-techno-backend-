// src/lists/lists.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';

import { ListDto } from './list-dto';

@Injectable()
export class ListsService {
    private lists: ListDto[] = [];
    private currentId = 1;

    createList(title: string): ListDto {
        const newList: ListDto = {
            title,
            id: this.currentId++, 
        };
        this.lists.push(newList);
        return newList;
    }

    deleteList(id: number): void {
        const index = this.lists.findIndex(list => list.id === id);
        if (index !== -1) {
            this.lists.splice(index, 1);
        } else {
            throw new NotFoundException('List not found');
        }
    }

    getAllLists(): ListDto[] {
        return this.lists;
    }
}
