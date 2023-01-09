import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/createUser.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: CreateUserInput): Promise<CreateUserInput> {
    try {
      return await this.userRepository.save(user, { reload: false });
    } catch (error) {
      Logger.error(error);
    }
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    try {
      return await this.userRepository.findOneByOrFail({
        email: email,
      });
    } catch (error) {
      Logger.error(error);
    }
  }
}
