import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Post } from 'src/post/entities/post.entity';

@ObjectType()
@Entity('COMMENT')
export class Comment {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'text', comment: '댓글 내용' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.comments)
  author: User;

  @Field(() => Post)
  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;
}
