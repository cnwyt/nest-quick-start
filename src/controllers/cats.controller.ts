import { Controller, Get, Post, HttpCode, Param, Body, Put, Delete } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll() {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param() params) {
    console.log(params);
    return `This action returns a #${params.id} cat`;
  }

  // @Post('add')
  // // @HttpCode(204)
  // create() {
  //   return 'This action adds a new cat';
  // }
  @Post('create')
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return 'This action adds a new cat';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    console.log(id);
    console.log(updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log('delete : ' + id);
    return `This action removes a #${id} cat`;
  }
}