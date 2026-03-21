# 💬 Real-Time Chat Application

A full-stack real-time chat application built using the MERN stack with Socket.IO.
Users can sign up, log in, send messages, share images, and see online users in real time.

---

## 🚀 Live Demo

* 🌐 Frontend: https://chat-app-frontend-theta-pink.vercel.app
* ⚙️ Backend: https://chat-app-backend-icey.onrender.com

---

## 🧰 Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* Context API
* Axios
* React Router DOM
* Socket.IO Client

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Socket.IO
* JWT Authentication
* Cloudinary (Image Upload)

---

## ✨ Features

* 🔐 User Authentication (Signup/Login)
* 👤 Profile Update (Name, Bio, Profile Picture)
* 💬 Real-Time Messaging (Socket.IO)
* 🖼️ Image Sharing in Chat
* 🟢 Online/Offline User Status
* 📩 Unseen Message Count
* 🔄 Auto Scroll Chat
* 📱 Responsive UI

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create `.env` file in `/server`:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret

CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
```

Create `.env` file in `/client`:

```env
VITE_BACKEND_URL=http://localhost:5000
```

Run frontend:

```bash
npm run dev
```

---

## 🔐 Authentication Flow

* JWT token generated on login/signup
* Stored in localStorage
* Sent in headers for protected routes
* Middleware validates user

---

## 🔄 Real-Time Communication

* Socket.IO used for real-time messaging
* Tracks online users

---

## 📸 Image Upload

* Images uploaded using Cloudinary
* Stored as URL in MongoDB
* Rendered in chat UI

---

## 🙋‍♂️ Author

**Kartikey Keshari**

* 💻 Full Stack Developer
* 📍 India
* 🔗 GitHub: https://github.com/kartikeykeshari

---

## ⭐ Show Your Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🛠 Contribute

---

## 📜 License

This project is licensed under the MIT License.
