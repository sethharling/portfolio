import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const ScrollTitle = ({ children }) => {
  const reduceMotion = useReducedMotion();
  const slotRef = useRef(null);
  const { scrollYProgress: p } = useScroll({
    target: slotRef,
    offset: ['start end', 'end start'],
  });

  const k = useTransform(p, [0.15, 0.75], [0, 1]);
  const opacity = useTransform(p, [0.35, 0.75], [1, 0.25]);

  return (
    <>
      <div className="title-stage">
        <div className="title-sticky">
          <motion.h2 style={{ '--k': reduceMotion ? 0 : k, opacity: reduceMotion ? 1 : opacity }}>{children}</motion.h2>
        </div>
      </div>
      <div className="title-slot" ref={slotRef} />
    </>
  );
};

export default ScrollTitle;
