import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ContactSection() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      navigate(`/contact?email=${encodeURIComponent(email)}`);
    } else {
      navigate("/contact");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <motion.div
          className="mx-auto max-w-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Let's Work Together
          </h2>

          <p className="hidden text-gray-600 dark:text-gray-300 sm:mt-4 sm:block">
            Interested in working together? Fill out the form below and let's
            connect! I'm always excited to discuss new projects and
            opportunities.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 max-w-xl sm:flex sm:gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="sm:flex-1">
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-md border-gray-300 bg-white p-3 text-gray-900 shadow-sm transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-teal-600 px-5 py-3 text-white transition hover:bg-teal-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:w-auto"
          >
            <span className="text-sm font-semibold"> Contact Me </span>

            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
