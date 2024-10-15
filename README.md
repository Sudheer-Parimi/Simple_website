This is a simple web application that includes user authentication (signup and login) functionality. After successfully logging in, users are greeted with a message displaying "Hello World" 50 times.
The project features a backend built using Node.js, Express, and MongoDB, with JWT for user authentication. The frontend is created using basic HTML, CSS, and JavaScript.

Features:
  User authentication: Signup and login.
  Password hashing using bcrypt.
  JWT (JSON Web Token) authentication.
  Display of a "Hello World" message after successful login.
  MongoDB as the database.

Installation

Bash commands: 

  git clone https://github.com/yourusername/your-repo-name.git

  cd your-repo-name

  npm install

  PORT=8000
  MONGODB_URI=your-mongodb-uri
  JWT_SECRET_KEY=your-jwt-secret


Running the backend:
    npm start

The frontend runs on http://localhost:3000
The backend runs on http://localhost:8000


