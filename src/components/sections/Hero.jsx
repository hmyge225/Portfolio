import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export default function Hero() {
  const { hero, contact } = portfolioData;

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="flex overflow-hidden relative justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 transition-colors duration-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="absolute inset-0 opacity-20 dark:opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] invert dark:invert-0"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1, x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute right-10 top-20 w-96 h-96 bg-blue-500 rounded-full opacity-30 blur-3xl dark:opacity-20"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1, x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute left-10 bottom-20 w-96 h-96 bg-cyan-500 rounded-full opacity-30 blur-3xl dark:opacity-20"
      />

      <div className="container relative z-10 px-6 mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="mb-4 text-5xl font-bold text-gray-900 md:text-7xl dark:text-white">
              {hero.name}
            </h1>
            <div className="mx-auto mb-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 md:text-4xl"
          >
            {hero.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-12 max-w-2xl text-xl text-gray-600 md:text-2xl dark:text-gray-400"
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 justify-center mb-12 sm:flex-row"
          >
            <motion.button
              onClick={() => scrollToSection('#projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/50"
            >
              Voir mes projets
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold text-gray-900 bg-white rounded-lg border-2 border-gray-200 transition-all duration-300 dark:text-white dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
            >
              Me contacter
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <motion.a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-400 transition-colors duration-300 hover:text-blue-500"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-400 transition-colors duration-300 hover:text-blue-500"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href={`mailto:${contact.email}`}
              whileHover={{ y: -5 }}
              className="text-gray-400 transition-colors duration-300 hover:text-blue-500"
            >
              <Mail size={28} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('#about')}
      >
        <ChevronDown size={32} className="text-gray-400" />
      </motion.div>
    </section>
  );
}
