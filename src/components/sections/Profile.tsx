import { ArrowUpRight } from "lucide-react";
import { cv } from "../../data/cv";
import SectionHeading from "../ui/SectionHeading";
import Mark from "../ui/Mark";

export default function Profile() {
  return (
    <section
      id="about"
      className="section container profile-section"
      data-reveal
      aria-label="About and professional profile"
    >
      <div>
        <SectionHeading number="01" label="The person">
          Curiosity, with <br />a sense of purpose.
        </SectionHeading>
        <div className="profile-signature" aria-hidden="true">
          <Mark />
          <span>
            Thoughtfully built.
            <br />
            Practically minded.
          </span>
        </div>
      </div>
      <div className="profile-copy">
        <p className="lead">
          Good systems begin with
          <br className="desktop-break" /> understanding people.
        </p>
        <p>
          I’m an Information Technology student drawn to the work between an
          everyday problem and a useful solution. My projects explore how
          software and connected tools can bring more clarity to operational
          work.
        </p>
        <p>
          From laboratory workflows to classroom records and institutional
          navigation, I’m interested in making complex processes easier to use,
          debug, and maintain.
        </p>
        <div className="objective">
          <span className="eyebrow">Career direction</span>
          <p>{cv.objective}</p>
        </div>
        <a className="inline-link" href="#experience">
          A closer look at my practice <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
