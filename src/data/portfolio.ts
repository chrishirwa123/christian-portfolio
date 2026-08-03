export interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  repoUrl: string;
  liveUrl?: string;
  status: "shipped" | "in-progress" | "concept";
  featured: boolean;
  accent: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "GigBoard",
    tagline: "Freelance & local job marketplace",
    description:
      "A modern freelance and local job marketplace connecting employers with skilled workers through job posting, applications, real-time messaging, profile management, CV uploads, and secure role-based authentication.",
    longDescription:
      "GigBoard is a full-stack freelance and local job marketplace built with PHP, MySQL, HTML, CSS, and JavaScript. It connects employers with skilled workers through job posting, applications, private messaging, profile management, CV uploads, and secure role-based authentication — featuring a responsive and user-friendly interface with separate employer, worker, and admin dashboards.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "AJAX"],
    category: "Web Platform",
    repoUrl: "https://github.com/chrishirwa123/GigBoard",
    status: "shipped",
    featured: true,
    accent: "#6d28d9",
  },
  {
    id: 2,
    name: "CineyaStream",
    tagline: "Movie streaming & media insights platform",
    description:
      "A lightweight web platform designed for streaming movie descriptions, ratings, and media insights, delivering a seamless browsing experience for film enthusiasts.",
    longDescription:
      "CineyaStream is a lightweight web platform designed for streaming movie descriptions, ratings, and media insights. Built to deliver a seamless browsing experience for film enthusiasts, it features a clean interface for discovering and exploring movie information with rating and media breakdowns.",
    tech: ["HTML", "CSS", "JavaScript", "APIs"],
    category: "Web Platform",
    repoUrl: "https://github.com/chrishirwa123/CineyaStream",
    status: "shipped",
    featured: true,
    accent: "#e11d48",
  },
  {
    id: 3,
    name: "Tembera",
    tagline: "Luxury travel planning SPA",
    description:
      "A luxury, dark-themed Single Page Application designed to help travelers find, budget, and plan trips based on travel styles, group sizes, and localized cost estimations.",
    longDescription:
      "Tembera is a luxury, dark-themed Single Page Application (SPA) designed to help travelers find, budget, and plan trips based on travel styles, group sizes, and localized cost estimations. Built with native HTML5, CSS3, JavaScript, and Canvas for a rich, interactive planning experience without any frameworks.",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    category: "Web App",
    repoUrl: "https://github.com/chrishirwa123/Tembera",
    status: "shipped",
    featured: true,
    accent: "#0ea5e9",
  },
  {
    id: 4,
    name: "AgriMind",
    tagline: "AI farming assistant for farmers",
    description:
      "An AI assistant that gives farmers instant, expert farming advice on crop care, weather, and market prices, right when they need it.",
    longDescription:
      "AgriMind is an AI-powered assistant designed to give farmers instant, expert farming advice on crop care, weather conditions, and market prices — right when they need it. The application aims to bridge the information gap in agriculture by delivering actionable, localized insights directly to farmers.",
    tech: ["AI", "JavaScript", "HTML", "APIs"],
    category: "AI / IoT",
    repoUrl: "https://github.com/chrishirwa123/AgriMind",
    status: "in-progress",
    featured: true,
    accent: "#16a34a",
  },
  {
    id: 5,
    name: "Mother Monitoring System (MMS)",
    tagline: "Maternal healthcare web application",
    description:
      "A web-based healthcare application that helps providers monitor pregnant women by managing patient records, tracking antenatal care, scheduling appointments, and sending automated health reminders.",
    longDescription:
      "Mother Monitoring System (MMS) is a web-based healthcare application that helps healthcare providers monitor pregnant women by managing patient records, tracking antenatal care, scheduling appointments, and sending automated reminders and health notifications to improve maternal healthcare outcomes. Built with PHP and MySQL for a secure, role-based clinical workflow.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    category: "Healthcare",
    repoUrl: "https://github.com/chrishirwa123/Mother-Monitoring-System-MMS",
    status: "shipped",
    featured: false,
    accent: "#0891b2",
  },
];

export interface SkillGroup {
  key: string;
  label: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: "embedded",
    label: "Embedded & Robotics",
    icon: "cpu",
    skills: [
      { name: "Arduino", level: 90 },
      { name: "Raspberry Pi", level: 85 },
      { name: "ESP32 / ESP8266", level: 88 },
      { name: "Sensors & Actuators", level: 85 },
      { name: "C / C++", level: 80 },
    ],
  },
  {
    key: "iot",
    label: "IoT & Connectivity",
    icon: "wifi",
    skills: [
      { name: "MQTT Protocol", level: 85 },
      { name: "Node-RED", level: 75 },
      { name: "Cloud IoT Platforms", level: 80 },
      { name: "Wireless Communication", level: 82 },
    ],
  },
  {
    key: "web",
    label: "Web Development",
    icon: "code",
    skills: [
      { name: "PHP / MySQL", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 80 },
      { name: "HTML / CSS", level: 90 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    key: "game",
    label: "Game Development",
    icon: "gamepad",
    skills: [
      { name: "Unity / C#", level: 75 },
      { name: "Game Logic Design", level: 78 },
      { name: "2D / 3D Graphics", level: 70 },
    ],
  },
];

export interface ExperienceItem {
  id: number;
  hash: string;
  title: string;
  description: string;
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    hash: "a1e4c9f",
    title: "Technology Bootcamp Experience",
    description:
      "Hands-on training spanning web development fundamentals, exploratory work in artificial intelligence, and an introduction to robotics — built alongside a cohort with an emphasis on real collaboration and teamwork.",
    tags: ["Web Development", "AI Exploration", "Robotics", "Teamwork"],
  },
  {
    id: 2,
    hash: "7bd21aa",
    title: "Leadership & Communication",
    description:
      "Experience outside pure engineering that shapes how I work with people and communicate technical ideas clearly — from debate competitions to public speaking and team leadership.",
    tags: ["Debate", "Leadership", "Public Speaking"],
  },
];
