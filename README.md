# React Blog Application

A React application for managing and viewing blog posts with a sidebar for navigation. This project uses React, TypeScript, styled-components, and Ant Design for UI components, and axios for API requests.

## Features

- Dashboard and Blogs Pages: Navigate between the dashboard and a list of blog posts.
- Post Detail View: View details of a specific blog post.
- Edit and Delete Posts: Edit and delete blog posts. (No reflection as using dummy api's)
- User Information: Fetch and display user details in the sidebar

## Technologies Used

- React: Frontend library for building user interfaces.
- TypeScript: Superset of JavaScript that adds static types.
- styled-components: For writing CSS in JavaScript.
- Ant Design: A design system and component library for React.
- axios: For making HTTP requests.
- react-router-dom: For routing within the application.
- @testing-library/react: For Testing

## Setup and Installation

### Prerequisites

- Node.js and Yarn

### Install dependencies:

`yarn install`

### Create a .env file in the root directory of the project and add the following:

REACT_APP_API_BASE_URL=https://jsonplaceholder.typicode.com

### Run App

First run this cammand, it will install all depedencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Test App

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Project Structure

- src: Main source directory.
  - components: Contains reusable components like Sidebar.
  - pages: Contains the pages of the application like Blogs and PostDetail.
  - hooks: Custom hooks like useGetUser for fetching data.
  - App.tsx: Main app component with routing.
  - index.tsx: Entry point for the React application.
