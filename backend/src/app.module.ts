import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobApplicationModule } from './job-application/job-application.module';
import { JobApplicationService } from './job-application/job-application.service';

@Module({
  imports: [JobApplicationModule],
  controllers: [AppController],
  providers: [AppService, JobApplicationService],
})
export class AppModule {}
