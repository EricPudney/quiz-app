import {
  HomeIcon,
  ListBulletIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import LoginButton from "./login-btn";
import { checkUser } from "../data/actions";

export default async function Navbar() {
  const navItems = [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/quizzes", icon: ListBulletIcon, label: "Quizzes" },
    { href: "/questions", icon: QuestionMarkCircleIcon, label: "Questions" },
  ];

  const loggedInUser = await checkUser()
  console.log("There is a user logged in: ", loggedInUser)

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="flex items-center justify-between px-4 h-14">
          <LoginButton />
        </div>
      </div>
      <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto bg-white border-t md:border-b border-gray-200 shadow-lg md:shadow-sm z-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-around md:justify-start space-x-4">
              {navItems.map(({ href, icon: Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 px-3 py-2 rounded-lg transition-colors text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-xs md:text-sm font-medium text-center">
                    {label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <LoginButton />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
