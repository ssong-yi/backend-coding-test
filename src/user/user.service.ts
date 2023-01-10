import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/createUser.dto';
import { UpdateUserInput } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  private logger: Logger;

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    this.logger = new Logger('UserService');
  }

  async create(createUserInput: CreateUserInput): Promise<User> {
    try {
      const { email, password } = createUserInput;

      const salt: string = await bcrypt.genSalt(10);
      const hashPassword: string = await bcrypt.hash(password, salt);

      const newUser = this.userRepository.create({
        email,
        password: hashPassword,
      });

      return await newUser.save();
    } catch (error) {
      this.logger.error(error);
    }
  }

  async findByEmail(email: string): Promise<User | undefined> {
    try {
      return await this.userRepository.findOneByOrFail({ email });
    } catch (error) {
      this.logger.error(error);
    }
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    try {
      await this.userRepository.save(updateUserInput);
      return this.userRepository.findOneByOrFail({ id });
    } catch (error) {
      this.logger.error(error);
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.userRepository.findOneByOrFail({ id });
      await this.userRepository.softRemove({ id });
      return true;
    } catch (error) {
      this.logger.error(error);
    }
  }
}
