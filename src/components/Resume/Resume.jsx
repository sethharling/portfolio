import './Resume.css';

const Resume = () => {
    return(
        <div className='resume-container'>
            <div className='resume-header'>
                <h2>Resume</h2>
                <a
                    className='resume-download'
                    href={`${process.env.PUBLIC_URL}/Seth-Harling-Resume.docx`}
                    download
                >
                    Download Resume
                </a>
            </div>

            <p className='resume-summary'>
                Software Engineer with experience building full-stack applications using Vue.js,
                .NET, C#, SQL, MongoDB, and Azure. Experienced in API development, testing, cloud
                deployment, and LLM integrations across production and consulting environments.
            </p>

            <h3>Experience</h3>
            <ul className='experience'>
                <li>
                    <p>Software Engineer, Beeline</p>
                    <p>Feb. 2025 - Present</p>
                    <ul>
                        <li>Built and maintained full-stack features using Vue.js, .NET, C#, SQL, and MongoDB in an Agile environment</li>
                        <li>Developed and tested REST API endpoints supporting internal apps and external AI partner integrations</li>
                        <li>Integrated large language model workflows into production applications for AI-driven product features</li>
                        <li>Deployed containerized applications with Docker and Kubernetes, and authored Bicep infrastructure workflows</li>
                    </ul>
                </li>
            </ul>
            <h3>Internships</h3>
            <ul className='internships'>
                <li>
                    <p>Software Engineer Intern, Custom Applications - RSM US LLP</p>
                    <p>Jun. 2024 - Aug. 2024</p>
                    <ul>
                        <li>Developed full-stack client features using Vue.js, ASP.NET, Quasar, MariaDB, and SQL</li>
                        <li>Built internal tools and automation with Java, Azure Function Apps, NetSuite, and Salesforce</li>
                    </ul>
                </li>
                <li>
                    <p>Software Engineer Intern, Enterprise Integrations - RSM US LLP</p>
                    <p>Jun. 2023 - Aug. 2023</p>
                    <ul>
                        <li>Developed integration solutions using .NET and Boomi to connect business systems and automate data workflows</li>
                        <li>Collaborated with an intern team on a capstone project spanning design, implementation, and presentation</li>
                    </ul>
                </li>
                <li>
                    <p>Software Engineer Intern, Beeline</p>
                    <p>May 2022 - Aug. 2022</p>
                    <ul>
                        <li>Developed full-stack API features using .NET, C#, and SQL as part of a small engineering team</li>
                    </ul>
                </li>
            </ul>
            <h3>Education</h3>
                <div className='education'>
                    <p>Colorado State University</p>
                    <p>May 2025</p>
                    <ul>
                        <li>Bachelor of Science, Computer Science - Fort Collins, CO</li>
                    </ul>
                </div>
            <h3>Skills</h3>
                <div className='education'>
                    <ul>
                        <li>Languages: C#, JavaScript, Python, Ruby on Rails, SQL, Bicep</li>
                        <li>Frameworks: Vue, React, .NET, REST APIs</li>
                        <li>Tools: Docker, Kubernetes, Azure DevOps, GitHub</li>
                        <li>AI/ML: LLM integrations, AI APIs, machine learning concepts</li>
                    </ul>
                </div>
        </div>
    );
};

export default Resume;