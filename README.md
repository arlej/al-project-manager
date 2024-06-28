# Project manager

A reponsive projects/tasks management (with Registration and login) using React, NodeJS, ExpressJS and MongoDB.

## Technology Used

This project uses the following technologies:

- **Frontend:**
  - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
  - [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [React.js](https://reactjs.org/)

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)

- **Database:**
  - [MongoDB](https://www.mongodb.com/)

- **Other Tools:**
  - [GitHub](https://github.com/)
  - [VSCode](https://code.visualstudio.com/)

# Getting started

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/)
- [Your preferred web browser]

To check if you have Node.js, run the following command in your terminal:

```bash
node --version
```
# How To Run

1. Download the repository
2. Unzip folder and open it with [VS Code](https://code.visualstudio.com/)

## How to run

Create the file `backend/.env` with your Atlas URI and the server port:
```
- PORT = "5000"
- DATABASE_URL="mongodb+srv://<username>:<password>@example.mongodb.net/project_manager?retryWrites=true&w=majority"
- SECRET_KEY = "my-32-character-ultra-secure-and-ultra-long-secret"
```
Start server and install dependencies (Backend):
```
cd backend
npm install
npm start
```
Start Client and install dependencies (Frontend):
```
cd frontend
npm install
npm start or npm run dev
```


