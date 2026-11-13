import { useCallback, useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import './App.css';
import Intro from './components/Intro';
import Nav from './components/Nav';
import Film from './components/Film';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { getFilmSource, pickFilmFile } from './components/filmMedia';

const ENTRANCE_SESSION_KEY = 'portfolio:entrance-seen';

const App = () => {
  const reduceMotion = useReducedMotion();
  const [filmFile] = useState(pickFilmFile);
  const filmSource = getFilmSource(filmFile, reduceMotion);
  const [skipIntro] = useState(() => {
    try {
      return sessionStorage.getItem(ENTRANCE_SESSION_KEY) === 'true';
    } catch {
      return false;
    }
  });
  const [entered, setEntered] = useState(skipIntro);
  const [introGone, setIntroGone] = useState(skipIntro);

  const reveal = useCallback(() => {
    try {
      sessionStorage.setItem(ENTRANCE_SESSION_KEY, 'true');
    } catch {
    }
    setEntered(true);
  }, []);
  const finish = useCallback(() => setIntroGone(true), []);

  useEffect(() => {
    document.body.classList.toggle('locked', !entered);
    if (entered && !skipIntro) window.scrollTo(0, 0);
    return () => document.body.classList.remove('locked');
  }, [entered, skipIntro]);

  return (
    <>
      <link rel="preload" as="image" href={filmSource} fetchPriority="high" />
      {!introGone && <Intro onReveal={reveal} onDone={finish} />}
      {entered && (
        <>
          <Nav skipEntrance={skipIntro} />
          <main>
            <h1 className="visually-hidden">Seth Harling — Software Engineer</h1>
            <Film source={filmSource} skipEntrance={skipIntro} />
            <About />
            <Portfolio />
            <Resume />
            <Contact />
          </main>
          <footer className="footer">
            <a href="https://github.com/sethharling" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/seth-harling" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </footer>
        </>
      )}
    </>
  );
};

export default App;
