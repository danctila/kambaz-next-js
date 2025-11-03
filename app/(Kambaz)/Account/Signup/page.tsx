"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";
import { User } from "../../types";

export default function Signup() {
  const [user, setUser] = useState<Partial<User>>({});
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signup = () => {
    if (!user.username || !user.password) {
      alert("Username and password are required");
      return;
    }
    
    // Check if username already exists
    const existingUser = db.users.find((u: User) => u.username === user.username);
    if (existingUser) {
      alert("Username already exists");
      return;
    }
    
    // Create new user with default values
    const newUser: User = {
      _id: new Date().getTime().toString(),
      username: user.username!,
      password: user.password!,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      dob: user.dob || "",
      role: "STUDENT",
    };
    
    // Add to (in-memory) database
    db.users.push(newUser);
    
    // Set as current user
    dispatch(setCurrentUser(newUser));
    
    // Navigate to Dashboard
    router.push("/Dashboard");
  };
  
  return (
    <div id="wd-signup-screen" style={{ maxWidth: "400px" }}>
      <h3>Sign up</h3>
      <FormControl
        id="wd-username"
        placeholder="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="mb-2"
      />
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="mb-2"
      />
      <FormControl
        id="wd-password-verify"
        placeholder="verify password"
        type="password"
        className="mb-2"
      />
      <Button
        id="wd-signup-btn"
        onClick={signup}
        className="w-100 mb-2"
      >
        Sign up
      </Button>
      <Link id="wd-signin-link" href="/Account/Signin">
        Sign in
      </Link>
    </div>
  );
}
