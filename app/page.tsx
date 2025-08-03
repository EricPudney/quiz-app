'use client'

import { useEffect, useState } from "react";
import { createClient } from "./utils/supabase/client";
import Link from "next/link";

export default function Home() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log(event, session);
        console.log('Auth state changed:', event, session);
        session ? setLoggedInUser(true) : setLoggedInUser(false);
      }
    );
    return () => {
      console.log('Cleaning up auth listener');
      authListener.subscription.unsubscribe();
    };
  });

  const features = [
    {
      title: "🧠 Smart Question Generator",
      description:
        "Use AI-powered tools or templates to generate quiz questions in seconds.",
    },
    {
      title: "📁 Quiz Organizer",
      description:
        "Save and manage all your quizzes with tags, folders, and an easy dashboard.",
    },
    {
      title: "🎤 Presentation Mode",
      description:
        "Host your quizzes live from the app with built-in score tracking.",
    },
    {
      title: "🔒 Secure & Private",
      description: "Your quiz data is encrypted and accessible only to you.",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {loggedInUser
              ? "Welcome back, Quizmaster!"
              : "Your Ultimate Quiz Toolkit"}
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            {loggedInUser
              ? "Ready to jump back in and create something amazing?"
              : "Create, organize, and host quizzes effortlessly — all in one place."}
          </p>

          <Link
            href={'/login'}
            className="bg-white text-gray-800 border px-6 py-3 shadow hover:shadow-md flex items-center gap-2"
          ></Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full text-left">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
