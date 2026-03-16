import "../globals.css";

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
            📧 <strong>Email:</strong>{" "}
            <a href="mailto:amnahussain5625@gmail.com?subject=Portfolio%20Contact">
              amnahussain5625@gmail.com
            </a>
          </p>

          <p>
            📞 <strong>Phone:</strong>{" "}
            <a href="tel:+923274894726">
              +92 327 4894726
            </a>
          </p>

          <p>
            💼 <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/amnahussain566"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/amnahussain566
            </a>
          </p>

        </div>
        {/* Instagram (optional) */}
          {/*
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
          */}

        <div style={{ marginTop: "40px" }}>
          <a
            href="mailto:amnahussain5625@gmail.com?subject=Portfolio%20Contact"
            className="primary-btn"
          >
            Send Email
          </a>
        </div>

        <p className="contact-thankyou">
          Thank you for visiting my portfolio. I truly appreciate your time
          and look forward to connecting with you!
        </p>
      </div>
    </section>
  );
}