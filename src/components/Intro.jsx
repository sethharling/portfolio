import { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const MAX_H = 12;
const MOBILE_MAX_H = 5;
const MAX_DOTS = 3;
const H_INTERVAL = 70;
const DOT_INTERVAL = 80;
const FADE_MS = 400;
const STARTING_MS = 1000;
const STARTING_FADE_MS = 400;
const FADE_OUT_MS = 600;

const Char = ({ ch, grow }) => (
  <motion.span
    className="intro-char"
    initial={grow ? { width: 0, opacity: 0 } : false}
    animate={{ width: 'auto', opacity: 1 }}
    transition={{ duration: 0.22, ease: 'easeOut' }}
  >
    {ch}
  </motion.span>
);

const Intro = ({ onReveal, onDone }) => {
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState('gate');
  const [hCount, setHCount] = useState(1);
  const [dots, setDots] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 600px)').matches);
  const maxH = isMobile ? MOBILE_MAX_H : MAX_H;

  useEffect(() => {
    const query = window.matchMedia('(max-width: 600px)');
    const update = () => {
      setIsMobile(query.matches);
      setHCount((count) => Math.min(count, query.matches ? MOBILE_MAX_H : MAX_H));
    };
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reduceMotion && stage !== 'gate') {
      onReveal();
      onDone();
    }
  }, [reduceMotion, stage, onReveal, onDone]);

  const measureRef = useRef(null);
  const [fitPx, setFitPx] = useState(null);
  useLayoutEffect(() => {
    const measure = () => {
      const el = measureRef.current;
      if (!el || !el.offsetWidth) return;
      const refSize = parseFloat(getComputedStyle(el).fontSize);
      const target = window.innerWidth * 0.9;
      setFitPx(Math.min((refSize * target) / el.offsetWidth, 176));
    };
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [maxH]);

  useEffect(() => {
    if (stage !== 'shh') return;
    let id;
    if (hCount < maxH) {
      id = setTimeout(() => setHCount((c) => c + 1), H_INTERVAL);
    } else if (dots < MAX_DOTS) {
      id = setTimeout(() => setDots((d) => d + 1), DOT_INTERVAL);
    } else {
      id = setTimeout(() => setStage('fade'), 300);
    }
    return () => clearTimeout(id);
  }, [stage, hCount, dots, maxH]);

  useEffect(() => {
    if (stage !== 'fade') return;
    const id = setTimeout(() => setStage('starting'), FADE_MS);
    return () => clearTimeout(id);
  }, [stage]);

  useEffect(() => {
    if (stage !== 'starting') return;
    const id = setTimeout(() => setStage('startingFade'), STARTING_MS);
    return () => clearTimeout(id);
  }, [stage]);

  useEffect(() => {
    if (stage !== 'leaving') return;
    onReveal();
    const id = setTimeout(onDone, FADE_OUT_MS);
    return () => clearTimeout(id);
  }, [stage, onReveal, onDone]);

  const showMark = stage === 'gate' || stage === 'shh' || stage === 'fade';
  const fading = stage === 'fade';

  const progress = (hCount - 1 + dots) / (maxH - 1 + MAX_DOTS);
  const fontSize = (() => {
    if (!fitPx) return '5vw';
    const original = Math.min(Math.max(48, window.innerWidth * 0.09), 112);
    const start = Math.min(original, fitPx * 0.8);
    return `${start + progress * (fitPx - start)}px`;
  })();

  const chars = [
    { ch: 'S', grow: false },
    { ch: 'H', grow: false },
    ...Array.from({ length: hCount - 1 }, () => ({ ch: 'H', grow: true })),
    ...Array.from({ length: dots }, () => ({ ch: '.', grow: true })),
  ];

  return (
    <motion.div
      className="intro"
      animate={{ opacity: stage === 'leaving' ? 0 : 1 }}
      transition={{ duration: reduceMotion ? 0 : FADE_OUT_MS / 1000, ease: 'easeInOut' }}
    >
      {/* hidden */}
      <span ref={measureRef} className="intro-measure" aria-hidden="true">
        {('S' + 'H'.repeat(maxH) + '.'.repeat(MAX_DOTS)).split('').map((ch, i) => (
          <span className="intro-char" key={i}>{ch}</span>
        ))}
      </span>

      {showMark && (
        <motion.p
          className="intro-mark"
          aria-hidden="true"
          style={{ fontSize }}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: fading ? 0 : 1 }}
          transition={{ duration: reduceMotion ? 0 : fading ? FADE_MS / 1000 : 0.8, ease: 'easeInOut' }}
        >
          {chars.map((c, i) => (
            <Char key={i} {...c} />
          ))}
        </motion.p>
      )}

      {(stage === 'starting' || stage === 'startingFade') && (
        <motion.p
          className="intro-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: stage === 'startingFade' ? 0 : 1 }}
          transition={{ duration: stage === 'startingFade' ? STARTING_FADE_MS / 1000 : 0.4 }}
          onAnimationComplete={() => {
            if (stage === 'startingFade') setStage('leaving');
          }}
        >
          it's starting...
        </motion.p>
      )}

      <motion.button
        className="intro-enter"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: stage === 'gate' ? 1 : 0 }}
        transition={reduceMotion ? { duration: 0 } : stage === 'gate' ? { delay: 0.8, duration: 0.8 } : { duration: 0.3 }}
        disabled={stage !== 'gate'}
        onClick={() => setStage('shh')}
      >
        Enter
      </motion.button>
    </motion.div>
  );
};

export default Intro;
