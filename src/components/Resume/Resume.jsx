import './Resume.css';

const Resume = () => {
    return(
        <div className='resume-container'>
            <h2>Resume</h2>

            <h3>Experience</h3>
            <ul className='experience'>
                <li>
                    <p>Software Engineer, Beeline</p>
                    <p>February 2025 - Present</p>
                    <ul>
                        <li>Developed .NET APIs, maintained OAS</li>
                        <li>Built Vue.js website for client-facing documentation</li>
                        <li>Contributed to legacy codebase for industry-leading SaaS product</li>
                    </ul>
                </li>
            </ul>
            <h3>Internships</h3>
            <ul className='internships'>
                <li>
                    <p>Custom Applications Intern, RSM US LLP</p>
                    <p>Summer 2024</p>
                    <ul>
                        <li>Contributed to client-specific apps with varying tech stacks</li>
                        <li>Built Azure Function Apps for client demos</li>
                        <li>Completed an internship Capstone project highlighting industry needs</li>
                    </ul>
                </li>
                <li>
                    <p>Software Integrations Intern, RSM US LLP</p>
                    <p>Summer 2023</p>
                    <ul>
                        <li>Developed client-specific integration workflows using Boomi</li>
                        <li>Gained experience consulting for several clients</li>
                    </ul>
                </li>

                <li>
                    <p>Software Engineer Intern, Beeline</p>
                    <p>Summer 2022</p>
                    <ul>
                        <li>Developed .NET APIs for Saas Product</li>
                    </ul>
                </li>
            </ul>
            <h3>Education</h3>
                <div className='education'>
                    <p>Colorado State University</p>
                    <p>2020 - 2025</p>
                    <ul>
                        <li>Bachelor's in Computer Science</li>
                        <li>Completed embedded systems project: a Smart Mirror using a Raspberry Pi</li>
                        <li>Completed multiple Web Applcations using modern and applicable tech stacks</li>
                    </ul>
                </div>
        </div>
    );
};

export default Resume;