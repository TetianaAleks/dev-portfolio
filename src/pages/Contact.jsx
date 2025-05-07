import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function Contact() {
  const [success, setSuccess] = useState(false);

  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const prefillEmail = params.get("email");
    if (prefillEmail) {
      setEmail(prefillEmail);
    }
  }, [location]);

  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSuccess(true);
      form.reset();
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-24 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Let's Talk
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Got an idea or a project? Let's create something amazing together.
          </p>
        </motion.div>

        {!success ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 space-y-6 text-left"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Name"
                className="w-full rounded-md border-gray-300 bg-white p-3 text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border-gray-300 bg-white p-3 text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                placeholder="Your Message"
                className="w-full rounded-md border-gray-300 bg-white p-3 text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="inline-block w-full rounded-md bg-teal-600 px-6 py-3 text-white text-sm font-semibold shadow-md transition hover:bg-teal-500 hover:scale-105 active:scale-95"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-12 flex flex-col items-center justify-center gap-6 text-center"
          >
            <div className="flex items-center justify-center rounded-full bg-teal-100 p-4 dark:bg-teal-700">
              <svg
                className="h-12 w-12 text-teal-600 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
              Thank you! <br /> Your message has been sent.
            </h3>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          <p>Or reach me directly at:</p>
          <div className="mt-2 space-x-4">
            <a
              href="https://github.com/TetianaAleks"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 hover:text-teal-500"
            >
              GitHub
            </a>
            <a
              href="https://www.frontendmentor.io/profile/TetianaAleks"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 hover:text-teal-500"
            >
              Frontend Mentor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
