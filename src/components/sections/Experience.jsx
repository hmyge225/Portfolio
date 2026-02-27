import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Expériences
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'
                }`}
              >
                <div className="flex items-start gap-4 md:gap-0">
                  <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-full border-4 border-gray-50 dark:border-gray-800 shadow-lg">
                      <Briefcase className="text-white" size={24} />
                    </div>
                  </div>

                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg dark:shadow-none"
                    >
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 rounded-full text-sm font-medium mb-3">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                        {exp.company}
                      </p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed text-left">
                        {Array.isArray(exp.description) ? (
                          exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ChevronRight size={16} className="mt-1 text-blue-500 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))
                        ) : (
                          <li className="flex items-start gap-2">
                            <ChevronRight size={16} className="mt-1 text-blue-500 flex-shrink-0" />
                            <span>{exp.description}</span>
                          </li>
                        )}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
