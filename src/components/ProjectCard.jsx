import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  const fast = { stiffness: 90, damping: 16, mass: 1 };
  const medium = { stiffness: 45, damping: 13, mass: 1.2 };
  const slow = { stiffness: 22, damping: 11, mass: 1.5 };

  const ax = useSpring(mx, fast);
  const ay = useSpring(my, fast);
  const bx = useSpring(mx, medium);
  const by = useSpring(my, medium);
  const cx = useSpring(mx, slow);
  const cy = useSpring(my, slow);

  const background = useMotionTemplate`
    radial-gradient(circle at ${ax}% ${ay}%, hsl(330 100% 62%) 0%, hsl(20 100% 60% / 0.7) 22%, transparent 48%),
    radial-gradient(circle at ${bx}% ${by}%, hsl(190 100% 55%) 0%, hsl(250 95% 65% / 0.7) 24%, transparent 55%),
    radial-gradient(circle at ${cx}% ${cy}%, hsl(55 100% 58%) 0%, hsl(140 90% 55% / 0.7) 26%, transparent 60%),
    linear-gradient(115deg, #ff6b6b, #ffb86b, #fff06b, #6bff9e, #6bd5ff, #a78bff, #ff6bd6)
  `;

  const onMove = (e) => {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  const body = (
    <>
      <motion.div
        className="project-fx"
        style={{ background: reduceMotion ? 'linear-gradient(115deg, #ffb86b, #fff06b, #6bd5ff)' : background }}
        aria-hidden="true"
      />
      <span className="status">{project.status}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </>
  );

  return project.link ? (
    <a className="project" href={project.link} target="_blank" rel="noopener noreferrer" onPointerMove={onMove}>
      {body}
    </a>
  ) : (
    <div className="project" onPointerMove={onMove}>{body}</div>
  );
};

export default ProjectCard;
