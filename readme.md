# Blog Posting Application with User Authentication and Authorization

This is a backend application project that allows users to post a blog. Users are able to create accounts with secure passwords that are hashed and stored in the database. Each user can view posts and go to their dashboard to check comments on their posts. If a user is inactive for too long, the system will log them off, and they need to re-login to regain access.

## Technologies Used

This project was built using the following technologies:

- Node.js
- Express.js
- MongoDB
- Bcrypt.js
- JSON Web Tokens (JWT)

## Installation

To install and run this application, follow these steps:

1. Clone this repository
2. Install dependencies using `npm install`
3. Create a `.env` file in the root directory and set the following environment variables:

`DB_URI=<your_mongodb_uri>` <br/>
`JWT_SECRET=<your_jwt_secret>` <br/>
`SESSION_SECRET=<your_session_secret>`

4. Start the application using npm start

## Usage

To use this application, follow these steps:

1. Register for an account by going to the registration page and filling out the form.
2. Log in to the application using your username and password.
3. To create a new post, click on the "New Post" button on the dashboard page and fill out the form.
4. To view your posts and comments, click on the "My Posts" button on the dashboard page.
5. To view all posts and comments, click on the "All Posts" button on the dashboard page.

![Screenshot]()
