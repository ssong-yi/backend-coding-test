import { Logger } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/loginUserInput.dto';

@Resolver()
export class AuthResolver {
  private logger: Logger;

  constructor(private authService: AuthService) {
    this.logger = new Logger('AuthResolver');
  }

  @Mutation(() => User)
  async login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    const authUser = await this.authService.validateUser(loginUserInput);
    const token = await this.authService.makeAccessToken(authUser);

    return { ...authUser, token };
  }
}
