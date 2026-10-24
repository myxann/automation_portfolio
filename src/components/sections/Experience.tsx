import { ArrowUpRight } from "lucide-react";
import { experience } from "../../data/cv";
import { projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section" data-reveal>
      <div className="container experience-layout">
        <div className="experience-intro">
          <SectionHeading number="04" label="Experience & applied practice">
            Learning <br />
            by making.
          </SectionHeading>
          <p>
            Practical experience through personal and academic software
            projects.
          </p>
          <span className="practice-label">Project-based work</span>
        </div>
        <div className="experience-list">
          {experience.map((record, index) => (
            <article key={record.title}>
              <span className="experience-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="eyebrow">
                  {record.kind}
                  {record.period ? ` / ${record.period}` : ""}
                </p>
                <h3>{record.title}</h3>
                {record.organization ? <p>{record.organization}</p> : null}
                <p>{record.description}</p>
                <div className="experience-projects">
                  {record.projectIds.map((id) => {
                    const project = projects.find((item) => item.id === id);
                    return project ? (
                      <a href={`#project-${id}`} key={id}>
                        {project.title}
                        <ArrowUpRight size={13} />
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
