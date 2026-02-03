import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={signup}>Sign Up</button>

      <p>
        <Link to="/login">Already have an account?</Link>
      </p>
    </div>
  );
}
