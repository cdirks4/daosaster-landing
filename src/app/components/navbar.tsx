"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode } = useTheme();
  const isPWA =
    typeof window !== "undefined" &&
    window.matchMedia("(display-mode: standalone)").matches;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b transition-[background-color,border-color,shadow] duration-300 font-space-mono ${
        isDarkMode
          ? isScrolled
            ? "bg-background-dark/90 border-primary-dark/10 shadow-md backdrop-blur-sm"
            : "bg-background-dark border-transparent"
          : isScrolled
          ? "bg-background-light/90 border-primary-light/10 shadow-md backdrop-blur-sm"
          : "bg-background-light border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-space-mono font-semibold tracking-wider">
            <Link
              href="/"
              className={`text-center group flex items-center ${
                isPWA ? "p-2" : ""
              }`}
            >
              <span
                className={`text-xl ${
                  isDarkMode ? "text-secondary-dark" : "text-secondary-light"
                } hover:text-primary-light dark:hover:text-primary-dark transition-colors`}
              >
                DisasterResponse.AI
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/team">
              <span
                className={`text-sm font-fira-code px-4 py-2 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 ${
                  isDarkMode ? "text-secondary-dark" : "text-secondary-light"
                } hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 transition-colors`}
              >
                Our Team
              </span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
