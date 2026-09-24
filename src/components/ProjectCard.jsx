export default function ProjectCard({ project, index }) {
  return (
    <article className="project">
      <div
        className="project-panel"
        style={{ '--accent': project.accent }}
        aria-hidden="true"
      >
        <span className="project-index">0{index + 1}</span>
        <span className="project-year">{project.year}</span>
      </div>
      <div className="project-body">
        <p className="project-tag">{project.tag}</p>
        <h3>{project.name}</h3>
        <p>{project.blurb}</p>
        <p className="project-outcome">{project.outcome}</p>
        <ul className="chips">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.live}>Live</a>
          <a href={project.source} target="_blank" rel="noreferrer">
            Source
          </a>
        </div>
      </div>
    </article>
  );
}
