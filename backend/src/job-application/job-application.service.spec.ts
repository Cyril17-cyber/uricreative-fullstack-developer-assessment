import { Test, TestingModule } from '@nestjs/testing';
import { JobApplicationService } from './job-application.service';

describe('JobApplicationService', () => {
  let service: JobApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobApplicationService],
    }).compile();

    service = module.get<JobApplicationService>(JobApplicationService);
  });

  it('should return all applications', () => {
    const applications = service.getAllApplications();
    expect(applications.length).toBe(6);
    expect(applications[0].jobTitle).toBe('Frontend Developer');
  });

  it('should return correct statistics', () => {
    const stats = service.getStats();
    expect(stats.total).toBe(6);
    expect(stats.byStatus['accepted']).toBe(3);
    expect(stats.byMonth['2024-10']).toBe(1);
  });
});
