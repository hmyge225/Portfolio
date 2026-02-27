import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Hobbies from './components/sections/Hobbies';

function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-gray-50 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Hobbies />
      </main>
    </div>
  );
}

export default App;
