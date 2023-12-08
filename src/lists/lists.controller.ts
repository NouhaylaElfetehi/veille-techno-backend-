// src/lists/lists.controller.ts
import { Controller, Post, Delete, Body, Param, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { ListsService } from './lists.service';
import { ListDto } from './list-dto';

@ApiTags('lists')
@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new list' })
  @ApiBody({ type: ListDto })
  @ApiResponse({ status: 201, description: 'List successfully created' })
  createList(@Body() title: string) {
    return this.listsService.createList(title);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a list' })
  @ApiResponse({ status: 200, description: 'List successfully deleted' })
  deleteList(@Param('id') id: number) {
    return this.listsService.deleteList(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all lists' })
  @ApiResponse({ status: 200, description: 'Lists successfully retrieved' })
  getAllLists() {
    return this.listsService.getAllLists();
  }
}
