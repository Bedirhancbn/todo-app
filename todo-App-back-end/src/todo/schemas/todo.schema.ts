import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;
@Schema()
export class Todo {
  @Prop()
  todoDescription: string;
  @Prop()
  todoComplete: boolean;
  @Prop()
  date: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
