import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>

      <div className="project-grid">

        <Link href="/ui-ux/projects/mobile-app" className="project-card">
          <h3>Mobile App UI</h3>
          <p>Modern mobile UI case study</p>
        </Link>

        <Link href="/web-development/projects/portfolio-site" className="project-card">
          <h3>Portfolio Website</h3>
          <p>Next.js personal portfolio</p>
        </Link>

      </div>
    </section>
  );
}
