import { motion } from "framer-motion";

function ContactCTA() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-12 pb-12 sm:pt-16 sm:pb-16">
      <div className="mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Let's Build Something Great Together
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Whether you have an idea or an existing project in mind, I'm ready
            to bring your vision to life with modern, scalable solutions.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-md bg-teal-600 px-8 py-3 text-white text-sm font-semibold shadow-md hover:bg-teal-500 hover:scale-105 active:scale-95 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCTA;
