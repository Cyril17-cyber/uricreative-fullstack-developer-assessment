# Job Application Dashboard
This project is a Fullstack application built as part of the Uri Creative's Fullstack Developer Assessment by Cyril Asogwa. It provides a dashboard to manage job applications, view statistics, and filter applications by date range and status.
## Features
1. Frontend: Built with Next.js and styled using Material-UI.
    * Displays job applications in a paginated table.
    * Allows filtering by status and date range.
    * Displays application statistics in a bar chart.
2. Backend: Developed using Nest.js.
    * Provides REST API endpoints for job applications and statistics.
    * Uses in-memory storage for simplicity.
3. Charting: Integrated Victory.js for bar chart visualization.

## Technologies Used
1. Frontend:
    * Next.js
    * Material-UI
    * Victory.js
2. Backend:
    * Nest.js
3. Others:
    * Axios (for API integration)
  
## Setup Instructions
### Prerequisites
* Node.js (v18 or later)
* npm (v8 or later)

## Clone the Repository
```
git clone https://github.com/Cyril17-cyber/uricreative-fullstack-developer-assessment.git
cd uricreative-fullstack-developer-assessment
```
## Backend Setup
1. Navigate to the backend directory:
```
cd backend
```
2. Install dependencies:

```
npm install
```
2. Start the backend server:
```
npm run start
```
* The backend will run at http://localhost:3000.

## Frontend Setup
1. Navigate to the frontend directory:
```
cd ../frontend
```
2. Install dependencies:
```
npm install
```
3. Start the frontend development server:
```
npm run dev
```
* The frontend will run at http://localhost:3001.
