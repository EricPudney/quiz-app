import { login, signup } from '../data/actions'

export default function LoginPage() {
  return (
    <form className="max-w-sm mx-auto mt-10 space-y-6 bg-white p-6 rounded-2xl shadow-md">
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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

  )
}