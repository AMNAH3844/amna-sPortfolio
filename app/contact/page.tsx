export default function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <div className="contact-item">
            <span>Email</span>

            <a href="mailto:afdigitalcave@gmail.com?subject=Portfolio%20Contact">
              afdigitalcave@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span>Phone</span>

            <a href="tel:+923274894726">
              +92 327 4894726
            </a>
          </div>

          <div className="contact-item">
            <span>LinkedIn</span>

            <a
              href="https://www.linkedin.com/in/amnahussain566"
              target="_blank"
              rel="noopener noreferrer"
            >
              amnahussain566
            </a>
          </div>

          <div className="contact-item">
            <span>Instagram</span>

            <a
              href="https://www.instagram.com/afDigitalCave"
              target="_blank"
              rel="noopener noreferrer"
            >
              @afDigitalCave
            </a>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          <div className="contact-heading">
            <h2>
              Contact <br />
              Us
            </h2>
          </div>

          <p>
           Feel free to reach out. I’d love to work.
          </p>

        </div>

      </div>

      {/* THANK YOU */}
      <p className="contact-thankyou">
        Thank you for visiting my portfolio.
      </p>

    </section>
  );
}