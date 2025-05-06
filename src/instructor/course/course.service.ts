import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto';
import { UpdateCourseDto } from './dto';

@Injectable()
export class CourseService {
  create(createCourseDto: CreateCourseDto) {}

  findAll() {}

  findOne(id: number) {}

  update(id: number, updateCourseDto: UpdateCourseDto) {}

  remove(id: number) {}
}
