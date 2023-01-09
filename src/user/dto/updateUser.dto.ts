import { InputType, ArgsType, Field } from '@nestjs/graphql';

@InputType()
@ArgsType()
export class UpdateUserInput {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
