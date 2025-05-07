import { Injectable, NotFoundException, InternalServerErrorException } from "@nestjs/common";
import { createSectionDto, updateSectionDto } from "./dto";
import { SectionRepo } from "src/db/section/section.repo";
import { Types } from "mongoose";

@Injectable()
export class sectionService {
  constructor(private readonly sectionRepo: SectionRepo) {}

  async create(dto: createSectionDto) {
    try {
      const sectionData = { ...dto, courseId: new Types.ObjectId(dto.courseId) };
      return await this.sectionRepo.create(sectionData);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create section: ' + error.message);
    }
  }

  async findOne(id: Types.ObjectId) {
    try {
      const section = await this.sectionRepo.findOne({ filter: { _id: id } });
      if (!section) throw new NotFoundException('Section not found');
      return section;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to fetch section: ' + error.message);
    }
  }

  async findAll() {
    try {
      return await this.sectionRepo.find({});
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch sections: ' + error.message);
    }
  }

  async update(id: Types.ObjectId, dto: updateSectionDto) {
    try {
      const updatedSection = await this.sectionRepo.updateOne({
        filter: { _id: id },
        update: { ...dto },
        options: { new: true },
      });

      if (!updatedSection) {
        throw new NotFoundException('Section not found or could not be updated');
      }

      return updatedSection;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to update section: ' + error.message);
    }
  }

  async delete(id: Types.ObjectId) {
    try {
      const result = await this.sectionRepo.deleteOne({ _id: id });

      if (result.deletedCount === 0) {
        throw new NotFoundException('Section not found or could not be deleted');
      }

      return { message: 'Section deleted successfully' };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to delete section: ' + error.message);
    }
  }
}
