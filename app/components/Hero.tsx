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

          <h2>Amna Arif</h2>

          <p className="hero-description">
            Computer Science student and creative designer passionate about
            building clean, user-friendly digital products. I combine
            UI/UX design with frontend development to create visually
            engaging and functional experiences.
          </p>

          <div className="hero-buttons">
            <a
              href="/Resume(G).pdf"
              download
              className="primary-btn"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img
            src="/images/profileimg.png"
            alt="Profile"
            className="hero-image"
          />
        </div>
      </div>

      {/* FEATURED STRIP */}
      <div className="featured">
        <p>Tools & Technologies</p>
        <div className="tools">
          <span>Figma</span>
          <span>Canva</span>
          <span>JavaScript</span>
          <span>React Native</span>
          <span>GitHub</span>
        </div>
      </div>

      <div className="stats">
        <div>
          <h2>20+</h2>
          <p>Design Projects</p>
        </div>
        <div>
          <h2>5+</h2>
          <p>UI/UX Concepts Built</p>
        </div>
        <div>
          <h2>1</h2>
          <p>Mobile App in Development</p>
        </div>
      </div>

    </section>
  );
}