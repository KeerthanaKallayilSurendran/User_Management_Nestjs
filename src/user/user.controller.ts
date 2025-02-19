import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './Schema/users.schema';
import { userDto } from './Dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // get alll user list 
  @Get()
  async getAllUsers(){
    return this.userService.getAllUsers()
  }

  // add new user
  @Post()
  async addUser(@Body() user:userDto){
    return this.userService.addUser(user)
  }

  // update existing user by id
  @Put(':id')
  async updateUser(@Param('id') id:string , @Body() user:userDto){
    return this.userService.updateUser(id, user)
  }

  // delete a user by id
  @Delete(':id')
  async deleteUser(@Param('id') id:string){
    return this.userService.deleteUser(id)
  }
}
