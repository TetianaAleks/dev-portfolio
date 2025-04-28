import { motion } from "framer-motion";
import { skills } from "../../data/skills";

function SkillsSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-12 pb-12 sm:pt-16 sm:pb-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-6">
                {category}
              </h3>

              <ul className="space-y-4">
                {items.map((skill, idx) => (
                  <li
                    key={idx}
                    className="rounded-md bg-white dark:bg-gray-800 p-3 font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
