export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h4 className="hero-tag">UI/UX • Graphic • Frontend</h4>

          <h1>
            I Design & Build
            <span className="highlight"> Digital Experiences</span>
          </h1>
           <h2>YourName</h2>
          <p className="hero-description">
            I am an IT graduate and skilled graphic designer with 3 years of experience in creating engaging digital designs.
           My goal is to deliver effective solutions to problems using creative and digital approaches.
          </p>

         <div className="hero-buttons">
  <a 
    href="/Resume(G).pdf"  // path relative to public folder
    download             // tells browser to download file
    className="primary-btn"
  >
    Download Resume
  </a>
</div>


         </div> 

        {/* RIGHT IMAGE */}
       <div className="hero-right">
  <img 
    src="/images/profileimg.png" // path relative to the public folder
    alt="Hero Image" 
    className="hero-image" // optional, for styling
  />
</div>
      </div>
      {/* FEATURED STRIP */}
      <div className="featured">
        <p>Skills & Platforms</p>
        <div className="tools">
          <span>Figma</span>
          <span>Adobe XD</span>
          <span>React</span>
          <span>WordPress</span>
          <span>Canva</span>
        </div>
      </div>


      <div className="stats">
        <div>
          <h2>3+</h2>
          <p>Years Experience</p>
        </div>
        <div>
          <h2>50+</h2>
          <p>Projects Completed</p>
        </div>
        <div>
          <h2>100%</h2>
          <p>Client Satisfaction</p>
        </div>
      </div>

     
    </section>
  );
}
