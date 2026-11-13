import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SLIDE_DELAY, SLIDE_DURATION, SLIDE_EASE } from './timing';

const Film = ({ source, skipEntrance = false }) => {
  const reduceMotion = useReducedMotion();
  const instant = skipEntrance || reduceMotion;
  const [failedSources, setFailedSources] = useState([]);
  const [loadedSource, setLoadedSource] = useState(null);

  return (
    <section className="film" id="film">
      {source && !failedSources.includes(source) && (
        <img
          className="film-gif"
          key={source}
          src={source}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          style={{ visibility: loadedSource === source ? 'visible' : 'hidden' }}
          onLoad={() => setLoadedSource(source)}
          onError={() => setFailedSources((sources) => [...sources, source])}
        />
      )}
      <motion.div
        className="film-scroll-wrap"
        initial={instant ? false : { y: 160 }}
        animate={{ y: 0 }}
        transition={instant ? { duration: 0 } : { delay: SLIDE_DELAY, duration: SLIDE_DURATION, ease: SLIDE_EASE }}
      >
        <a className="film-scroll" href="#about" aria-label="Scroll down">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 4v16M5 13l7 7 7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Film;
