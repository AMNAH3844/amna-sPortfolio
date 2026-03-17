"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { projectsData } from "./projectsData";
import styles from "./projects.module.css";

export default function ProjectsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState<{ type: string; src: string } | null>(null);

  const openLightbox = (media: { type: string; src: string }) => {
    setCurrentMedia(media);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentMedia(null);
  };

  return (
    <main>
      <Navbar />

      {Object.entries(projectsData).map(([id, project], index) => (
        <section
          key={id}
          id={id}
          className={`${styles.projectSection} ${index % 2 !== 0 ? styles.reverse : ""}`}
        >
          {/* LEFT CONTENT */}
          <div className={styles.leftContent}>
            <h1 className={styles.projectTitle}>{project.title}</h1>
            <h3 className={styles.focusHeading}>Problem Solved & Focus</h3>
            <p className={styles.focusText}>{project.focus}</p>

            <div className={styles.projectLink}>
              <a href={project.link} target="_blank">
                <button>View Full Project</button>
              </a>
            </div>
          </div>

          {/* RIGHT MEDIA */}
          <div className={styles.imageRow}>
            {project.media.map((mediaItem, i) => (
              <div
                key={i}
                className={styles.thumb}
                onClick={() => openLightbox(mediaItem)}
              >
                {mediaItem.type === "image" ? (
                  <img src={mediaItem.src} alt="" />
                ) : (
                  <video src={mediaItem.src} muted loop />
                )}
                <div className={styles.zoomText}>
                  {mediaItem.type === "image" ? "Click to Zoom" : "Click to Play"}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* LIGHTBOX */}
      {lightboxOpen && currentMedia && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          {currentMedia.type === "image" ? (
            <img src={currentMedia.src} className={styles.lightboxImg} />
          ) : (
            <video src={currentMedia.src} controls autoPlay className={styles.lightboxImg} />
          )}
        </div>
      )}
    </main>
  );
}

