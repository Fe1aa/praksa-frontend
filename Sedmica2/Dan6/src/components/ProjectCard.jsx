function ProjectCard({ title, tech, description, image, githubUrl }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />

      <div className="project-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-tech">
          {tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={githubUrl}
            className="btn-project secondary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
