import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/createPost.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  private logger: Logger;

  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {
    this.logger = new Logger('PostService');
  }

  async create(createPostInput: CreatePostInput): Promise<Post> {
    try {
      return this.postRepository.create(createPostInput);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
