# SociaLink Backend

This directory contains the backend server for SociaLink, a real-time chat application.

## Overview

The backend provides the API, database connectivity, authentication services, real-time communication, and file upload functionality for the SociaLink application. It's built with Node.js, Express, MongoDB, Socket.IO, and includes JWT-based authentication with HTTP-only cookies.

## Features

- RESTful API for chat functionality
- Real-time messaging with Socket.IO
- User authentication and authorization with JWT
- HTTP-only cookie security
- MongoDB database integration
- Cloudinary integration for image storage
- Online user tracking
- CORS configuration for cross-domain requests
- Environment-based configuration

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: MongoDB ODM
- **Socket.IO**: Real-time communication
- **JWT**: Authentication
- **Bcrypt**: Password hashing
- **Cloudinary**: Image storage
- **Cookie-Parser**: HTTP cookie handling
- **CORS**: Cross-Origin Resource Sharing

## Project Structure

- `/src/controllers`: Request handlers
- `/src/models`: Database models
- `/src/routes`: API route definitions
- `/src/middleware`: Middleware functions
- `/src/lib`: Utility functions (socket, database, JWT, etc.)

## API Endpoints

- **Auth**
  - `POST /api/auth/signup`: Register a new user
  - `POST /api/auth/login`: Login
  - `POST /api/auth/logout`: Logout
  - `GET /api/auth/check`: Check authentication status
  - `PUT /api/auth/update-profile`: Update user profile

- **Messages**
  - `GET /api/messages/users`: Get all users for chat
  - `GET /api/messages/:id`: Get messages with a specific user
  - `POST /api/messages/send/:id`: Send message to user
  
## Socket Events

- `connection`: User connects
- `disconnect`: User disconnects
- `getOnlineUsers`: Broadcast online users
- `newMessage`: Send new message notification

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file with:
   ```
   PORT=3000
   MONGODB_USER=your_mongodb_user
   MONGODB_PASSWORD=your_mongodb_password
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

The backend is currently deployed on Render at [https://socialink-api.onrender.com](https://socialink-api.onrender.com)

## Note

This backend server is required for the SociaLink frontend application to function properly. 