import Navbar from "../../components/Navbar";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  return (
    <main>
      <Navbar />

      <section className="project-details">
        <h1>{params.id.toUpperCase()} Project</h1>

        <div className="project-layout">

          <div className="project-images">
            <div className="img-placeholder large">Project Image</div>
            <div className="img-placeholder large">Project Image</div>
          </div>

          <div className="project-desc">
            <p>
              Description of the project will go here. You can explain your
              design process, tools used, client needs, and outcome.
            </p>

            <a href="#" target="_blank" className="project-link">
              View Full Project →
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
