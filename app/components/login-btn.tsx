"use client";

import { useEffect, useState } from "react";
import { getSession, signOut } from "../data/actions";
import { createClient } from "../utils/supabase/client";

export default function LoginButton() {
  const supabase = createClient();
  const [loggedInUser, setLoggedInUser] = useState(false);
  useEffect(() => {
    const checkForUser = async () => {
      setLoggedInUser(await getSession());
    };
    checkForUser();
  }, []);

  return loggedInUser ? (
    <button onClick={signOut}>Logout</button>
  ) : (
    <button>Login</button>
  );
}
