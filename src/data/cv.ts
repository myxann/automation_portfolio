/** Public content only. Null values deliberately withhold unapproved identity/contact data.
 * Review docs/PUBLICATION_CHECKLIST.md before setting any identity fields.
 * Never store private values here, even with an `approved: false` flag: Vite bundles this file.
 */
export type ProfessionalLink = { label: string; url: string };
export type EducationRecord = {
  qualification: string;
  institution: string;
  description: string;
  period?: string;
};
export type ExperienceRecord = {
  title: string;
  kind:
    | "Project-based practice"
    | "Internship"
    | "Employment"
    | "Volunteering"
    | "Leadership";
  description: string;
  projectIds: string[];
  organization?: string;
  period?: string;
  resumeBullets?: string[];
};
export type Achievement = {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
};

export const cv: {
  publicName: string | null;
  title: string;
  portrait: { src: string; alt: string; width: number; height: number } | null;
  email: string | null;
  phone: { display: string; number: string } | null;
  location: string;
  githubUrl: string | null;
  linkedinUrl: string | null;
  portfolioUrl: string | null;
  otherLinks: ProfessionalLink[];
  introduction: string;
  objective: string;
  interests: string[];
} = {
  publicName: "Micah Angela E. Floro",
  title: "Information Technology Student",
  portrait: {
    src: "/profile/profile.jpg",
    alt: "Micah Angela E. Floro wearing an orange blazer",
    width: 768,
    height: 1136,
  },
  email: "Floro.micahangela@dnsc.edu.ph",
  phone: { display: "0924 169 5521", number: "+639241695521" },
  location: "Philippines",
  githubUrl: null,
  linkedinUrl: null,
  portfolioUrl: null,
  otherLinks: [],
  introduction:
    "I design practical digital systems that connect tools, simplify workflows, and make everyday operations easier to manage.",
  objective:
    "Seeking opportunities in software development, workflow automation, and systems integration to build practical, reliable, and user-focused solutions.",
  interests: [
    "Workflow automation",
    "Software development",
    "Systems integration",
  ],
};

// Qualifications corroborated by the project brief and the locally available older CV.
// No dates, current year level, honors, or precise locations are inferred.
export const education: EducationRecord[] = [
  {
    qualification: "Bachelor of Science in Information Technology",
    institution: "Davao del Norte State College",
    description:
      "Information technology studies, with an interest in software development and integrated systems.",
  },
  {
    qualification: "TVL — Information and Communication Technology",
    institution: "Panabo City Senior High School",
    description:
      "Senior high school background in information and communication technology.",
  },
];

export const skillGroups = [
  {
    title: "Workflow automation",
    description: "Connecting the steps between tools and people.",
    skills: [
      "n8n",
      "Workflow design",
      "Webhooks",
      "REST APIs",
      "Google Workspace",
      "Process optimization",
    ],
  },
  {
    title: "Software development",
    description: "Turning everyday needs into usable software.",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "Flutter / Dart",
      "HTML & CSS",
      "FastAPI",
    ],
  },
  {
    title: "Data & infrastructure",
    description: "Giving systems a dependable foundation.",
    skills: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Docker",
      "Git & GitHub",
      "Postman",
    ],
  },
  {
    title: "Professional practice",
    description: "Making the work understandable and maintainable.",
    skills: [
      "Problem-solving",
      "System debugging",
      "Technical documentation",
      "Software testing",
      "Communication & teamwork",
    ],
  },
];

export const experience: ExperienceRecord[] = [
  {
    title: "Designing connected workflows",
    kind: "Project-based practice",
    description:
      "Developing intake flows, action queues, reminders, and reporting that connect existing tools into a more structured process.",
    projectIds: ["labtrack", "advanced-studies-assistant"],
  },
  {
    title: "Building operational software",
    kind: "Project-based practice",
    description:
      "Applying application development to classroom records, clearance approvals, meeting documentation, and institutional navigation.",
    projectIds: ["ic-clearance", "classmate", "minutes-builder", "where-am-i"],
  },
  {
    title: "Working toward reliable systems",
    resumeBullets: [
      "Apply validation, debugging, testing, and technical documentation across personal and academic software projects.",
    ],
    kind: "Project-based practice",
    description:
      "Working with validation, role-based workflows, offline records, exports, and technical documentation throughout project development.",
    projectIds: ["collection-management", "where-am-i"],
  },
];

// Add only verified records. An empty array intentionally renders no public credentials.
export const achievements: Achievement[] = [];

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
