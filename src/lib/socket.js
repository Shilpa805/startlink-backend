import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

// Allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://startlink-frontend.vercel.app",
];

// Store online users
const userSocketMap = {}; // {userId: socketId}

// Initialize Socket.IO with proper CORS
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
  transports: ["websocket", "polling"],
  pingTimeout: 60000,
  pingInterval: 25000,
});

// Middleware for auth (JWT)
io.use((socket, next) => {
  const token = socket.handshake.auth.token; // token sent from frontend
  if (!token) return next(new Error("Unauthorized"));

  try {
    const user = verifyJWT(token); // write your verifyJWT function
    socket.userId = user.id;
    next();
  } catch (err) {
    next(new Error("Unauthorized"));
  }
});

// Connection
io.on("connection", (socket) => {
  const userId = socket.userId;
  if (userId) userSocketMap[userId] = socket.id;

  // Emit online users
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

// Helper function
export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

export { io, app, server };
