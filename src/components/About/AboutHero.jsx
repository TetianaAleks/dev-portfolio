import { motion } from "framer-motion";

function AboutHero() {
  return (
    <section className="overflow-hidden bg-gray-50 dark:bg-gray-900 pt-24 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 sm:grid sm:grid-cols-2 sm:items-center sm:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center ltr:sm:text-left rtl:sm:text-right"
        >
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
            Frontend Developer Crafting Modern Digital Experiences
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            I'm Tetiana — a Frontend Developer passionate about creating modern,
            responsive, and user-friendly web applications. With a focus on
            clean design, accessibility, and performance, I build digital
            experiences that are both beautiful and effective.
          </p>

          <div className="mt-8">
            <a
              href="/projects"
              className="inline-block rounded-sm bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:ring-4 focus:ring-yellow-400 focus:outline-none"
            >
              View My Projects
            </a>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          alt="Working on Laptop"
          src="/about-hero.png"
          className="mx-auto mt-12 sm:mt-0 w-full max-w-xs sm:max-w-sm rounded-md border-4 border-teal-500 object-contain"
        />
      </div>
    </section>
  );
}

export default AboutHero;
