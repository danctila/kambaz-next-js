"use client";
import * as client from "./client";
import { useEffect, useState, useCallback } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { ReactNode } from "react";

export default function Session({ children }: { children: ReactNode }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  
  const fetchProfile = useCallback(async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: unknown) {
      // 401 is expected when user is not signed in
      if (err && typeof err === 'object' && 'response' in err && 
          typeof err.response === 'object' && err.response && 
          'status' in err.response && err.response.status !== 401) {
        console.error(err);
      }
      dispatch(setCurrentUser(null));
    }
    setPending(false);
  }, [dispatch]);
  
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  
  if (!pending) {
    return children;
  }
  return <div>Loading...</div>;
}
