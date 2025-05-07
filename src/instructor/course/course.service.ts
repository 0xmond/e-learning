import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto, UpdateCourseDto } from './dto';
import { TUser } from 'src/db/user/user.model';
import { CourseRepo } from 'src/db/course/course.repo';
import { Request } from 'express';
import { Types } from 'mongoose';
import { Messages } from 'src/common/enum';

@Injectable()
export class CourseService {
  constructor(private readonly courseRepo: CourseRepo) {}

  async create(createCourseDto: CreateCourseDto, user: TUser) {
    const course = await this.courseRepo.create({
      title: createCourseDto.title,
      description: createCourseDto.description,
      thumbnail: createCourseDto.image,
      instructor: user._id,
      category: createCourseDto.category,
      level: createCourseDto.level,
      language: createCourseDto.language,
      price: createCourseDto.price,
      isPublished: createCourseDto.isPublished,
    });

    return course;
  }

  async find(request: Request) {
    let { limit, sort, page, ...filter } = request['parsedQuery'];

    filter = JSON.parse(
      JSON.stringify(filter).replace(/gte|lte/g, (match) => `$${match}`),
    );

    const skip = (page - 1) * limit;

    filter.isPublished = true;
    const courses = await this.courseRepo.find({
      filter,
      limit,
      sort,
      skip,
      populate: [
        { path: 'instructor', select: 'firstName lastName profilePicture' },
        { path: 'category', select: 'name' },
      ],
    });

    return courses;
  }

  async findOne(id: Types.ObjectId) {
    const course = await this.courseRepo.findOne({
      filter: { _id: id, isPublished: true },
      populate: [
        { path: 'instructor', select: 'firstName lastName profilePicture' },
        { path: 'category', select: 'name' },
      ],
    });

    if (!course) throw new NotFoundException(Messages.course.notFound);

    return course;
  }

  async delete(id: Types.ObjectId, user: TUser) {
    const course = await this.courseRepo.findOne({
      filter: { _id: id, instructor: user._id },
    });

    if (!course) throw new NotFoundException(Messages.course.notFound);

    await course.deleteOne();

    return course;
  }

  async update(
    id: Types.ObjectId,
    user: TUser,
    updateCourseDto: UpdateCourseDto,
  ) {
    const course = await this.courseRepo.findOne({
      filter: { instructor: user._id, _id: id },
    });

    if (!course) throw new NotFoundException(Messages.course.notFound);

    await course.updateOne({ ...updateCourseDto }, { new: true });

    return course;
  }
}
