import ScrollTitle from './ScrollTitle';
import Reveal from './Reveal';

const About = () => (
  <section className="section dark" id="about">
    <ScrollTitle>About Me</ScrollTitle>
    <div className="content narrow" id="about-content">
      <Reveal>
        <p className="lead">
          I'm a full-stack software engineer based in New York City, originally from Colorado. 
          I spend most of my time building web apps, working across the frontend and backend, 
          taking things apart and understanding how they work. Occasionally I'll make things just to see if 
          I can learn something new.
        </p>
      </Reveal>
      <Reveal>
        <p>
          Outside of work, you can find me with my friends. I love coffee, cooking, music, and making short movies.
        </p>
      </Reveal>
      <Reveal>
        <p>
          Currently drinking: <strong>Washed Kenya SL-34/SL-28 from Middle State Coffee.</strong>
        </p>
      </Reveal>
    </div>
  </section>
);

export default About;
