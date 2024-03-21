import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';
import { Todo } from './schemas/todo.schema';

@Controller('todo')
export class TodoController {
  constructor(private usersService: TodoService) {}

  @Get()
  getAll(): Promise<Todo[]> {
    return this.usersService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id): Promise<Todo> {
    return this.usersService.getOne(id);
  }
  @Post()
  create(@Body() allProps: TodoDto): Promise<Todo> {
    return this.usersService.create(allProps);
  }
  @Delete(':id')
  remove(@Param('id') id): Promise<Todo> {
    return this.usersService.delete(id);
  }
  @Put(':id')
  update(@Param('id') id, @Body() allProps: TodoDto): Promise<Todo> {
    return this.usersService.update(id, allProps);
  }
}
