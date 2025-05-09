function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600 dark:text-teal-300">
          <a href="/" className="block text-teal-600 dark:text-teal-300">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 text-sm">
          Crafting modern, responsive websites with precision and passion.
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8">
          <li>
            <a
              className="text-gray-700 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-400 text-sm"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-400 text-sm"
              href="/about"
            >
              About
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-400 text-sm"
              href="/projects"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-400 text-sm"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>

        <ul className="mt-8 flex justify-center gap-6">
          <li>
            <a
              href="https://github.com/TetianaAleks"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-400"
            >
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/TetianaAleks"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 transition hover:text-teal-600 dark:text-white dark:hover:text-teal-400"
            >
              <span className="sr-only">Frontend Mentor</span>
              <img src="/public/favicon-32x32.png" alt="Frontend Mentor" className="h-6 w-auto"/>
            </a>
          </li>
        </ul>

        <p className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Tetiana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
