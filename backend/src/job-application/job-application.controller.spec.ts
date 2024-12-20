import { Test, TestingModule } from '@nestjs/testing';
import { JobApplicationController } from './job-application.controller';
import { JobApplicationService } from './job-application.service';

describe('JobApplicationController', () => {
  let controller: JobApplicationController;
  let service: JobApplicationService;

  const mockJobApplicationService = {
    getAllApplications: jest.fn(() => [
      {
        id: '1',
        jobTitle: 'Frontend Developer',
        companyName: 'TechCorp',
        status: 'accepted',
        dateApplied: '2024-12-12',
      },
      {
        id: '2',
        jobTitle: 'Backend Developer',
        companyName: 'UriCreative',
        status: 'pending',
        dateApplied: '2024-11-19',
      },
    ]),
    getStats: jest.fn(() => ({
      total: 2,
      byStatus: { accepted: 1, pending: 1 },
      byMonth: { '2024-12': 1, '2024-11': 1 },
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobApplicationController],
      providers: [
        {
          provide: JobApplicationService,
          useValue: mockJobApplicationService,
        },
      ],
    }).compile();

    controller = module.get<JobApplicationController>(JobApplicationController);
    service = module.get<JobApplicationService>(JobApplicationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all applications', () => {
    expect(controller.getAllApplications()).toEqual(
      mockJobApplicationService.getAllApplications(),
    );
  });

  it('should return application stats', () => {
    expect(controller.getApplicationStats()).toEqual(
      mockJobApplicationService.getStats(),
    );
  });
});
