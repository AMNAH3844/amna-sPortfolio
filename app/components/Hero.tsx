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
  I’m currently in the final semester of my Computer Science degree,
  with strong skills in problem solving, coding, and building digital
  solutions. My main interests are Web Development, UI/UX Design,
  and Graphic Design. And along with that, I'm learning machine learning and AI.
  In today’s AI-driven world, I believe it is important to create
  designs that feel unique and meaningful instead of repetitive.
  I observe real-life problems and turning them digital solutions.
  <br /><br />
  Achieved <strong>91.0 percentile</strong> in the National
  Skill Competency Test (NSCT).
</p>

         

          <div className="hero-buttons">
            <a href="/AMNA ARIF_RESUME.pdf" download className="primary-btn">
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
  <p className="title">Tools & Technologies</p>

  <div className="tools">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript (ES6+)</span>
    <span>React.js</span>
    <span>Next.js</span>

    <span>Node.js</span>
    <span>Express.js</span>
    <span>REST APIs</span>

    <span>Python</span>
    <span>AI / Machine Learning Basics</span>
    <span>OpenAI API</span>
    <span>Prompt Engineering</span>

    <span>Git & GitHub</span>
    <span>MySQL</span>
    <span>Firebase</span>

    <span>Figma</span>
    <span>Canva</span>
    <span>Photoshop</span>
    <span>Illustration</span>
    <span>AI Tools</span>
  </div>
</div>
     {/* ===== EXPERIENCE SECTION ===== */}
{/* ===== EXPERIENCE SECTION ===== */}
<div className="experience-section" id="experience">

  {/* HEADING */}
  <div className="experience-heading">
    <h2>Experience</h2>
    <p>Creative & Professional Journey</p>
  </div>

  {/* TIMELINE */}
  <div className="experience-timeline">

    {/* ITEM 1 */}
    <div className="experience-item">

      <div className="experience-icon">
        <span>✦</span>
      </div>

      <div className="experience-content">

        <div className="experience-top">
          <h3>Elumni</h3>
          <span className="experience-duration">2026</span>
        </div>

        <h4 className="experience-role">
          Social Media Manager & Graphic Designer
        </h4>

        <ul className="experience-points">
          <li>
            Managed social media campaigns and content strategy.
          </li>

          <li>
            Designed digital creatives, posts, and branding materials.
          </li>

          <li>
            Helped improve audience engagement and online presence.
          </li>
        </ul>

      </div>
    </div>

    {/* ITEM 2 */}
    <div className="experience-item">

      <div className="experience-icon">
        <span>✦</span>
      </div>

      <div className="experience-content">

        <div className="experience-top">
          <h3>Freelance Projects</h3>
          <span className="experience-duration">
            2023 — Present
          </span>
        </div>

        <h4 className="experience-role">
          UI/UX Designer • Graphic Designer • Frontend Developer
        </h4>

        <ul className="experience-points">

          <li>
            Worked on multiple client and personal projects including
            UI/UX design, branding, and frontend development.
          </li>

          <li>
            Designed social media creatives and branding materials
            for Al-Harmain Institute while collaborating with a
            creative team.
          </li>

          <li>
            Created promotional visuals and campaign designs for
            NoorulNisa Platform focused on women empowerment
            initiatives.
          </li>

          <li>
            Built portfolio websites, UI concepts, and full-stack
            project ideas using React, Firebase, Figma, and MySQL.
          </li>

        </ul>

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