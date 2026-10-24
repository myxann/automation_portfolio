import { ArrowUpRight, ChevronDown, ExternalLink, Github } from "lucide-react";
import type { PortfolioProject } from "../data/projects";
import ProjectGallery from "./ProjectGallery";

type Props = { project: PortfolioProject; index: number; hidden: boolean };

export default function ProjectCard({ project, index, hidden }: Props) {
  return (
    <article
      id={`project-${project.id}`}
      className={`project-card project-card--${index % 4}${hidden ? " is-filtered" : ""}`}
      tabIndex={-1}
      aria-label={project.title}
    >
      <div className="project-card__topline">
        <span className="project-number">
          System / {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`status-badge ${project.status === "Built" ? "status-badge--built" : ""}`}
        >
          <i />
          {project.status}
        </span>
      </div>
      <div className="project-card__heading">
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>
      <p className="project-description">{project.shortDescription}</p>
      <div
        className="project-technologies"
        aria-label={`${project.title} technologies`}
      >
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      <details className="project-details">
        <summary>
          <span>Explore system</span>
          <span className="project-summary-icon">
            <ArrowUpRight className="closed-icon" size={20} />
            <ChevronDown className="open-icon" size={20} />
          </span>
        </summary>
        <div className="project-detail-body">
          <p>{project.description}</p>
          {project.year ? <p className="project-year">{project.year}</p> : null}
          <h4>System capabilities</h4>
          <ul>
            {project.capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
          {project.images?.length ? (
            <ProjectGallery
              images={project.images}
              projectTitle={project.title}
            />
          ) : null}
          {project.links?.live || project.links?.repository ? (
            <div className="project-links">
              {project.links?.live ? (
                <a href={project.links.live} target="_blank" rel="noreferrer">
                  <ExternalLink size={15} />
                  Live system
                </a>
              ) : null}
              {project.links?.repository ? (
                <a
                  href={project.links.repository}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={15} />
                  Repository
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </details>
    </article>
  );
}
