import { achievements, cv, education, experience } from "../../data/cv";
import { projects } from "../../data/projects";
import {
  resumeProjectSelections,
  resumeSkillCategories,
  resumeSummary,
} from "../../data/resume";

const selectedProjects = resumeProjectSelections.flatMap((selection) => {
  const project = projects.find((item) => item.id === selection.id);
  return project ? [{ project, bullets: selection.bullets }] : [];
});
const relevantExperience = experience.filter(
  (record) =>
    record.resumeBullets?.length || record.kind !== "Project-based practice",
);

/** A separate, always-mounted print document. It never mutates the screen UI. */
export default function PrintableResume() {
  const contactItems: { text: string; href?: string }[] = [
    { text: cv.location },
    ...(cv.email ? [{ text: cv.email, href: `mailto:${cv.email}` }] : []),
    ...(cv.phone
      ? [{ text: cv.phone.display, href: `tel:${cv.phone.number}` }]
      : []),
    ...[cv.githubUrl, cv.linkedinUrl, cv.portfolioUrl].flatMap((url) =>
      url
        ? [
            {
              text: url.replace(/^https?:\/\//, "").replace(/\/$/, ""),
              href: url,
            },
          ]
        : [],
    ),
  ];

  return (
    <article
      className="print-resume"
      aria-label="Printable professional résumé"
    >
      <header className="resume-header">
        <h1 className="resume-name">{cv.publicName}</h1>
        <p className="resume-contacts">
          {contactItems.map((item, index) => (
            <span className="resume-contact-item" key={`${item.text}-${index}`}>
              {item.href ? <a href={item.href}>{item.text}</a> : item.text}
            </span>
          ))}
        </p>
      </header>

      <section className="resume-section" aria-labelledby="resume-summary">
        <h2 id="resume-summary" className="resume-section-title">
          Professional Summary
        </h2>
        <p>{resumeSummary}</p>
      </section>

      <section className="resume-section" aria-labelledby="resume-education">
        <h2 id="resume-education" className="resume-section-title">
          Education
        </h2>
        {education.map((record) => (
          <div
            className="resume-entry resume-education-entry"
            key={record.qualification}
          >
            <div className="resume-entry-heading">
              <h3>{record.institution}</h3>
              {record.period ? (
                <span className="resume-date">{record.period}</span>
              ) : null}
            </div>
            <p>{record.qualification}</p>
          </div>
        ))}
      </section>

      <section className="resume-section" aria-labelledby="resume-skills">
        <h2 id="resume-skills" className="resume-section-title">
          Technical Skills
        </h2>
        <ul className="resume-skills">
          {resumeSkillCategories
            .filter((category) => category.skills.length)
            .map((category) => (
              <li key={category.label}>
                <strong>{category.label}:</strong> {category.skills.join(", ")}
              </li>
            ))}
        </ul>
      </section>

      <section className="resume-section" aria-labelledby="resume-projects">
        <h2 id="resume-projects" className="resume-section-title">
          Technical Projects
        </h2>
        {selectedProjects.map(({ project, bullets }) => (
          <div className="resume-entry resume-project" key={project.id}>
            <div className="resume-entry-heading">
              <h3>{project.title}</h3>
              <span className="resume-date">
                {project.year ? `${project.year} | ` : ""}
                {project.status}
              </span>
            </div>
            <p className="resume-technologies">
              {project.technologies.join(" · ")}
            </p>
            <ul className="resume-bullets">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {relevantExperience.length ? (
        <section className="resume-section" aria-labelledby="resume-experience">
          <h2 id="resume-experience" className="resume-section-title">
            Relevant Experience
          </h2>
          {relevantExperience.map((record) => (
            <div className="resume-entry" key={record.title}>
              <div className="resume-entry-heading">
                <h3>{record.title}</h3>
                {record.period ? (
                  <span className="resume-date">{record.period}</span>
                ) : null}
              </div>
              <p className="resume-experience-kind">
                {record.kind}
                {record.organization ? ` | ${record.organization}` : ""}
              </p>
              <ul className="resume-bullets">
                {(record.resumeBullets ?? [record.description]).map(
                  (bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </section>
      ) : null}

      {achievements.length ? (
        <section
          className="resume-section"
          aria-labelledby="resume-achievements"
        >
          <h2 id="resume-achievements" className="resume-section-title">
            Certifications, Activities & Achievements
          </h2>
          {achievements.map((record) => (
            <div
              className="resume-entry"
              key={`${record.title}-${record.issuer}`}
            >
              <div className="resume-entry-heading">
                <h3>
                  {record.url ? (
                    <a href={record.url}>{record.title}</a>
                  ) : (
                    record.title
                  )}
                </h3>
                {record.date ? (
                  <span className="resume-date">{record.date}</span>
                ) : null}
              </div>
              <p>{record.issuer}</p>
            </div>
          ))}
        </section>
      ) : null}
    </article>
  );
}
