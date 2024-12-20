import { Controller, Get } from '@nestjs/common';
import { JobApplicationService } from './job-application.service';

@Controller('applications')
export class JobApplicationController {
  constructor(private readonly jobApplicationService: JobApplicationService) {}

  // Endpoint to get all job applications
  @Get()
  getAllApplications() {
    return this.jobApplicationService.getAllApplications();
  }

  // Endpoint to get application statistics
  @Get('stats')
  getApplicationStats() {
    return this.jobApplicationService.getStats();
  }
}
