import ScrollTitle from './ScrollTitle';
import Reveal from './Reveal';

const experience = [
  {
    id: 'beeline-2025',
    role: 'Software Engineer II, Beeline',
    dates: 'Feb. 2025 - Present',
    points: [
      'Build full-stack features across Vue.js and ASP.NET applications and C# backends.',
      'Develop APIs for integrations with clients and external AI partners.',
      'Integrate LLM powered features into production applications.',
      'Work with SQL Server, Docker, Kubernetes, and Azure infrastructure.',
    ],
  },
];

const internships = [
  {
    id: 'rsm-2024',
    role: 'Software Engineer Intern, RSM US LLP',
    dates: 'Jun. – Aug. 2024',
    points: [
      'Built client applications with Vue.js, ASP.NET, Quasar, and MariaDB.',
      'Developed internal tools and integrations with Azure Functions, NetSuite, and Salesforce.',
    ],
  },
  {
    id: 'rsm-2023',
    role: 'Software Engineer Intern, RSM US LLP',
    dates: 'Jun. – Aug. 2023',
    points: [
      'Built .NET and Boomi integrations connecting enterprise systems.',
    ],
  },
  {
    id: 'beeline-2022',
    role: 'Software Engineer Intern, Beeline',
    dates: 'May – Aug. 2022',
    points: [
      'Developed API and application features using .NET, C#, and SQL.',
    ],
  },
];

const skills = [
  ['Languages', 'C#, JavaScript, TypeScript, Python, Java, SQL'],
  ['Frameworks', 'Vue.js, React, .NET, ASP.NET Core, FastAPI'],
  ['Databases', 'PostgreSQL, CosmosDB, MariaDB'],
  ['Infrastructure & Tools', 'Azure, Docker, Kubernetes, Bicep, Git, GitHub Actions'],
];

const Job = ({ role, dates, points }) => (
  <Reveal className="job">
    <div className="job-head">
      <h4>{role}</h4>
      <span>{dates}</span>
    </div>
    <ul>
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  </Reveal>
);

const Resume = () => (
  <section className="section dark" id="resume">
    <ScrollTitle>Resume</ScrollTitle>
    <div className="content narrow" id="resume-content">
      <Reveal>
        <p className="lead">
          I'm a full-stack engineer working primarily with Vue, React, 
          .NET, and Python. My experience spans web applications, backend 
          APIs, cloud infrastructure, and LLMs. 
        </p>
        <a className="button" href={`${process.env.PUBLIC_URL}/Seth-Harling-Resume.docx`} download>
          Download Resume
        </a>
      </Reveal>

      <Reveal><h3 className="sub">Experience</h3></Reveal>
      {experience.map((j) => <Job key={j.id} {...j} />)}

      <Reveal><h3 className="sub">Internships</h3></Reveal>
      {internships.map((j) => <Job key={j.id} {...j} />)}

      <Reveal><h3 className="sub">Education</h3></Reveal>
      <Job
        role="Colorado State University"
        dates="May 2025"
        points={['Bachelor of Science, Computer Science - Fort Collins, CO']}
      />

      <Reveal><h3 className="sub">Skills</h3></Reveal>
      <Reveal className="skills">
        {skills.map(([label, value]) => (
          <p key={label}><strong>{label}:</strong> {value}</p>
        ))}
      </Reveal>
    </div>
  </section>
);

export default Resume;
