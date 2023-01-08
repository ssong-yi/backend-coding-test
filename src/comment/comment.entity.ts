import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Post } from 'src/post/post.entity';

@Entity('COMMENT')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', comment: '댓글 내용' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToOne(() => User)
  @JoinColumn()
  author: User;

  @OneToOne(() => Post)
  @JoinColumn()
  post: Post;
}
