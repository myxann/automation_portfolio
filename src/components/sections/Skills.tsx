import { Braces, Database, Network, ScanLine } from "lucide-react";
import { skillGroups } from "../../data/cv";
import SectionHeading from "../ui/SectionHeading";

const icons = [Network, Braces, Database, ScanLine];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section container"
      data-reveal
    >
      <div className="section-heading-row">
        <SectionHeading number="03" label="Capabilities">
          A connected skill set.
        </SectionHeading>
        <p>
          Tools are part of the process.
          <br />
          Solving the right problem comes first.
        </p>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = icons[index];
          return (
            <article className="skill-group" key={group.title}>
              <Icon size={26} strokeWidth={1} aria-hidden="true" />
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
