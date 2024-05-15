# Github Dashboard

Welcome to the Github Dashboard project! This application allows you to view information about your public Github repositories, including the number of repositories, recent commits, and changes made to files in each repository.

## Features

- View the total number of public repositories.
- Check the recent commits in each repository.
- See the files that were changed in each commit.
- View the code differences made using the `react-diff-viewer` component.
- Authentication through Github using JWT token.
- Frontend built with React and React Router DOM for routing.
- Backend built with Express.

## Setup

### Prerequisites

- Node.js installed on your machine.
- Github account.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Deepanshu-Kaushik/Github-Dashboard

   ```

2. Navigate to the project directory:

   ```bash
   cd github-dashboard

   ```

3. Install dependencies:

   ```bash
   npm i
   ```

### Configuration

1. Create a .env file in the root directory of the project.

2. Add the following environment variables:

   ```makefile
   GITHUB_CLIENT_ID = your_cliend_id;
   GITHUB_CLIENT_SECRET = your_client_secret;
   JWT_SECRET = your_JWT_SECRET;
   COOKIE_NAME = your_COOKIE_NAME;
   ```

### Running the Application

1. Start the backend server:

   ```bash
   npm start

   ```

2. Start the frontend server:

   ```bash
   npm run dev

   ```

3. Open your browser and navigate to http://localhost:5173 to access the Github Dashboard.

### Technologies Used

- React
- React Router DOM
- Express
- Axios
- JWT
- react-diff-viewer
