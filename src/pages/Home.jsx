import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Whiteline Tour Concepts</h1>
        <p>Explore the world with us. Discover amazing destinations and connect with fellow travelers.</p>
        <div className="home-links">
          <Link to="/about" className="btn">Learn More</Link>
          <Link to="/users" className="btn btn-secondary">View Users</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;