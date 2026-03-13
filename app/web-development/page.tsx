import Navbar from "../components/Navbar";
import Image from "next/image";

export default function WebDev() {
  return (
    <main>
      <Navbar />

      <section className="project-details">
        <h1>Web Development Projects</h1>

        <h2>Project 1 — Portfolio Website</h2>

        <p className="desc">
          Fully responsive portfolio built using Next.js, modern CSS and
          animations with optimized performance.
        </p>

        <div className="image-slider">
          <button>{"<"}</button>

          <div className="image-row">
            <Image src="/public/images/cake.png" width={260} height={180} alt="" />
            <Image src="/public/images/cake.png" width={260} height={180} alt="" />
          </div>

          <button>{">"}</button>
        </div>

        <a className="project-link" href="#" target="_blank">
          GitHub Repo →
        </a>
      </section>
    </main>
  );
}
