import { signOut } from "firebase/auth";
import { auth } from "../Config/firebase";

export default function Home() {
  return (
    <div className="auth-container">
      <h1>Welcome 🎉</h1>

      <p className="user-email">
        {auth.currentUser?.email}
      </p>

      <button onClick={() => signOut(auth)}>
        Logout
      </button>
    </div>
  );
}

