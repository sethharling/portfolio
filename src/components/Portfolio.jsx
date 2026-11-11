import ScrollTitle from './ScrollTitle';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "Developer's Portal",
    description: 'A Vue.js app providing documentation, auth details, and access to APIs used to integrate Beeline platform data with the enterprise systems.',
    status: 'Completed',
    link: 'https://developers.beeline.com',
    tags: ['Vue', 'Node.js', 'OpenAPI'],
  },
  {
    id: 2,
    title: 'Recipe Deblogger',
    description: 'A website that will de-blog and de-ad recipes from other websites.',
    status: 'Completed',
    link: 'https://recipe-deblogger.com',
    tags: ['React', 'FastAPI', 'SQLite'],
  },
  {
    id: 3,
    title: 'Data Engineering',
    description: 'A simple data engineering project to familiarize myself with data analytics and visualization.',
    status: 'In Progress',
    link: null,
    tags: ['Python', 'Flask', 'PostgreSQL'],
  },
  {
    id: 4,
    title: 'Recommender System ML Model',
    description: "An exploration into Recommender Models inspired by Spotify's Discover Weekly playlist.",
    status: 'In Progress',
    link: null,
    tags: ['Python', 'ML'],
  },
];

const Portfolio = () => (
  <section className="section light" id="portfolio">
    <ScrollTitle>Portfolio</ScrollTitle>
    <div className="content" id="portfolio-content">
      <Reveal>
        <p className="lead">A collection of my ongoing and completed work.</p>
      </Reveal>
      <div className="projects">
        {projects.map((p) => (
          <Reveal key={p.id}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
