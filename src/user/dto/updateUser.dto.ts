import { InputType, ArgsType, Field } from '@nestjs/graphql';

@InputType()
@ArgsType()
export class UpdateUserInput {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  password: string;
}
