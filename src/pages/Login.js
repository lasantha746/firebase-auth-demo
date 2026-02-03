import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Config/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

      <div className="divider">OR</div>

      <button className="google-btn" onClick={googleLogin}>
        Sign in with Google
      </button>

      <p>
        <Link to="/signup">Create new account</Link>
      </p>
    </div>
  );
}

