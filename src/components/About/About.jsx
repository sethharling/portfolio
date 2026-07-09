import './About.css';

const About = () => {
    return(
        <div>
            <h2 className='about-me'>About Me</h2>
            <p className='about-me-p'>
                I'm a software engineer who enjoys building clean, useful web applications and tools. My experience
                includes working with Vue.js, .NET, Python, SQL, IaC, and modern full-stack development practices.
                <br/>
                <br/>
                I like creating software that feels simple to use, even when the problems behind it are complex. I'm always
                looking to take on new challenges and build things that are thoughful, reliable, and well-designed.
                <br/>
                <br/>
                I grew up in Colorado, and now I'm living in New York City. I enjoy painting, tinkering (in every sense of the word),
                cycling, and making/drinking coffee. 
                <br/>
                <br/>
                Currently I'm drinking: <strong>Obscure Coffee's White Honey Maragogype from Costa Rica.</strong> 

            </p>
        </div>
    );
};

export default About;