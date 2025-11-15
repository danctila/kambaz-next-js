"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as client from "../client";
import { FormControl, Button } from "react-bootstrap";
import { User } from "../../types";

export default function Signup() {
  const [user, setUser] = useState<Partial<User>>({});
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      router.push("/Dashboard");
    } catch (error: any) {
      alert(error.response?.data?.message || "Signup failed");
    }
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
