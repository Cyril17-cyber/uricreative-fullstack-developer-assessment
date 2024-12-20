import { Injectable } from '@nestjs/common';
import { JobApplication } from './job-application.model';

@Injectable()
export class JobApplicationService {
  private applications: JobApplication[] = [
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
    {
      id: '3',
      jobTitle: 'Fullstack Engineer',
      companyName: 'Google',
      status: 'rejected',
      dateApplied: '2024-10-21',
    },
    {
      id: '4',
      jobTitle: 'Devops Engineer',
      companyName: 'Amazon',
      status: 'accepted',
      dateApplied: '2024-09-17',
    },
    {
      id: '5',
      jobTitle: 'UI/UX Designer',
      companyName: 'Apple',
      status: 'pending',
      dateApplied: '2024-08-10',
    },
    {
      id: '6',
      jobTitle: 'Fullstack Engineer',
      companyName: 'Spotify',
      status: 'accepted',
      dateApplied: '2024-07-03',
    },
  ];

  // Retrieve all job applications
  getAllApplications(): JobApplication[] {
    return this.applications;
  }

  // Retrieve statistics for job applications
  getStats() {
    const total = this.applications.length;

    const byStatus = this.applications.reduce((acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1;
      return acc;
    }, {});

    const byMonth = this.applications.reduce((acc, app) => {
      const month = app.dateApplied.slice(0, 7); // Extract YYYY-MM
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {});

    return { total, byStatus, byMonth };
  }
}
