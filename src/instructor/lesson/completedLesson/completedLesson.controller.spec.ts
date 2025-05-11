import { Test, TestingModule } from '@nestjs/testing';
import { CompletedLessonController } from './completedLesson.controller';
import { CompletedLessonService } from './completedLesson.service';

describe('CompletedLessonController', () => {
  let controller: CompletedLessonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompletedLessonController],
      providers: [CompletedLessonService],
    }).compile();

    controller = module.get<CompletedLessonController>(CompletedLessonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
