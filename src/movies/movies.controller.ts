import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';
import { deflateSync } from 'zlib';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/search') //:id보다 위에 있어야 한다, 아니면 id가 search인줄 알고 search가 제대로 동작X
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): string {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  Create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie the id: ${movieId}`;
  }

  @Patch('/:id') //update
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }

 
}
