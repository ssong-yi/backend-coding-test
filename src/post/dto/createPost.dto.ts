import { Field, InputType, ArgsType } from '@nestjs/graphql';

@InputType()
@ArgsType()
export class CreatePostInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;
}
