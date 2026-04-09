export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h4 className="hero-tag">
            UI/UX • Graphic Design • Frontend Development
          </h4>

          <h1>
            I Design & Build
            <span className="highlight"> Digital Experiences</span>
          </h1>

          <h2>AMNA ARIF</h2>

          <p className="hero-description">
            Computer Science student currently in the last semester.
            I am a creative designer passionate about building clean,
            user-friendly digital products. I combine UI/UX design with
            frontend development to create visually engaging and
            functional experiences.
          </p>

          {/* ===== Achievements & Experience ===== */}
          <div className="hero-achievements">
            <div className="achievement-item">
              <h3>NSCT Achievement</h3>
              <p>
                Scored <strong>91.0 percentile</strong> in the
                National Skill Competency Test (NSCT) conducted by the
                Higher Education Commission (HEC) of Pakistan.
              </p>
            </div>

            <div className="achievement-item">
              <h3>Social Media & Design Experience</h3>
              <p>
                Worked with <strong>elumni</strong> as a Social Media Manager
                and Graphic Designer. Elumni provides courses, coaching,
                soft and technical skills, career support, and mentorship—
                helping individuals understand their career paths and grow
                step by step.
              </p>
            </div>
          </div>

          <div className="hero-buttons">
            <a
              href="/AMNA ARIF.resume.pdf"
              download
              className="primary-btn"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* ===== Tools Section ===== */}
      <div className="featured">
        <p>Tools & Technologies</p>
        <div className="tools">
          <span>Figma</span>
          <span>Canva</span>
          <span>Photoshop</span>
          <span>JavaScript</span>
          <span>React Native</span>
          <span>GitHub</span>
          <span>CorelDraw</span>
          <span>AI Tools</span>
        </div>
      </div>

      {/* ===== Stats Section ===== */}
      <div className="stats">
        <div>
          <h2>20+</h2>
          <p>Design Projects</p>
        </div>
        <div>
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