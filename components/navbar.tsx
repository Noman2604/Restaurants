"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, LogOut, Sun, Moon } from "lucide-react";
import Image from "next/image";
import Image2 from "@/pages/Dubaidarbarlogo.png";
import { Button } from "./ui/button";
import { auth } from "@/lib/firebase"; // Firebase config and auth
import { onAuthStateChanged, signOut } from "firebase/auth"; // Firebase Auth functions

const navItems = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Reservations", path: "/reservations" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  const pathname = usePathname();
  const router = useRouter();

  // Check Firebase authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  // Check localStorage for dark mode preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Handle theme toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign the user out
      setIsAuthenticated(false);
      router.push("/");
    } catch (error: any) {
    }
  };

  return (
    <nav className="bg-slate-100 dark:bg-slate-700 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex border-slate-900 dark:border-slate-100 border-solid border-2 p[2px] rounded-sm">
            <Link href="/" className="items-center ">
              <Image src={Image2} alt="logo" width={120} height={120}  className=" rounded-sm"/>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium text-slate-900 dark:text-slate-100 ${
                    pathname === item.path ? "font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Dark Mode Toggle */}
              
              {!isAuthenticated ? (
                <Button
                  className="bg-primary text-primary-foreground"
                  onClick={() => router.push("/login")}
                >
                  Login
                </Button>
              ) : (
                <Button
                  className="bg-primary text-primary-foreground flex items-center"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 text-xs" /> Logout
                </Button>
                 
              )}
              
              <div
                onClick={toggleDarkMode}
                className={`flex items-center justify-center hover:bg-primary/10 p-2 rounded-md transition-transform duration-300 ${
                  isDarkMode ? "rotate-180" : "rotate-0"
                }`}
              >
                {isDarkMode ? <Sun /> : <Moon />}
              </div>

            </div>
          </div>

          <div className="md:hidden flex">
            <div
              onClick={toggleDarkMode}
              className={`flex items-center justify-center hover:bg-primary/10 p-2 rounded-md transition-transform duration-300 ${
                isDarkMode ? "rotatdiv80" : "rotate-0"
              }`}
            >
              {isDarkMode ? <Sun /> : <Moon />}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-200 hover:bg-primary/20 ${
                  pathname === item.path ? "bg-primary/20" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {!isAuthenticated ? (
              <Button
                className="bg-primary text-primary-foreground text-base w-full justify-start"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/login");
                }}
              >
                Login
              </Button>
            ) : (
              <Button
                className="bg-primary text-primary-foreground text-base w-full justify-start flex items-center"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 text-sm" /> Logout
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
