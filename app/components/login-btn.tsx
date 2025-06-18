"use client";

import { useEffect, useState } from "react";
import { signOut } from "../data/actions";
import { createClient } from "../utils/supabase/client";
import Link from "next/link";
import {
  ArrowLeftStartOnRectangleIcon,
  ArrowRightEndOnRectangleIcon
} from "@heroicons/react/24/outline";

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
    try {
      signOut()
      setLoggedInUser(false)
    }
    catch (error) {
      console.error(error)
    }
  }

  return loggedInUser ? (
    <button onClick={handleClick} className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 px-3 py-2 rounded-lg transition-colors text-gray-600 hover:text-blue-600 hover:bg-gray-50 text-xs md:text-sm font-medium text-center"><ArrowLeftStartOnRectangleIcon className="h-6 w-6 mx-2"/>Logout</button>
  ) : (
    <Link
      href="/login"
      className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 px-3 py-2 rounded-lg transition-colors text-gray-600 hover:text-blue-600 hover:bg-gray-50">
      <ArrowRightEndOnRectangleIcon className="h-6 w-6"/>
      <span className="text-xs md:text-sm font-medium text-center">
        Login
      </span>
    </Link>
  );
}
