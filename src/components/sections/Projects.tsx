import { useEffect, useState } from "react";
import { ArrowUpRight, ListFilter } from "lucide-react";
import { projects, type ProjectStatus } from "../../data/projects";
import ProjectCard from "../ProjectCard";
import SectionHeading from "../ui/SectionHeading";

const statuses = Array.from(new Set(projects.map((project) => project.status)));

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [status, setStatus] = useState<ProjectStatus | "All">("All");
  const [linkedProject, setLinkedProject] = useState<{ id: string } | null>(
    null,
  );

  useEffect(() => {
    const openProject = (hash: string) => {
      if (
        hash.startsWith("project-") &&
        projects.some((project) => `project-${project.id}` === hash)
      ) {
        setShowAll(true);
        setStatus("All");
        setLinkedProject({ id: hash });
      }
    };
    const followProjectHash = () => openProject(window.location.hash.slice(1));
    const followProjectLink = (event: MouseEvent) => {
      const link =
        event.target instanceof Element
          ? event.target.closest('a[href^="#project-"]')
          : null;
      if (link) openProject(link.getAttribute("href")!.slice(1));
    };
    followProjectHash();
    window.addEventListener("hashchange", followProjectHash);
    document.addEventListener("click", followProjectLink);
    return () => {
      window.removeEventListener("hashchange", followProjectHash);
      document.removeEventListener("click", followProjectLink);
    };
  }, []);

  useEffect(() => {
    if (!linkedProject) return;
    const frame = requestAnimationFrame(() => {
      const article = document.getElementById(linkedProject.id);
      article?.querySelector("details")?.setAttribute("open", "");
      article?.scrollIntoView({ block: "start" });
      article?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [linkedProject]);

  // Keep every project mounted so direct anchors can reveal the complete archive.
  const visible = projects.filter(
    (project) =>
      (showAll || project.featured) &&
      (status === "All" || project.status === status),
  );

  return (
    <section
      id="projects"
      className="section projects-section container"
      data-reveal
    >
      <div className="section-heading-row">
        <SectionHeading number="05" label="Selected systems & projects">
          Ideas, put to work.
        </SectionHeading>
        <p>
          A growing collection of workflows,
          <br />
          applications, and practical experiments.
        </p>
      </div>
      <div className="project-toolbar">
        <div className="project-view-controls" aria-label="Project collection">
          <button
            type="button"
            className={!showAll ? "is-active" : ""}
            aria-pressed={!showAll}
            onClick={() => {
              setShowAll(false);
              setStatus("All");
            }}
          >
            Featured work
          </button>
          <button
            type="button"
            className={showAll ? "is-active" : ""}
            aria-pressed={showAll}
            onClick={() => setShowAll(true)}
          >
            All systems{" "}
            <span>{projects.length.toString().padStart(2, "0")}</span>
          </button>
        </div>
        <div className="status-filter">
          <ListFilter size={15} aria-hidden="true" />
          <label className="sr-only" htmlFor="project-status">
            Filter projects by status
          </label>
          <select
            id="project-status"
            value={status}
            onChange={(event) => {
              setShowAll(true);
              setStatus(event.target.value as ProjectStatus | "All");
            }}
          >
            <option value="All">All statuses</option>
            {statuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        Showing {visible.length} of {projects.length} systems
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            hidden={!visible.includes(project)}
          />
        ))}
      </div>
      {!showAll ? (
        <button
          type="button"
          className="view-all-button"
          onClick={() => setShowAll(true)}
        >
          View all {projects.length} systems <ArrowUpRight size={17} />
        </button>
      ) : (
        <p className="archive-count">
          {visible.length.toString().padStart(2, "0")} /{" "}
          {projects.length.toString().padStart(2, "0")} systems in view
        </p>
      )}
    </section>
  );
}
