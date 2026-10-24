import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import { cv } from "../../data/cv";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  const hasContact = Boolean(
    cv.email ||
      cv.phone ||
      cv.githubUrl ||
      cv.linkedinUrl ||
      cv.otherLinks.length,
  );
  return (
    <section id="contact" className="contact-section section" data-reveal>
      <div className="container contact-layout">
        <div>
          <SectionHeading number="07" label="The next chapter">
            Good work starts <br />
            with a conversation.
          </SectionHeading>
          <p>
            Interested in thoughtful software, connected systems, and
            opportunities to keep learning.
          </p>
          <span className="location">
            <MapPin size={14} />
            {cv.location}
          </span>
        </div>
        <div className="contact-details">
          <p className="eyebrow">Areas of interest</p>
          <ul className="interests-list">
            {cv.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
          {hasContact ? (
            <div className="social-links">
              {cv.email ? (
                <a href={`mailto:${cv.email}`}>
                  <Mail size={17} />
                  <span>{cv.email}</span>
                  <ArrowUpRight size={16} />
                </a>
              ) : null}
              {cv.phone ? (
                <a href={`tel:${cv.phone.number}`}>
                  <Phone size={17} />
                  <span>{cv.phone.display}</span>
                  <ArrowUpRight size={16} />
                </a>
              ) : null}
              {cv.githubUrl ? (
                <a href={cv.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={17} />
                  <span>GitHub</span>
                  <ArrowUpRight size={16} />
                </a>
              ) : null}
              {cv.linkedinUrl ? (
                <a href={cv.linkedinUrl} target="_blank" rel="noreferrer">
                  <Linkedin size={17} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={16} />
                </a>
              ) : null}
              {cv.otherLinks.map((link) => (
                <a
                  href={link.url}
                  key={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          ) : (
            <p className="contact-pending">
              Public contact details are awaiting approval.
            </p>
          )}
          <button
            className="text-button print-action"
            type="button"
            onClick={() => window.print()}
          >
            <Printer size={16} />
            Print / Save CV
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
