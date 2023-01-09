import { Field, ArgsType, InputType } from '@nestjs/graphql';

@InputType()
@ArgsType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
