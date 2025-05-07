import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { Types } from 'mongoose';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { TUser } from 'src/db/user/user.model';
import { CourseService } from './course.service';
import { CreateCourseDto, UpdateCourseDto } from './dto';
import { UserRoles } from 'src/common/enum';
import { Auth } from 'src/common/decorators/auth.decorator';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  @Auth(UserRoles.INSTRUCTOR)
  async create(
    @Body() createCourseDto: CreateCourseDto,
    @CurrentUser() user: TUser,
  ) {
    const course = await this.courseService.create(createCourseDto, user);
    return {
      success: true,
      data: course,
    };
  }

  @Get()
  @Public()
  async find(@Req() request: Request) {
    const courses = await this.courseService.find(request);
    return { success: true, data: courses };
  }

  @Get(':id')
  @Public()
  async findOne(@Param('id') id: Types.ObjectId) {
    const course = await this.courseService.findOne(id);
    return { success: true, data: course };
  }

  @Put(':id')
  @Auth(UserRoles.INSTRUCTOR)
  async update(
    @Param('id') id: Types.ObjectId,
    @Body() updateCourseDto: UpdateCourseDto,
    @CurrentUser() user: TUser,
  ) {
    const course = await this.courseService.update(id, user, updateCourseDto);
    return { success: true, data: course };
  }

  @Delete(':id')
  @Auth(UserRoles.INSTRUCTOR)
  async delete(@Param('id') id: Types.ObjectId, @CurrentUser() user: TUser) {
    const course = await this.courseService.delete(id, user);
    return { success: true, data: course };
  }
}
