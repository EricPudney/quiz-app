"use client";

import { useEffect, useState } from "react";
import { signOut } from "../data/actions";
import { createClient } from "../utils/supabase/client";

export default function LoginButton() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const supabase = createClient();
  
  useEffect(()=>{
      const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session);
        session ? setLoggedInUser(true) : setLoggedInUser(false);
      });
    return () => {
      authListener.subscription.unsubscribe();
    }
  }, [])

  const handleClick = ()=>{
    signOut()
    setLoggedInUser(false)
  }

  return loggedInUser ? (
    <button onClick={handleClick}>Logout</button>
  ) : (
    <button>Login</button>
  );
}
