import { Field, InputType, ArgsType } from '@nestjs/graphql';

@InputType()
@ArgsType()
export class UpdatePostInput {
  @Field()
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;
}
