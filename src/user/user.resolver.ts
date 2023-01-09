import { Mutation, Resolver, Args, Query } from '@nestjs/graphql';
import { CreateUserInput } from './dto/createUser.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UpdateUserInput } from './dto/updateUser.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.userService.create(createUserInput);
  }

  @Query(() => User)
  async findUserByEmail(@Args('findUserByEmail') email: string) {
    return await this.userService.findByEmail(email);
  }

  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return await this.userService.update(updateUserInput.id, updateUserInput);
  }
}
