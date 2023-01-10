import { Mutation, Resolver, Args, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CreateUserInput } from './dto/createUser.dto';
import { UpdateUserInput } from './dto/updateUser.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwtAuth.guard';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.userService.create(createUserInput);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => User)
  async findUserByEmail(@Args('findUserByEmail') email: string) {
    return await this.userService.findByEmail(email);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return await this.userService.update(updateUserInput.id, updateUserInput);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => User)
  async deleteUser(@Args('deleteUserId') id: string) {
    return await this.userService.delete(id);
  }
}
