import { Controller, Get, Post, Param, Delete, Put, Body, Request, Req, HttpException, HttpStatus, Res } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ApiException } from '../../common/exceptions/api.exception';
import { ApiErrorCode } from '../../common/enums/api-error-code.enum';
import { Todo } from '../../entity/todo.entity';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly todoService: TodoService
  ) {}

  @Get()
  findAll(@Param() params): Promise<Todo[]> {
    console.log("-->TodoController: findAll");
    return this.todoService.findAll(params);
  }

  @Get(':id')
  findOne(@Param() params, @Body() body) {
    let id = parseInt(params.id);
    // info('----->自定义日志');
    console.warn(id)
    console.warn(isNaN(id))
    if(isNaN(id) || typeof id !== 'number' || id <= 0) {
        throw new ApiException('用户ID错误', ApiErrorCode.INVALID_USER_ID, HttpStatus.OK);
    }
    console.log("-->TodoController: findOne");
    console.log(params);
    console.log(body);
    console.log(body.Act);
    return this.todoService.findOneById(params.id).then(x => {
        console.error('---> findOne: ')
        console.error(x)
        return x
    }).catch(err => {
        console.error(err)
    });
  }

  @Post()
  create(@Param() params, @Body() body) {
    console.log("-->TodoController:  create");
    console.log(params);
    console.log(body.title); 
    if(body.title == '' || typeof body.title == 'undefined') {
      throw new ApiException('参数错误:title', ApiErrorCode.INVALID_USER_ID, HttpStatus.OK);
    }

    let res = this.todoService.create(body)
    return res;
  }

  @Put(':id')
  update(@Param('id') id, @Body() UpdateCatDto) {
    return `-->TodoController: This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `-->TodoController: This action removes a #${id} cat`;
  }
}