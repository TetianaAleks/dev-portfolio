import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-bold text-teal-600 dark:text-teal-400">
          404
        </h1>
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-teal-600 px-6 py-3 text-white text-sm font-semibold shadow-md transition hover:bg-teal-500 hover:scale-105 active:scale-95"
        >
          Go back Home
        </Link>
      </motion.div>
    </section>
  );
}

export default NotFound;
