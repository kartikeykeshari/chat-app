// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import http from "http";
// import { connectDB } from "./lib/db.js";
// import userRouter from "./routes/userRoutes.js";
// import messageRouter from "./routes/messageRoutes.js";
// import { Server } from "socket.io";


// //Create Express app and HTTP server
// const app = express();
// const server = http.createServer(app)

// // Initialize socket.io server
// export const io = new Server(server, {
//   cors: {
//     origin: "https://chat-app-frontend-theta-pink.vercel.app",
//     credentials: true
//   }
// });

// // Store online users
// export const userSocketMap = {}; // { userId: socketId }

// // Socket.io connection handler
// io.on("connection", (socket)=>{
//     const userId = socket.handshake.query.userId;
//     console.log("User Connected", userId);

//     if(userId) userSocketMap[userId] = socket.id;

//     // Emit online users to all connected clients
//     io.emit("getOnlineUsers", Object.keys(userSocketMap));

//     socket.on("disconnect", ()=>{
//         console.log("User Disconnected", userId);
//         delete userSocketMap[userId];
//         io.emit("getOnlineUsers", Object.keys(userSocketMap));
//     })
// })

// // Middleware setup
// app.use(express.json({limit: "4mb"}));

// // app.use(cors());
// const corsOptions = {
//   origin: "https://chat-app-frontend-theta-pink.vercel.app",
//   credentials: true
// };

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions)); 

// // Routes setup
// app.use("/api/status", (req, res)=> res.send("Server is live..."));
// app.use("/api/auth", userRouter);
// app.use("/api/messages", messageRouter);

// //Connect to MongoDB
// await connectDB();


// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//   console.log("Server running on PORT: " + PORT);
// });


import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// ================= SOCKET.IO =================
export const io = new Server(server, {
  cors: {
    origin: "*", // 🔥 allow all
    methods: ["GET", "POST"]
  }
});

// Store online users
export const userSocketMap = {}; // { userId: socketId }

// Socket connection
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log("User Connected:", userId);

  if (userId) userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User Disconnected:", userId);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

// ================= MIDDLEWARE =================
app.use(express.json({ limit: "4mb" }));

// 🔥 FULLY OPEN CORS
app.use(cors()); // allows everything

// 🔥 EXTRA safety headers (force allow)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// ================= ROUTES =================
app.use("/api/status", (req, res) => res.send("Server is live..."));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

// ================= DATABASE =================
await connectDB();

// ================= SERVER START =================
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("Server running on PORT:", PORT);
});