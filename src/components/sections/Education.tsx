import { GraduationCap } from "lucide-react";
import { education } from "../../data/cv";
import SectionHeading from "../ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="education-section section" data-reveal>
      <div className="container education-layout">
        <div>
          <SectionHeading number="02" label="Education">
            A foundation <br />
            for what’s next.
          </SectionHeading>
          <p className="section-note">
            Learning the principles.
            <br />
            Putting them into practice.
          </p>
          <GraduationCap
            className="education-symbol"
            size={58}
            strokeWidth={0.7}
            aria-hidden="true"
          />
        </div>
        <ol className="education-timeline">
          {education.map((record, index) => (
            <li key={record.qualification}>
              <span className="timeline-dot" aria-hidden="true" />
              <span className="eyebrow">
                {record.period ||
                  (index === 0 ? "Higher education" : "Senior high school")}
              </span>
              <h3>{record.qualification}</h3>
              <p className="institution">{record.institution}</p>
              <p>{record.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
