// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './user-dto';

@Injectable()
export class UsersService {
  private users = [];

  registerUser(username: string, password: string) {
    const newUser = { id: this.users.length + 1, username, password, role: 'user' };
    this.users.push(newUser);
    return newUser;
  }

  loginUser(username: string, password: string) {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  updateUser(id: number, newInfo: UserDto) {
    const user = this.users.find(u => u.id === id);
    if (user) {
    
      Object.assign(user, newInfo);
      return user;
    }
    throw new NotFoundException('User not found');
  }
}
