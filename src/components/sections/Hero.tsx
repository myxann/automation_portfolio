import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Printer,
  UserRound,
} from "lucide-react";
import { cv } from "../../data/cv";

const chapters = [
  {
    number: "01",
    title: "The person",
    text: "Profile & education",
    href: "#about",
  },
  {
    number: "02",
    title: "The practice",
    text: "Skills & experience",
    href: "#skills",
  },
  {
    number: "03",
    title: "The systems",
    text: "Selected projects",
    href: "#projects",
  },
  {
    number: "04",
    title: "The next chapter",
    text: "Let’s connect",
    href: "#contact",
  },
];

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <picture className="hero-art" aria-hidden="true">
        <source
          media="(max-width: 600px)"
          srcSet="/art/renaissance-smoke-small.webp"
        />
        <img
          src="/art/renaissance-smoke.webp"
          alt=""
          width="1440"
          height="960"
        />
      </picture>
      <div className="hero-diagonal" aria-hidden="true" />
      <div className="hero-side-note" aria-hidden="true">
        <span />
        An evolving archive
        <span />
      </div>
      <div className="container hero-content">
        <div className="hero-topline">
          <p className="eyebrow">
            <span className="small-rule" />
            Curriculum Vitae & Systems Portfolio
          </p>
          <span className="edition">Vol. 01 / Ongoing</span>
        </div>
        <h1 id="hero-heading">
          <span>BEYOND THE</span>
          <em>WORKFLOW.</em>
        </h1>
        <div className="hero-lower">
          <div className="hero-introduction">
            <p>{cv.introduction}</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <button
                className="text-button print-action"
                type="button"
                onClick={() => window.print()}
              >
                <Printer size={15} /> Print / Save CV
              </button>
            </div>
          </div>
          <div className="hero-identity">
            <figure
              className="portrait-frame"
              style={
                cv.portrait
                  ? {
                      aspectRatio: `${cv.portrait.width} / ${cv.portrait.height}`,
                    }
                  : undefined
              }
            >
              {cv.portrait ? (
                <img
                  src={cv.portrait.src}
                  alt={cv.portrait.alt}
                  width={cv.portrait.width}
                  height={cv.portrait.height}
                />
              ) : (
                <>
                  <UserRound size={26} strokeWidth={1} />
                  <span>
                    Portrait pending
                    <br />
                    approval
                  </span>
                </>
              )}
            </figure>
            <div className="identity-copy">
              <p className="identity-name">
                {cv.publicName || "Public name pending review"}
              </p>
              <p className="identity-title">
                {cv.title}
                <br />
                Workflow Automation & Systems Development
              </p>
              <span className="location">
                <MapPin size={12} />
                {cv.location}
              </span>
              <div className="identity-contact">
                {cv.email ? (
                  <a href={`mailto:${cv.email}`}>
                    <Mail size={12} />
                    <span>{cv.email}</span>
                  </a>
                ) : null}
                {cv.phone ? (
                  <a href={`tel:${cv.phone.number}`}>
                    <Phone size={12} />
                    <span>{cv.phone.display}</span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>
            <i className="status-dot" />
            Learning. Building. Connecting.
          </span>
          <a href="#about">
            Discover the archive <ArrowDown size={15} />
          </a>
        </div>
      </div>
      <nav className="chapter-nav container" aria-label="Explore the portfolio">
        {chapters.map((chapter) => (
          <a href={chapter.href} key={chapter.number}>
            <span className="chapter-number">{chapter.number}</span>
            <div>
              <span className="chapter-title">{chapter.title}</span>
              <span className="chapter-description">{chapter.text}</span>
            </div>
            <ArrowDownRight size={20} strokeWidth={1} />
          </a>
        ))}
      </nav>
    </section>
  );
}
