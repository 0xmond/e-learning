import { InjectModel } from '@nestjs/mongoose';
import { BaseRepo } from '../base.repo';
import { Model } from 'mongoose';
import { Section, TSection } from './section.model';

export class SectionRepo extends BaseRepo<TSection> {
  constructor(
    @InjectModel(Section.name) private readonly SectionModel: Model<TSection>,
  ) {
    super(SectionModel);
  }
}
