import Navbar from "../Navbar/Navbar";

const Hero = ({ children }) => {
  return (
    <header className="nav-header">
      <Navbar />
      <div className="hero">
        <div className="hero-content">{children}</div>
      </div>
    </header>
  );
};

export default Hero;
