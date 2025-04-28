import { motion } from "framer-motion";
import { projectsAll } from "../data/projects";

function Projects() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-24 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            A selection of my recent work — websites, platforms, and AI
            solutions.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsAll.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group rounded-md bg-white dark:bg-gray-800 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-block rounded bg-teal-100 dark:bg-teal-700 px-2 py-1 text-xs font-medium text-teal-800 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-teal-600 hover:text-teal-500"
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-teal-600 hover:text-teal-500"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
