import { ExternalLink, Github } from 'lucide-react';
import type { PortfolioProject } from '../data/projects';
import ProjectGallery from './ProjectGallery';

type Props = {
  project: PortfolioProject;
};

export default function ProjectCard({ project }: Props) {
  const hasImages = Boolean(project.images?.length);
  const hasLinks = Boolean(project.links?.live || project.links?.repository);

  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <div className="project-card__topline">
        <span className="status-badge">{project.status}</span>
        {project.year && <span className="project-year">{project.year}</span>}
      </div>

      <div className="project-card__heading">
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-technologies" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-capabilities">
        <h4>System capabilities</h4>
        <ul>
          {project.capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </div>

      {hasImages && <ProjectGallery images={project.images!} projectTitle={project.title} />}

      {hasLinks && (
        <div className="project-links">
          {project.links?.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer">
              <ExternalLink size={16} /> Live system
            </a>
          )}
          {project.links?.repository && (
            <a href={project.links.repository} target="_blank" rel="noreferrer">
              <Github size={16} /> Repository
            </a>
          )}
        </div>
      )}
    </article>
  );
}
