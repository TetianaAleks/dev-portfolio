import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="bg-white pt-24 lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-prose text-left"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Hi, I'm Tetiana
          </h1>

          <h2 className="text-xl font-semibold text-gray-500 sm:text-2xl dark:text-gray-400 mt-4">
            Full-Stack Developer & AI Integration Specialist
          </h2>
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            I build modern, scalable web applications and integrate AI-powered
            solutions that help businesses innovate, automate, and grow.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-teal-500 hover:scale-105 active:scale-95"
              href="/projects"
            >
              View Projects
            </a>

            <a
              className="inline-block rounded-md border border-teal-600 px-6 py-3 text-sm font-semibold text-teal-600 transition hover:bg-teal-600 hover:text-white hover:scale-105 active:scale-95"
              href="/contact"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <div className="mt-8 md:mt-0">
          <img
            src="/hero.png"
            alt="Hero"
            className="w-full h-auto object-cover scale-x-[-1]"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
