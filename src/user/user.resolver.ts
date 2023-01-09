import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { CreateUserInput } from './dto/createUser.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { isEmail } from 'validator';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    if (createUserInput.email && !isEmail(createUserInput.email)) {
      throw new Error('Email is not in valid format');
    }

    return await this.userService.create(createUserInput);
  }
}
