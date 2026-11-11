import { motion, useReducedMotion } from 'framer-motion';
import { SLIDE_DELAY, SLIDE_DURATION, SLIDE_EASE } from './timing';

const slide = { delay: SLIDE_DELAY, duration: SLIDE_DURATION, ease: SLIDE_EASE };

const Nav = ({ skipEntrance = false }) => {
  const reduceMotion = useReducedMotion();
  const instant = skipEntrance || reduceMotion;
  return (
    <nav className="nav">
      <motion.a
        href="#film"
        className="nav-mark"
        initial={instant ? false : { x: '-200%' }}
        animate={{ x: 0 }}
        transition={instant ? { duration: 0 } : slide}
      >
        SETH HARLING
      </motion.a>
      <motion.div
        className="nav-links"
        initial={instant ? false : { x: '200%' }}
        animate={{ x: 0 }}
        transition={instant ? { duration: 0 } : slide}
      >
        <a href="#about-content">About</a>
        <a href="#portfolio-content">Portfolio</a>
        <a href="#resume-content">Resume</a>
        <a href="#contact">Contact</a>
      </motion.div>
    </nav>
  );
};

export default Nav;
