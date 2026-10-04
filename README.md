# Student CRUD API

A simple backend API for managing student information using **Node.js, Express.js, MongoDB, and Mongoose**.

## Features

* Create a student
* Get all students
* Get a single student by ID
* MongoDB database integration
* Mongoose schema and model

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon
* dotenv

## Student Fields

Each student contains the following fields:

| Field      | Type   | Required |
| ---------- | ------ | -------- |
| name       | String | Yes      |
| email      | String | Yes      |
| age        | Number | Yes      |
| department | String | Yes      |

## Database

**Database:** `studentDB`

**Collection:** `students`

The `students` collection is automatically handled by Mongoose through the `Student` model.

## Project Structure

```text
M-12_student-crud-api/
├── src/
│   ├── server.js
│   └── Student.js
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd M-12_student-crud-api
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection URI.

## Run the Project

For development:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:5000
```

## API Endpoints

### 1. Create a Student

```http
POST /students
```

Full URL:

```text
http://localhost:5000/students
```

Request body:

```json
{
  "name": "Ashik",
  "email": "ashik@gmail.com",
  "age": 24,
  "department": "Mathematics"
}
```

Example response:

```json
{
  "name": "Ashik",
  "email": "ashik@gmail.com",
  "age": 24,
  "department": "Mathematics",
  "_id": "student_id",
  "__v": 0
}
```

### 2. Get All Students

```http
GET /students
```

Full URL:

```text
http://localhost:5000/students
```

### 3. Get a Student by ID

```http
GET /students/:id
```

Example:

```text
http://localhost:5000/students/6ac2b4cae30b4bc030ee03b1
```

## Root Endpoint

```http
GET /
```

Response:

```text
Student API is running
```

## Environment Variables

Create a `.env` file with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Do not commit the `.env` file to GitHub.

## Assignment

This project was created as a backend assignment using:

**Node.js + Express.js + MongoDB**

The assignment focuses on implementing basic Student CRUD functionality.
