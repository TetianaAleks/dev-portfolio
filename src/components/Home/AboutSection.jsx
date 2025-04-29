import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 dark:bg-gray-900">
      <motion.img
        src="/about.jpg"
        alt="Working on laptop"
        className="h-56 w-full object-cover sm:h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <motion.div
          className="mx-auto max-w-xl text-center sm:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            I'm Tetiana — a passionate Frontend Developer dedicated to building
            modern, responsive, and user-centered web applications. I focus on
            creating clean, accessible, and high-performance websites that
            deliver a seamless user experience.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-300 hidden md:block">
            With practical experience in web development for startups and
            educational platforms, I specialize in crafting fast, scalable, and
            visually engaging digital solutions that meet real-world business
            needs.
          </p>

          <div className="mt-6">
            <a
              href="/about"
              className="inline-block rounded-md bg-teal-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-teal-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              View More About Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
