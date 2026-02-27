import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Server, Wrench } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { skills } = portfolioData;

  const categories = [
    {
      title: 'Frontend',
      icon: Monitor,
      skills: skills.frontend,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: skills.backend,
      color: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Outils',
      icon: Wrench,
      skills: skills.tools,
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 transition-colors duration-300 dark:bg-gray-800" ref={ref}>
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Compétences
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        </motion.div>

        <div className="grid gap-8 mx-auto max-w-6xl md:grid-cols-3">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-lg transition-all duration-300 dark:bg-gray-900 dark:border-gray-700 hover:border-blue-500 dark:shadow-none"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`bg-gradient-to-br ${category.color} p-3 rounded-lg mr-4`}
                >
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-200 transition-all duration-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
