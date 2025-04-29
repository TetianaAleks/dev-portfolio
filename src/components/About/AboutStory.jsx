import { motion } from "framer-motion";

function AboutStory() {
  return (
    <section className="bg-white dark:bg-gray-900 pt-12 pb-12 sm:pt-16 sm:pb-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto"
          >
            <img
              src="/about-story.jpg"
              alt="My Story"
              className="w-full max-w-md rounded-md object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              My Story
            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-300">
              My journey into IT began early — I attended a specialized school
              with a strong emphasis on technology, where I consistently placed
              among the top students at IT competitions and Olympiads. Inspired
              by a passion for problem-solving and innovation, I pursued a
              Master's degree in Automation and Computer-Integrated
              Technologies, where I deepened my skills in engineering and
              software development. Throughout my academic and professional
              path, I have focused primarily on frontend development, building
              modern, responsive, and user-friendly web applications. Looking
              ahead, I am expanding my expertise into full-stack development and
              AI technologies to create even more powerful digital solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
