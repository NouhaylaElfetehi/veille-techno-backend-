// src/users/users.controller.ts
import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserDto } from './user-dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: UserDto })
  @ApiResponse({ status: 201, description: 'User successfully registered' })
  registerUser(@Body() userDto: UserDto) {
    const { username, password } = userDto;
    return this.usersService.registerUser(username, password);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  @ApiBody({ type: UserDto })
  @ApiResponse({ status: 200, description: 'User successfully logged in' })
  loginUser(@Body() userDto: UserDto) {
    const { username, password } = userDto;
    return this.usersService.loginUser(username, password);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user information' })
  @ApiBody({ type: UserDto })
  @ApiResponse({ status: 200, description: 'User information successfully updated' })
  updateUser(@Param('id') id: number, @Body() newInfo: any) {
    return this.usersService.updateUser(id, newInfo);
  }
}