export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h4 className="hero-tag">
            UI/UX • Graphic Design • web Development
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
            frontend development to create visually engaging and functional experiences.
          </p>

          {/* ACHIEVEMENTS */}
          <div className="hero-achievements">
            <div className="achievement-item">
              <h3>NSCT Achievement</h3>
              <p>
                Scored <strong>91.0 percentile</strong> in the National Skill Competency Test.
              </p>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="/AMNA ARIF_Resume..pdf" download className="primary-btn">
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT PROFILE IMAGE */}
        <div className="hero-right">
          <div className="profile-circle">
            <img src="/images/profile.jpeg" alt="Amna Arif Profile" />
          </div>
        </div>

      </div>

      {/* ===== TOOLS SECTION ===== */}
     <div id="tools"></div>

<div className="featured">
        <p>Tools & Technologies</p>

        <div className="tools">
          <span>Figma</span>
          <span>Canva</span>
          <span>Photoshop</span>
          <span>Illustration</span>
          <span>JavaScript</span>
          <span>React Native</span>
          <span>GitHub</span>
          <span>AI Tools</span>
        </div>
      </div>

     {/* ===== EXPERIENCE SECTION ===== */}
<div className="experience-section" id="experience">

  <div className="experience-heading">
    <h2>Experience</h2>
    <p>Professional & Creative Journey</p>
  </div>

  <div className="experience-timeline">

    {/* 1 - ELUMNI */}
    <div className="experience-item">
      <div className="experience-content">

        <div className="experience-top">
          <h3>Elumni</h3>
          <div className="experience-duration">2026 </div>
        </div>

        <p className="experience-role">
          Social Media Manager & Graphic Designer| elumni - A platform offering courses, coaching and mentorship.
        </p>

        <p className="experience-description">
          Managed social media campaigns, designed digital creatives,
          improved visual branding, and created engaging content
          for audience growth and online presence.
        </p>

      </div>
    </div>

    {/* 2 - FREELANCE OVERALL */}
    <div className="experience-item">
      <div className="experience-content">

        <div className="experience-top">
          <h3>Freelance Projects</h3>
          <div className="experience-duration">2023 — Present</div>
        </div>

        <p className="experience-role">
          UI/UX Designer • Graphic Designer • Frontend Work
        </p>

        <p className="experience-description">

          Worked on multiple client and personal projects including:

          <br /><br />

          <strong>Al-Harmain (Islamic Institute):</strong><br />
          Designed social media posts, flyers, and branding materials.
          Collaborated with a team of 4–5 designers and managed Instagram,
          Facebook, and LinkedIn content with consistent visual strategy.

          <br /><br />

          <strong>NoorulNisa Platform:</strong><br />
          Contributed as a graphic designer creating flyers, social media stories,
          and promotional content focused on women empowerment and development.

          <br /><br />

          <strong>Personal Projects:</strong><br />
          Designed UI/UX apps, portfolio websites, ebooks, and productivity tools
          such as task schedulers and concept applications using Figma and react native with database like mysql and firebase.

        </p>

      </div>
    </div>

  </div>
</div>

      {/* ===== STATS SECTION ===== */}
      <div className="stats">
        <div>
          <h2>20+</h2>
          <p>Design Projects</p>
        </div>

        <div>
          <h2>3+</h2>
          <p>Social Media Platforms Management</p>
        </div>

        <div>
          <h2>1</h2>
          <p>Mobile App in Development</p>
        </div>
      </div>
    </section>
  );
}