import { achievements } from "../../data/cv";
import SectionHeading from "../ui/SectionHeading";

export default function Achievements() {
  if (!achievements.length) return null;
  return (
    <section
      id="achievements"
      className="section container achievements-section"
      data-reveal
    >
      <SectionHeading number="06" label="Achievements & development">
        Continuing to grow.
      </SectionHeading>
      <ul className="achievements-list">
        {achievements.map((item) => (
          <li key={`${item.title}-${item.issuer}`}>
            <h3>
              {item.url ? (
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h3>
            <p>
              {item.issuer}
              {item.date ? ` / ${item.date}` : ""}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
