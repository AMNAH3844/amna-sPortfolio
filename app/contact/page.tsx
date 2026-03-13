import '../globals.css'
export default function Contact() {

    return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p className="contact-subtitle">
          Let’s work together on your next project.
        </p>
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:amnahussain5625@gmail.com">
              youremail@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+923001234567">
              +6444466 66663 22
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/yourprofile
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              @yourusername
            </a>
          </p>
        </div>
        <div style={{ marginTop: "50px" }}>
          <a  href="mailto:amnahussain5625@gmail.com" 
           className="primary-btn"
           target="_blank" 
           rel="noopener noreferrer"
          >
          Send Email
        </a>
        </div>

        <p className="contact-thankyou">
          Thank you for visiting my portfolio.I truly appreciate your time
          and look forward to connecting with you!
        </p>
      </div>
    </section>
  );
}
