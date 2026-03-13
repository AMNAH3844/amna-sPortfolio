"use client";

import { useState } from "react";
// import Navbar from "../components/Navbar";
import { projectsData } from "./projectsData";
import styles from "./projects.module.css";

export default function UIUXProjectsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const openLightbox = (img: string) => {
    setCurrentImg(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <main>
      {/* <Navbar /> */}

      {Object.entries(projectsData).map(([id, project], index) => (
        <section
          key={id}
          id={id}
          className={`${styles.projectSection} ${
            index % 2 !== 0 ? styles.reverse : ""
          }`}
        >
          {/* LEFT CONTENT */}
          <div className={styles.leftContent}>
            <h1 className={styles.projectTitle}>{project.title}</h1>

            <h3 className={styles.focusHeading}>
              Design Goal & UX Focus
            </h3>

            <p className={styles.focusText}>{project.focus}</p>

            <div className={styles.projectLink}>
              <a href={project.link} target="_blank">
                <button>View Prototype</button>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className={styles.imageRow}>
            {project.images.map((img, i) => (
              <div
                key={i}
                className={styles.thumb}
                onClick={() => openLightbox(img)}
              >
                <img src={img} alt="UI UX Project" />
                <div className={styles.zoomText}>Click to Zoom</div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <img src={currentImg} className={styles.lightboxImg} />
        </div>
      )}
    </main>
  );
}

