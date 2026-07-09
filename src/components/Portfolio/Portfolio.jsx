import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Developer's Portal",
            description: 'A Vue.js app providing documentation, auth details, and access to APIs used to integrate Beeline platform data with the enterprise systems.',
            status: 'Completed',
            link: 'https://developers.beeline.com',
            tags: ['Vue', 'Node.js', 'OpenAPI']
        },
        {
            id: 2,
            title: 'Recipe Deblogger',
            description: 'A website that will de-blog and de-ad recipes from other websites.',
            status: 'Completed',
            link: 'https://recipe-deblogger.com',
            tags: ['React', 'FastAPI', 'SQLite']
        },
        {
            id: 3,
            title: 'Data Engineering',
            description: 'A simple data engineering project to familiarize myself with data analytics and visualization.',
            status: 'In Progress',
            link: '#',
            tags: ['Python', 'Flask', 'PostgreSQL']
        },
        {
            id: 4,
            title: 'Recommender System ML Model',
            description: "An exploration into Recommender Models inspired by Spotify's Discover Weekly playlist.",
            status: 'In Progress',
            link: '#',
            tags: ['Python', 'ML']
        }
    ];

    return(
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h2>Portfolio</h2>
                <p className="portfolio-subtitle">A collection of my ongoing and completed work.</p>
            </div>
            
            <div className="projects-grid">
                {projects.map(project => (
                    <a 
                        href={project.link} 
                        key={project.id} 
                        className="project-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="project-card-header">
                            <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                                {project.status}
                            </span>
                            <h3>{project.title}</h3>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;