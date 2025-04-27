
# 🚀 Full Stack Blog App with Role-Based Access Control (RBAC)

A secure and scalable blog platform built with React.js, Node.js, Express.js, and MongoDB, featuring full Role-Based Access Control (RBAC) to differentiate between regular users and admins.

---

## ✨ Features

### 🔒 Authentication
- Secure login and registration using **JWT-based authentication**.
- Passwords are hashed using **bcrypt** for enhanced security.
- Optional: Email verification system for new user signups.

### 🛡️ Role-Based Authorization
- Two user roles:
  - **Admin**: Create, update, delete blog posts.
  - **User**: View and comment on blog posts.
- Middleware protects routes and restricts access based on user roles.

### 📚 Blog Management
- **Admins**:
  - Create, edit, and delete blog posts.
- **Users**:
  - View all blogs.
  - Read full blog posts.
  - Comment on blog posts.

### ⚡ RESTful APIs
- Organized and modular API endpoints for authentication and blog management.
- Protected routes secured with role-based middleware.

### 📄 Database
- **MongoDB** database with Mongoose ODM.
- Data models include:
  - User (name, email, hashed password, role)
  - BlogPost (title, content, author reference, timestamp)

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- React Router DOM
- Redux Toolkit (for global state management)
- Tailwind CSS (for responsive, modern UI)
- Axios (for API calls)

### Backend:
- Node.js
- Express.js
- JWT (for authentication)
- bcrypt (for password hashing)

### Database:
- MongoDB
- Mongoose ODM

### Email Services *(Optional)*:
- Nodemailer for sending verification emails.

---

## 📋 Default Admin Credentials

| Email          | Password  |
| -------------- | --------- |
| Ram@gmail.com  | 123456789 |

> Use these credentials to log in as Admin and access the Admin Dashboard.
> admin route is '/dashboard'

---

# 🖥️ Backend Setup

1. Navigate to the `backend` folder:

```bash
cd backend
```

2. Install all dependencies:

```bash
npm install
```

3. Create a `.env` file inside the backend directory:

```plaintext
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the backend server:

```bash
npm run dev
```

> The backend will start at `http://localhost:5000`.

---

# 🌐 Frontend Setup

1. Navigate to the `frontend` folder:

```bash
cd frontend
```

2. Install all dependencies:

```bash
npm install
```

3. (Optional) Configure Axios baseURL inside your services to match the backend URL (`http://localhost:5000`).

4. Start the React development server:

```bash
npm start
```

> The frontend will run at `http://localhost:3000`.

---

# 🗂️ Project Structure

```
/backend
    /controllers    --> Logic for authentication and blog management
    /models         --> User and Blog mongoose schemas
    /routes         --> API routes (auth, blogs)
    /middlewares    --> Role-based authorization middlewares
    server.js       --> Entry point for backend app

/frontend
    /components     --> Reusable UI components (Navbar, BlogCard, etc.)
    /pages          --> Pages (Login, Signup, Home, AdminDashboard, etc.)
    /redux          --> Redux slices and store
    /services       --> Axios services for API calls
    App.js          --> Main React app component
    index.js        --> Entry point for React app
```

---

# 🛡️ Architecture Overview

## 1. Authentication Flow:
- User or Admin signs up or logs in.
- Server validates credentials and issues a JWT token.
- JWT token is stored in localStorage on the client-side.
- Each protected API request sends the token in the Authorization header for verification.

## 2. Authorization Flow:
- Middleware verifies the token and extracts user info and role.
- Admin-only routes are protected from normal users.
- Frontend dynamically shows/hides UI components based on user roles (e.g., Admin Dashboard).

## 3. Database Models:

### User Model

| Field    | Type    | Description              |
| -------- | ------- | ------------------------ |
| name     | String  | User's full name          |
| email    | String  | Unique email address      |
| password | String  | Hashed password           |
| role     | String  | 'user' or 'admin'          |

### BlogPost Model

| Field     | Type     | Description              |
| --------- | -------- | ------------------------- |
| title     | String   | Title of the blog post     |
| content   | String   | Main content of the blog   |
| author    | ObjectId | References the User model  |
| timestamp | Date     | Post creation time         |

---

# 📬 How to Test

1. **Signup or Login** using the frontend interface.
2. **Login as Admin** using:
   - Email: `Ram@gmail.com`
   - Password: `123456789`
3. **As Admin**:
   - Create, update, and delete blog posts.
4. **As User**:
   - View and comment on blogs.
5. **Unauthorized Access**:
   - If users try to access Admin routes, they will be denied or redirected appropriately.

---

# 🔥 Future Enhancements (Optional)

- Email verification after signup.
- Forgot password and password reset functionality.
- Rich-text editor for writing blog posts.
- Like, share, and bookmark functionalities for blog posts.
- Admin control to suspend or promote users.

---
