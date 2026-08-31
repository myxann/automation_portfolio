export type ProjectStatus = 'Built' | 'Built / Pilot' | 'In Development' | 'Currently Building';

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  status: ProjectStatus;
  year?: string;
  technologies: string[];
  capabilities: string[];
  images?: ProjectImage[];
  links?: {
    live?: string;
    repository?: string;
  };
  featured?: boolean;
};

/**
 * SINGLE SOURCE OF TRUTH FOR THE PROJECT PORTFOLIO
 * ------------------------------------------------
 * To add a project, add ONE object to this array.
 *
 * Images are optional. If `images` is omitted or [], the UI renders no
 * screenshot/gallery area at all.
 *
 * Recommended image location:
 *   public/projects/<project-id>/image-name.webp
 * Then reference it as:
 *   /projects/<project-id>/image-name.webp
 */
export const projects: PortfolioProject[] = [
  {
    id: 'labtrack',
    title: 'LabTrack',
    subtitle: 'Laboratory Workflow Automation System',
    shortDescription: 'Laboratory intake, status tracking, follow-ups, appointments, reporting, and archival.',
    description:
      'A practical laboratory workflow system that supports client requests, transaction status updates, appointments, reminders, results notifications, reporting, release tracking, and safe record archival using existing workplace tools.',
    status: 'Built / Pilot',
    technologies: ['n8n', 'Docker', 'Google Workspace', 'Google Cloud APIs', 'JavaScript'],
    capabilities: [
      'Client and request intake',
      'Transaction and status tracking',
      'Requirements follow-up',
      'Appointment scheduling',
      'Daily operational reporting',
      'Results-ready notifications',
      'Release tracking',
      'Safe record archival',
    ],
    images: [],
    featured: true,
  },
  {
    id: 'advanced-studies-assistant',
    title: 'Advanced Studies Assistant',
    subtitle: 'Administrative Email & Task Automation',
    shortDescription: 'Email intake, action queues, briefings, summaries, and follow-up reminders.',
    description:
      'An administrative automation system that turns incoming Gmail messages into structured action queues, daily briefings, end-of-day summaries, priority alerts, and follow-up reminders.',
    status: 'Built',
    technologies: ['n8n', 'Gmail', 'Google Sheets', 'Google Tasks', 'Google Chat', 'JavaScript'],
    capabilities: [
      'Gmail intake processing',
      'Action queue maintenance',
      'Priority and deadline tracking',
      'Morning briefing generation',
      'End-of-day wrap summaries',
      'Follow-up reminder logic',
      'Attachment review flags',
    ],
    images: [],
    featured: true,
  },
  {
    id: 'ic-clearance',
    title: 'IC Clearance Management',
    subtitle: 'Digital Clearance & Approval Workflow',
    shortDescription: 'Student clearance setup, approval queues, signatures, notifications, PDF generation, and QR verification.',
    description:
      'A multi-role institutional clearance platform for students, signees, and administrators, supporting configurable clearance periods, approval queues, payment-status handling, signatures, notifications, history, document generation, and QR verification.',
    status: 'In Development',
    technologies: ['Flutter', 'FastAPI', 'REST APIs', 'n8n', 'Google Workspace', 'Docker'],
    capabilities: [
      'Student data synchronization',
      'Clearance period setup',
      'Role-based signee approval queues',
      'Treasurer payment-status handling',
      'Student portal notifications',
      'Signature workflows',
      'Final PDF generation',
      'QR-based verification',
    ],
    images: [],
    featured: true,
  },
  {
    id: 'classmate',
    title: 'ClassMate',
    subtitle: 'Class Officer Companion',
    shortDescription: 'Class directory, attendance, treasury, notes, PDF exports, and offline-friendly records.',
    description:
      'A mobile-first classroom management system for class mayors and treasurers that replaces repeated group-chat searches, paper attendance sheets, scattered notes, and separate payment spreadsheets with one organized workflow.',
    status: 'Currently Building',
    technologies: ['Flutter', 'SQLite', 'PDF Export', 'Offline-first Data'],
    capabilities: [
      'Classmate directory',
      'Custom classmate information',
      'Fast attendance checking',
      'Attendance summaries and PDF export',
      'Whole-class fee creation',
      'Transaction-based payments',
      'Automatic balances and status',
      'Offline save and sync states',
    ],
    images: [],
    featured: true,
  },
  {
    id: 'collection-management',
    title: 'Collection Management System',
    subtitle: 'Fee & Payment Tracking Automation',
    shortDescription: 'Fee generation, payment verification, status tracking, transaction history, and reporting.',
    description:
      'A student fee and collection workflow for automated fee setup, payment verification, balance tracking, transaction history, and collection reporting.',
    status: 'Built',
    technologies: ['Workflow Automation', 'Data Validation', 'Reporting'],
    capabilities: [
      'Automated fee setup',
      'Payment verification',
      'Student payment status',
      'Transaction history',
      'Collection summaries and reports',
    ],
    images: [],
  },
  {
    id: 'minutes-builder',
    title: 'Minutes Builder',
    subtitle: 'Structured Meeting Documentation',
    shortDescription: 'Live minutes sections, history, formatting controls, decisions, action items, and PDF export.',
    description:
      'A meeting documentation system for structured live minutes, reusable document sections, decisions and action items, saved history, formatting controls, and professional PDF export.',
    status: 'In Development',
    technologies: ['Flutter', 'PDF Generation', 'Local Persistence'],
    capabilities: [
      'Structured live minutes',
      'Editable document sections',
      'Open decisions and action items',
      'Saved meeting history',
      'Formatting controls',
      'PDF export',
    ],
    images: [],
  },
  {
    id: 'where-am-i',
    title: 'Where Am I?',
    subtitle: 'Institutional Navigation & Analytics Platform',
    shortDescription: 'Indoor/outdoor navigation, offline event queues, role-based workflows, reports, and map-improvement analytics.',
    description:
      'An institutional navigation platform supporting indoor and outdoor mapping, floor-aware navigation, accessibility options, emergency navigation, role-based administrative workflows, navigation analytics, and offline event handling.',
    status: 'In Development',
    technologies: ['React', 'TypeScript', 'REST APIs', 'PostgreSQL', 'Web Mapping'],
    capabilities: [
      'Indoor and outdoor navigation',
      'Floor-aware routing',
      'Accessibility options',
      'Emergency navigation',
      'Role-based administrative workflows',
      'Navigation-event analytics',
      'Offline event queue',
      'Map-improvement signals',
    ],
    images: [],
  },
];
