import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { Model } from 'mongoose';
import { TodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private userModel: Model<TodoDocument>) {}

  async getAll(): Promise<Todo[]> {
    return await this.userModel.find();
  }
  async getOne(id: string): Promise<Todo> {
    return await this.userModel.findById(id);
  }
  async create(allProps: TodoDto): Promise<Todo> {
    const user = new this.userModel(allProps);
    return await user.save();
  }
  async delete(id: string): Promise<Todo> {
    return await this.userModel.findByIdAndDelete(id);
  }
  async update(id: string, allProps: TodoDto): Promise<Todo> {
    return await this.userModel.findByIdAndUpdate(id, allProps);
  }
}
