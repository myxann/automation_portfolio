import { cv, skillGroups } from "./cv";

// Print-only presentation choices. Identity, qualifications, technologies,
// project status, and experience remain sourced from the main CV/project records.
const verifiedSkills = new Set(skillGroups.flatMap((group) => group.skills));
const selectSkills = (names: string[]) =>
  names.filter((name) => verifiedSkills.has(name));

export const resumeSummary = `${cv.title} focused on workflow automation, software development, and API integration. Builds practical, user-focused systems that connect tools and simplify operational work.`;

export const resumeSkillCategories = [
  {
    label: "Programming languages",
    skills: selectSkills([
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "HTML & CSS",
    ]),
  },
  {
    label: "Frameworks & development",
    skills: selectSkills(["React", "Flutter / Dart", "FastAPI"]),
  },
  {
    label: "Workflow automation",
    skills: selectSkills([
      "n8n",
      "Workflow design",
      "Webhooks",
      "REST APIs",
      "Google Workspace",
    ]),
  },
  {
    label: "Databases",
    skills: selectSkills(["PostgreSQL", "MySQL", "SQLite"]),
  },
  {
    label: "Developer tools",
    skills: selectSkills(["Docker", "Git & GitHub", "Postman"]),
  },
];

// Concise descriptions grounded in each existing project's capabilities.
// These IDs select the résumé; the website still displays all seven systems.
export const resumeProjectSelections = [
  {
    id: "labtrack",
    bullets: [
      "Built intake, status tracking, appointment, reminder, and reporting workflows for laboratory operations.",
    ],
  },
  {
    id: "advanced-studies-assistant",
    bullets: [
      "Automated Gmail intake into action queues, daily briefings, priority alerts, and follow-up reminders.",
    ],
  },
  {
    id: "ic-clearance",
    bullets: [
      "Developing role-based approval queues, signature workflows, PDF generation, and QR verification for institutional clearance.",
    ],
  },
  {
    id: "classmate",
    bullets: [
      "Building offline-first class directories, attendance records, fee transactions, balance tracking, and PDF exports.",
    ],
  },
];
