import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOperator } from 'typeorm';
import { Todo } from '../../entity/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) { }

  async findAll(params: any): Promise<Todo[]> {
    console.log(params);
    // let page : number = params.page ? params.page : 1;
    // let pageSize : number = params.size ? params.size : 10;
    // let where = {
    //   skip: page * pageSize,
    //   take: pageSize
    // }
    // console.log(where);
    // return await 
    return await this.todoRepository.find();
  }

  async create(params: any): Promise<string> {
    let todo = new Todo();
    todo.title = params.title;
    todo.content = params.content ? params.content : '';
    todo.createTime = new Date().getTime() /1000;
    todo.userId = params.userId ? params.userId : '10010';
    console.log(todo);

    return this.todoRepository.save(todo)
      .then(res => {
        console.log('---->res:');
        console.log(res);
        return res;
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