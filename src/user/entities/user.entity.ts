import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Comment } from 'src/comment/entities/comment.entity';

@Entity('USER')
@ObjectType()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', length: 50, unique: true, comment: '이메일' })
  @Index()
  email: string;

  @Column({ type: 'varchar', length: 300, comment: '비밀번호' })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Field(() => [Post], { nullable: true })
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @Field(() => [Comment], { nullable: true })
  @OneToMany(() => Comment, (comment) => comment.author)
  comments: Comment[];
}
