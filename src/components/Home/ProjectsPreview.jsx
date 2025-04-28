import { motion } from "framer-motion";
import { projects } from "../../data/projects";

function ProjectsPreview() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Latest Projects
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of recent work I've done, focusing on modern websites
            and AI-powered applications.
          </p>
        </header>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.li
              key={index}
              className="group relative block overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105 dark:bg-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover sm:h-64 lg:h-72"
              />

              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:underline group-hover:underline-offset-4">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {project.tech}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="/projects"
            className="inline-block rounded-md bg-teal-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-teal-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPreview;
