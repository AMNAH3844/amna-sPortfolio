import Link from "next/link";
import '../globals.css'
export default function Mail() {
  return (
    <section id="mail" className="mail">
      <div className="mail-box">

        <h1 className="mail-big-text">
          LET’S WORK <br /> TOGETHER
        </h1>

        <p className="mail-subtitle">
          Have a project in mind? I’d love to hear about it.
        </p>

        <div className="mail-buttons">
  <a 
  href="mailto:afdigitalcave@gmail.com" 
  className="primary-btn"
  target="_blank" 
  rel="noopener noreferrer"
>
  Send Email
</a>

  <Link href="/contact" className="secondary-btn">
    Contact
  </Link>
</div>


      </div>
    </section>
  );
}
