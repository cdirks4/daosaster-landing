"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,border-color,shadow] duration-300 font-space-mono ${
        isDarkMode
          ? isScrolled
            ? "bg-background-dark/90 shadow-lg backdrop-blur-sm"
            : "bg-background-dark"
          : isScrolled
          ? "bg-background-light/90 shadow-lg backdrop-blur-sm"
          : "bg-background-light"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-center group flex items-center ${
                isPWA ? "p-2" : ""
              }`}
            >
              <span
                className={`text-sm md:text-lg ${
                  isDarkMode ? "text-secondary-dark" : "text-secondary-light"
                } hover:text-primary-light dark:hover:text-primary-dark transition-colors`}
              >
                DisasterResponse.AI
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/team">
              <span
                className={`text-xs md:text-sm whitespace-nowrap px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 ${
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
