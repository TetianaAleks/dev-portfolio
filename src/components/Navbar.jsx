import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm fixed w-full top-0 left-0 right-0 z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a href="/" className="block text-teal-600 dark:text-teal-300">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-500 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-500 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-500 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-500 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/contact"
              className="hidden sm:inline-block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
            >
              Hire Me
            </a>

            <button
              onClick={toggleTheme}
              className="rounded-full bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-800 dark:bg-gray-800 dark:text-white dark:hover:text-gray-300 cursor-pointer"
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                  />
                </svg>
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-800 dark:bg-gray-800 dark:text-white dark:hover:text-gray-300 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 shadow-sm"
          >
            <nav className="flex flex-col gap-4 text-sm">
              <a
                href="/about"
                className="text-gray-500 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-300"
              >
                About
              </a>
              <a
                href="/projects"
                className="text-gray-500 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-300"
              >
                Projects
              </a>
              <a
                href="/contact"
                className="text-gray-500 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-300"
              >
                Contact
              </a>
              <a
                href="/contact"
                className="rounded-md bg-teal-600 px-5 py-2 text-center text-white font-medium transition hover:bg-teal-700"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
