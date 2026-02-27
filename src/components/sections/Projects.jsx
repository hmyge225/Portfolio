import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-white transition-colors duration-300 dark:bg-gray-900" ref={ref}>
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Projets Réalisés
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        </motion.div>

        <div className="grid gap-8 mx-auto max-w-6xl md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="overflow-hidden bg-gray-50 rounded-xl border border-gray-200 shadow-lg transition-all duration-300 group dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 dark:shadow-none"
            >
              <div className="overflow-hidden relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                />
                <div className="flex absolute inset-0 justify-center items-center">
                  <div className="text-6xl font-bold text-gray-900/10 dark:text-white/10">
                    {String(project.id).padStart(2, '0')}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400">
                  {project.name}
                </h3>

                <ul className="mb-6 space-y-2 text-gray-600 dark:text-gray-400">
                  {Array.isArray(project.description) ? (
                    project.description.map((item, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <ArrowRight size={16} className="flex-shrink-0 mt-1 text-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex gap-2 items-start">
                      <ArrowRight size={16} className="flex-shrink-0 mt-1 text-blue-500" />
                      <span>{project.description}</span>
                    </li>
                  )}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-blue-600 bg-white rounded-full border border-gray-200 dark:bg-gray-900 dark:text-blue-400 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex gap-2 items-center px-4 py-2 text-gray-700 bg-white rounded-lg border border-gray-200 transition-all duration-300 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
