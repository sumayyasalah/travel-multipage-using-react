import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Whiteline Tour Concepts</h1>
        <p>
          Whiteline Tour Concepts is your ultimate companion for exploring the world. Whether you're planning your next adventure,
          connecting with fellow travelers, or discovering hidden gems, our app provides all the tools you need.
        </p>
        <p>
          Our mission is to make travel accessible, enjoyable, and memorable for everyone. Join our community of
          explorers and start your journey today!
        </p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default About;