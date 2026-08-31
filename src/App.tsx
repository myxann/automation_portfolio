import { ArrowDown, Mail, MapPin } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

const expertise = [
  {
    title: 'Workflow Automation',
    text: 'Intake, queues, approvals, reminders, summaries, reporting, and recurring operational updates.',
  },
  {
    title: 'Systems Integration',
    text: 'Google Workspace, APIs, webhooks, forms, spreadsheets, email, files, and application interfaces.',
  },
  {
    title: 'Operational Systems',
    text: 'Practical systems for laboratories, offices, class officers, student clearance, meetings, and institutional workflows.',
  },
  {
    title: 'Reliable Delivery',
    text: 'Offline-friendly actions, structured records, exports, validation, synchronization, and maintainable integrations.',
  },
];

const technicalFoundation = [
  'n8n',
  'Python',
  'JavaScript',
  'TypeScript',
  'FastAPI',
  'REST APIs',
  'PostgreSQL',
  'MySQL',
  'Flutter',
  'React',
  'Docker',
  'Git / GitHub',
  'Google Workspace',
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-nav">
        <a href="#top" className="brand" aria-label="Go to top">MAF</a>
        <nav aria-label="Primary navigation">
          <a href="#profile">Profile</a>
          <a href="#projects">Systems</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero__eyebrow">Automation Specialist · Systems Integration · Process Optimization</div>
          <h1>
            Practical automation for
            <span> real operational work.</span>
          </h1>
          <p className="hero__intro">
            I build workflow systems that reduce repeated work, organize records, connect existing tools, and make daily operations easier to manage.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">View systems <ArrowDown size={17} /></a>
            <a className="button button--ghost" href="mailto:floro.micahangelaescoto@gmail.com">Contact me <Mail size={17} /></a>
          </div>
          <div className="hero__meta">
            <span><MapPin size={15} /> Philippines</span>
            <span>Open to automation & systems work</span>
          </div>
        </section>

        <section className="section" id="profile">
          <div className="section-heading">
            <p className="section-kicker">01 / Profile</p>
            <h2>Automation capability backed by software and integration skills.</h2>
          </div>

          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <article className="expertise-card" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="foundation-panel">
            <div>
              <p className="section-kicker">Technical foundation</p>
              <h3>Tools I use to build and support integrated workflows.</h3>
            </div>
            <div className="skill-cloud">
              {technicalFoundation.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section className="section section--projects" id="projects">
          <div className="section-heading section-heading--split">
            <div>
              <p className="section-kicker">02 / Systems Portfolio</p>
              <h2>Selected automation and operational systems.</h2>
            </div>
            <p>
              Projects are driven from one centralized data file. Screenshot sections appear automatically only when images are provided.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div>
            <p className="section-kicker">03 / Contact</p>
            <h2>Let’s automate better workflows.</h2>
            <p>
              Interested in workflow automation, administrative automation, systems integration, and practical process improvement.
            </p>
          </div>
          <div className="contact-card">
            <p className="contact-name">Micah Angela Floro</p>
            <p>Automation Specialist</p>
            <a href="mailto:floro.micahangelaescoto@gmail.com">floro.micahangelaescoto@gmail.com</a>
            <a href="tel:+639241695521">(+63) 924 169 5521</a>
          </div>
        </section>
      </main>

      <footer>
        <span>Micah Angela Floro</span>
        <span>Automation Specialist</span>
      </footer>
    </div>
  );
}
