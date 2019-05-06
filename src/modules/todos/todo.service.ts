import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../../entity/todolist/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) { }

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async create(params: any): Promise<string> {
    let todo = new Todo();
    todo.title = 'title11222';
    todo.description = 'novak...';
    todo.createTime = 20;
    todo.userId = 123;
    console.log(todo);

    return this.todoRepository.save(todo)
      .then(res => {
        console.log('---->res:');
        console.log(res);

        return 'create employee ...done'
      })
      .catch(err => {
        console.log('---->error:');
        console.log(err);
        return err
      });
  }

  async findOneById(id: number): Promise<Todo> {
    return await this.todoRepository.findOne({
      id: id
    }).then(res => {
      console.log('---->res:');
      console.log(res);

      return res
    }).catch(err => {
      console.log('---->error:');
      console.log(err);
      return err
    });
  }
}