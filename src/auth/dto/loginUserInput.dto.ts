import { Field, ArgsType, InputType } from '@nestjs/graphql';

@InputType()
@ArgsType()
export class LoginUserInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
