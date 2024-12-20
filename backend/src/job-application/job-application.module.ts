import { Module } from '@nestjs/common';
import { JobApplicationController } from './job-application.controller';
import { JobApplicationService } from './job-application.service';

@Module({
  providers: [JobApplicationService],
  controllers: [JobApplicationController]
})
export class JobApplicationModule {}
