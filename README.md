# 🔐 Firebase Authentication with React (Email & Google Login)

This project demonstrates how to implement **Firebase Authentication** in a **React application** using:
- Email & Password Sign Up / Sign In
- Google Sign-In
- Protected Routes
- Auto Redirect based on auth state

No backend code required. Everything is handled securely by Firebase.

---

## 🚀 Features

- ✅ Email & Password Authentication
- ✅ Google Sign-In (Gmail)
- ✅ Secure user management with Firebase
- ✅ Auto login state detection
- ✅ Protected routes using React Router
- ✅ Clean and simple UI
- ✅ Beginner-friendly structure

---

## 🛠️ Tech Stack

- React
- Firebase Authentication
- React Router DOM
- JavaScript
- CSS

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/lasantha746/firebase-auth-demo.git
cd firebase-auth-demo
````

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

---

## 🔧 Firebase Setup (Important)

1. Go to **[https://firebase.google.com](https://firebase.google.com)**
2. Create a new project
3. Enable:

   * Email / Password Authentication
   * Google Authentication
4. Create a **Web App** in Firebase
5. Copy your Firebase configuration

Create this file:

```
src/Config/firebase.js
```

Paste your Firebase config:

```js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
```

---

## 📂 Project Structure

```
src/
 ├── Config/
 │    └── firebase.js
 ├── pages/
 │    ├── Login.js
 │    ├── Signup.js
 │    └── Home.js
 ├── App.js
 ├── index.js
 └── index.css
```

---

## 🔐 Authentication Flow

* New users can **Sign Up** using email & password
* Existing users can **Log In**
* Users can **Sign in with Google** using one click
* Authentication state is managed using `onAuthStateChanged`
* Logged-in users are redirected to Home
* Logged-out users are redirected to Login

---

## 🎥 Video Tutorial

This project is explained step by step on my YouTube channel.

📺 **Code With Lasa**
👉 Full tutorial video link: []

> Note: This repository focuses on Firebase Authentication logic.
> React UI basics are not covered in detail.

---

## ⭐ Support

If this project helped you:

* ⭐ Star this repository
* 📌 Subscribe to **Code With Lasa**
* 🔔 Follow for more real-world dev tutorials

---

## 📄 License

This project is open source and free to use for learning and personal projects.

