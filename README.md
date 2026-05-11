# Syntecxhub_User_CRUD_API

A RESTful CRUD API for managing Users, built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.

> Built as part of the **Syntecxhub Internship Program – Task 1**

---

## 🚀 Features

- Full CRUD operations for a `User` resource
- Input validation with `express-validator`
- Proper HTTP status codes and error messages
- Duplicate email detection
- MongoDB Atlas integration via Mongoose
- Clean MVC folder structure

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- express-validator
- dotenv
- nodemon (dev)

---

## 📁 Project Structure

```
Syntecxhub_User_CRUD_API/
├── config/
│   └── db.js               # MongoDB connection
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   └── validate.js     # Input validation rules
│   ├── models/
│   │   └── User.js         # Mongoose schema
│   └── routes/
│       └── userRoutes.js
├── .env                    # Environment variables (not committed)
├── .gitignore
├── server.js               # Entry point
└── package.json
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/Natzsmart/Syntecxhub_User_CRUD_API.git
cd Syntecxhub_User_CRUD_API
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string_here
```

### 4. Run the server

```bash
# Development (with hot reload)
npm run dev

# Production
npm start
```

---

## 📡 API Endpoints

Base URL: `http://localhost:5000/api/users`

| Method | Endpoint          | Description        |
|--------|-------------------|--------------------|
| POST   | `/api/users`      | Create a new user  |
| GET    | `/api/users`      | Get all users      |
| GET    | `/api/users/:id`  | Get a user by ID   |
| PUT    | `/api/users/:id`  | Update a user      |
| DELETE | `/api/users/:id`  | Delete a user      |

---

## 📋 User Schema

| Field | Type   | Required | Notes                    |
|-------|--------|----------|--------------------------|
| name  | String | ✅ Yes   | 2–50 characters          |
| email | String | ✅ Yes   | Must be unique and valid |
| age   | Number | ❌ No    | 1–120                    |
| role  | String | ❌ No    | `user` or `admin`        |

---

## 🧪 Example Requests (Postman)

### Create User
```json
POST /api/users
{
  "name": "Champion Effiong",
  "email": "champion@smartcodez.com",
  "age": 27,
  "role": "admin"
}
```

### Update User
```json
PUT /api/users/:id
{
  "name": "Champion Updated",
  "age": 28
}
```

---

## 📬 Example Responses

### Success (201 Created)
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "_id": "665f...",
    "name": "Champion Effiong",
    "email": "champion@smartcodez.com",
    "age": 27,
    "role": "admin",
    "createdAt": "2026-05-11T...",
    "updatedAt": "2026-05-11T..."
  }
}
```

### Error (400 Bad Request)
```json
{
  "success": false,
  "errors": ["Name is required", "Please provide a valid email address"]
}
```

---

## 👤 Author

**Champion Effiong (Smartcodez)**  
X: [@Natzsmart](https://x.com/Natzsmart)  
LinkedIn: [Champion Effiong](https://linkedin.com/in/champion-effiong)

---

## 📄 License

MIT
