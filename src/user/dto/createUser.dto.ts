import { Field, ArgsType, InputType } from '@nestjs/graphql';

@InputType()
@ArgsType()
export class CreateUserInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
