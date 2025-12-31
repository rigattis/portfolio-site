import { projects } from "../data/projects";

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="projects-section">
      {sortedProjects.map((project) => (
        <div className="project-card" key={project.title}>

          {/* LEFT: media */}
          <div className="project-media">
            {project.video ? (
              <video controls>
                <source src={project.video} />
              </video>
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
              />
            ) : null}
          </div>

          {/* RIGHT: text */}
          <div className="project-content">
            <h2>{project.title}</h2>

            <p className="project-skills">{project.skills}</p>

            <p className="project-description">
              {project.description}
            </p>

            {project.url && (
              <a
                href={project.url}
                className="project-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.urlDescription ?? "View Project"}
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
