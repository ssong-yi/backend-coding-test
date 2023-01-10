import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginUserInput } from './dto/loginUserInput.dto';

@Injectable()
export class AuthService {
  private logger: Logger;

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {
    this.logger = new Logger('AuthService');
  }

  async validateUser(loginUserInput: LoginUserInput): Promise<any> {
    try {
      const user = await this.userService.findByEmail(loginUserInput.email);

      if (!user || (user && !compare(loginUserInput.password, user.password))) {
        throw new BadRequestException('Invalid user');
      }

      const { password, ...result } = user;
      return result;
    } catch (error) {
      this.logger.error(error);

      throw new UnauthorizedException();
    }
  }

  async makeAccessToken(user: User) {
    try {
      const payload = { email: user.email, sub: user.id };

      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      this.logger.error(error);
    }
  }
}
