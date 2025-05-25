import { Test, TestingModule } from '@nestjs/testing';
import { CompletedLessonService } from './completedLesson.service';

describe('CompletedLessonService', () => {
  let service: CompletedLessonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompletedLessonService],
    }).compile();

    service = module.get<CompletedLessonService>(CompletedLessonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
