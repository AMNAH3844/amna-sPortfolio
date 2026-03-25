export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h4 className="hero-tag">UI/UX • Graphic Design • Frontend Development</h4>

          <h1>
            I Design & Build
            <span className="highlight"> Digital Experiences</span>
          </h1>

          <h2>AMNA ARIF</h2>

          <p className="hero-description">
            Computer Science student currently in last semester.
            I am creative designer passionate about
            building clean, user-friendly digital products. I combine
            UI/UX design with frontend development to create visually
            engaging and functional experiences.
          </p>

          <div className="hero-buttons">
            <a
              href="/AMNA ARIF_GD_RESUME.pdf"
              download
              className="primary-btn"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        {/* <div className="hero-right">
          <img
            src="/images/profileimg.png"
            alt="Profile"
            className="hero-image"
          />
        </div> */}
      </div>

     
      <div className="featured">
        <p>Tools & Technologies</p>
        <div className="tools">
          <span>Figma</span>
          <span>Canva</span>
           <span>photospea</span>
          <span>JavaScript</span>
          <span>React Native</span>
          <span>GitHub</span>
          <span>AI</span>
        </div>
      </div>

      <div className="stats">
        <div>
          <h2>20+</h2>
          <p>Design Projects</p>
        </div>
        <div>
          {/* UI/UX Concepts Built */}
          <h2>3+</h2>
          <p>Social Media Management Experience</p>
        </div>
        <div>
          <h2>1</h2>
          <p>Mobile App in Development</p>
        </div>
      </div>

    </section>
  );
}