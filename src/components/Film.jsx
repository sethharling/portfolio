import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SLIDE_DELAY, SLIDE_DURATION, SLIDE_EASE } from './timing';

const GIF_FILES = ['vid1.gif', 'vid2.gif', 'vid3.gif', 'vid4.gif', 'vid5.gif', 'vid6.gif', 'vid7.gif', 'vid8.gif'];

const Film = ({ skipEntrance = false }) => {
  const reduceMotion = useReducedMotion();
  const instant = skipEntrance || reduceMotion;
  const [failedSources, setFailedSources] = useState([]);
  const [file] = useState(() =>
    GIF_FILES.length ? GIF_FILES[Math.floor(Math.random() * GIF_FILES.length)] : null
  );
  // Fetch the corrected looping GIF instead of a previously cached one-shot version.
  const animationFile = file === 'vid3.gif' ? `${file}?v=2` : file;
  const source = file
    ? `${process.env.PUBLIC_URL}/vids/${reduceMotion ? file.replace(/\.gif$/, '.png') : animationFile}`
    : null;

  return (
    <section className="film" id="film">
      {source && !failedSources.includes(source) ? (
        <img
          className="film-gif"
          key={source}
          src={source}
          alt={reduceMotion ? 'Still frame from a featured film' : 'Featured film animation'}
          onError={() => setFailedSources((sources) => [...sources, source])}
        />
      ) : (
        <div className="film-placeholder">
          <div className="film-play" aria-hidden="true" />
          <p>{source ? 'Animation unavailable' : 'Animation coming soon'}</p>
        </div>
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
