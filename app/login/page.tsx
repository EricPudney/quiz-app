"use client";

import { login, signup } from "../data/actions";
import { createClient } from "../utils/supabase/client";

export default function LoginPage() {
  const supabase = createClient();

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) console.error("Sign-in error:", error);
  };

  return (
    <>
    <script src="https://accounts.google.com/gsi/client" async></script>
      <main className="px-2 py-2">
        <form className="max-w-sm mx-auto mt-10 space-y-6 bg-white p-6 rounded-2xl shadow-md">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-between gap-4">
            <button
              formAction={login}
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              Log in
            </button>
            <button
              formAction={signup}
              className="w-full rounded-md border border-indigo-600 px-4 py-2 text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </button>
          </div>
        </form>

        <div>
          
          <button onClick={handleSignIn}>Sign in with Google</button>
        </div>
      </main>
    </>
  );
}
