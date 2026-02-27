import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Keyboard, Camera, Plane, Gamepad2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const iconMap = {
  keyboard: Keyboard,
  camera: Camera,
  plane: Plane,
  gamepad: Gamepad2,
};

export default function Hobbies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { hobbies } = portfolioData;

  return (
    <section id="hobbies" className="py-20 bg-white transition-colors duration-300 dark:bg-gray-900" ref={ref}>
      <div className="flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Loisirs & Passions
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        </motion.div>

        <div className="flex flex-wrap gap-10 justify-center">
          {hobbies.map((hobby, index) => {
            const IconComponent = iconMap[hobby.icon];
            return (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col justify-center items-center p-6 w-40 h-40 text-center bg-gray-50 rounded-xl border border-gray-200 shadow-lg transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 dark:shadow-none"
              >
                <div className="p-4 mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full">
                  {IconComponent && <IconComponent className="text-white" size={32} />}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{hobby.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
