export class JobApplication {
  id: string; // Unique identifier for the job application
  jobTitle: string; // Title of the job 
  companyName: string; // Name of the company
  status: 'pending' | 'accepted' | 'rejected'; // Current status of the application
  dateApplied: string; // Date the application was submitted (YYYY-MM-DD format)
}
