import { Controller, Get, Post, Param, Delete, Put, Body, Request, Req, HttpException, HttpStatus, Res } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '../../entity/todolist/todo.entity';
import { UpdateCatDto } from '../../dto/update-cat.dto';
import { ApiException } from '../../common/exceptions/api.exception';
import { ApiErrorCode } from '../../common/enums/api-error-code.enum';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly todoService: TodoService
  ) {}

  @Get()
  findAll(): Promise<Todo[]> {
    console.log("-->TodoController: findAll");
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Res() res, @Param() params, @Body() body) {
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
    console.log(body);
    // this.logger.log(messages.APPLICATION_START);

    this.todoService.create(params)
    return '-->TodoController: This action adds a new cat';
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