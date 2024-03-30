import { ApiProperty } from '@nestjs/swagger';

export class Todo {
  @ApiProperty()
  id: string;

  @ApiProperty()
  todoDescription: string;

  @ApiProperty()
  todoComplete: boolean;

  @ApiProperty()
  date: string;
}
