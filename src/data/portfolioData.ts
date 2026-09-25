export interface ProjectItem {
  id: string;
  title: string;
  category: "AI/ML" | "Web App" | "Game/Fun" | "Group & Systems";
  summary: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image: string;
  highlights: string[];
}

export interface InternshipItem {
  company: string;
  role: string;
  period: string;
  mode: string;
  badge?: string;
  description: string[];
  technologies: string[];
  certificateOrBadgeNote?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreLabel: string;
  status: "Completed" | "Ongoing (Sem 4)";
  location: string;
  details: string[];
  keySubjects: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeId?: string;
  category: "Leadership" | "Academic" | "AI & Cloud" | "Skill Certification";
  description: string;
  highlight: string;
  iconName: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Rudra Joshi",
    headline: "Future Computer Engineer | AI & Systems Innovator",
    shortBio:
      "Currently pursuing Diploma in Computer Engineering with an in-depth understanding of Operating Systems, Machine Learning architectures, and Game Development. Passionate about engineering high-performance software, intelligent vision pipelines, and scalable web solutions.",
    location: "Surendranagar, Gujarat, India",
    email: "joshirudra0509@gmail.com",
    github: "https://github.com/Rudra-Joshi0509",
    githubUsername: "Rudra-Joshi0509",
    linkedin: "https://www.linkedin.com/in/rudra-joshi0509",
    linkedinHandle: "rudra-joshi0509",
    resumeFileName: "myresume.docx",
    resumeUrl: "./myresume.docx",
    avatarPlaceholder: "./profile.jpg",
    stats: {
      cgpa: "9.46",
      cgpaContext: "Sem 4 Academic Merit",
      projectsCount: "20+",
      clientsCount: "5+",
      internshipsCount: "2",
      certificationsCount: "5+",
    },
  },

  skills: {
    programming: [
      { name: "C#", level: 90, note: "Game development, OOP, .NET scripting" },
      { name: "Java", level: 88, note: "Data structures, multithreading, robust backend" },
      { name: "Python", level: 92, note: "AI/ML, OpenCV, NumPy, automation pipelines" },
      { name: "C / C++", level: 85, note: "Low-level system logic, memory allocation" },
      { name: "TypeScript / JS", level: 88, note: "Modern web ecosystems, async architectures" },
    ],
    webstack: [
      { name: "HTML5", level: 95, note: "Semantic structure & accessibility" },
      { name: "CSS3 / Tailwind", level: 92, note: "Modern layouts, responsive design, animations" },
      { name: "JavaScript (ES6+)", level: 90, note: "Event-driven programming, DOM manipulation" },
      { name: "SQL", level: 88, note: "Relational queries, schema design & normalization" },
      { name: "MongoDB", level: 86, note: "NoSQL document collections, JSON schemas" },
      { name: "React.js", level: 87, note: "Component hierarchy, hooks, state lifecycle" },
    ],
    coreDomains: [
      {
        name: "Operating Systems",
        description: "Process synchronization, CPU scheduling algorithms, virtual memory paging, Linux command-line internals.",
      },
      {
        name: "Machine Learning & Vision",
        description: "Image processing, artistic filter algorithms, feature extraction, neural classifiers, Responsible AI workflows.",
      },
      {
        name: "Game Development",
        description: "2D/3D game mechanics, collision detection, sprite physics, state loops, sound integration in C#.",
      },
    ],
    softSkills: [
      { name: "Analytical Problem Solving", detail: "Deconstructing complex algorithms into modular, performant logic." },
      { name: "Agile & Team Collaboration", detail: "Thriving in group projects, milestone sprints, and cross-functional teams." },
      { name: "Algorithmic Thinking", detail: "Optimizing time & space complexity for data processing workloads." },
      { name: "Technical Communication", detail: "Presenting architectural solutions clearly to peers and clients." },
      { name: "Continuous Learning", detail: "Quickly adopting new frameworks, APIs, and AI paradigms." },
      { name: "Creative System Design", detail: "Harmonizing aesthetic user interfaces with solid engineering foundations." },
    ],
  },

  education: [
    {
      institution: "C. U. Shah Govt Polytechnic, Surendranagar",
      degree: "Diploma in Computer Engineering",
      period: "2023 — Present",
      score: "9.46 CGPA",
      scoreLabel: "Cumulative Sem 4 CGPA",
      status: "Ongoing (Sem 4)" as const,
      location: "Surendranagar, Gujarat",
      details: [
        "Consistent top-tier academic performer, securing Multiple 1st Ranks in Semester 4 examinations.",
        "Ranked among the Top 3 students across multiple consecutive semester evaluations.",
        "Deep exploration into Operating Systems, Object-Oriented Programming, and Data Structures.",
        "Led multiple collaborative development initiatives and academic technical workshops.",
      ],
      keySubjects: [
        "Operating Systems",
        "Data Structures & Algorithms",
        "Database Management (SQL)",
        "Object Oriented Programming (Java/C#)",
        "Computer Networks",
        "Software Engineering Practices",
      ],
    },
    {
      institution: "Dayamayi Mata High School",
      degree: "Secondary School Certificate (SSC)",
      period: "2021 — 2022",
      score: "81.09%",
      scoreLabel: "Board Percentage",
      status: "Completed" as const,
      location: "Surendranagar, Gujarat",
      details: [
        "Graduated with distinction with an aggregate of 81.09%.",
        "Demonstrated strong aptitude in Mathematics, Physics, and Foundational Computing.",
        "Participated actively in science exhibitions, quiz competitions, and leadership activities.",
      ],
      keySubjects: ["Mathematics", "Science & Technology", "Social Sciences", "English Language"],
    },
  ],

  projects: [
    {
      id: "ai-image-art-generator",
      title: "AI Image Art Generator",
      category: "AI/ML",
      summary: "Transforms everyday photographs into dramatic artistic paintings, pencil sketches, noir B&W, and edge maps.",
      description:
        "A full-featured web-based computer vision application that applies advanced image processing algorithms to convert standard user photos into stunning stylized artworks. Offers multiple rendering filters including Charcoal Sketch, Cartoon Cel-Shading, Dramatic High-Contrast Noir, and Edge Contour Mapping with instant download options.",
      tags: ["Python", "OpenCV", "JavaScript", "Image Processing", "CSS3"],
      githubUrl: "https://github.com/Rudra-Joshi0509/ai-image-art-generator",
      featured: true,
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Real-time stylized rendering (Sketch, Cartoon, Noir, Edge Detection)",
        "Granular color adjustment and contrast mapping",
        "Client-side image preview and high-resolution export",
      ],
    },
    {
      id: "ai-photo-enhancer",
      title: "AI Photo Enhancer",
      category: "AI/ML",
      summary: "Intelligent image enhancement platform with soft, normal, strong, night, detail, and warm tone modes.",
      description:
        "A comprehensive AI-assisted photo enhancement system engineered to restore low-light captures, sharpen blurred textures, and optimize dynamic range. Features 6 specialized tuning modes: Soft Glow, Natural Balance, High Contrast Strong, Night Mode Luminance Boost, High Detail Texture Recovery, and Warm Sunset Tone.",
      tags: ["Python", "AI Vision", "HTML5", "CSS3", "JavaScript", "Web API"],
      githubUrl: "https://github.com/Rudra-Joshi0509/ai-photo-enhancer",
      featured: true,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "6 distinct intelligent enhancement presets tailored for diverse lighting conditions",
        "Interactive before/after comparative inspection view",
        "Optimized algorithmic processing for instant browser feedback",
      ],
    },
    {
      id: "valorant-roast",
      title: "Valorant Roast Machine",
      category: "Game/Fun",
      summary: "Hilarious tactical roast generator evaluating players based on their Valorant rank, ACS, and gameplay habits.",
      description:
        "A viral web app tailored for the competitive gaming community. Users input their current Valorant rank (from Iron hardstuck to Radiant) along with their performance metrics, triggering witty, sharp, and context-aware roasts generated via dynamic algorithmic evaluation. Includes match scenario banter and custom agent callouts.",
      tags: ["JavaScript", "Game Culture", "Tailwind CSS", "React", "Dynamic Roasts"],
      githubUrl: "https://github.com/Rudra-Joshi0509/valorant-roast",
      featured: true,
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Custom roast engine tailored for all Valorant tiers from Iron to Radiant",
        "Shareable roast scorecards for discord and social feeds",
        "Responsive, punchy esports gaming interface with glowing neon visual cues",
      ],
    },
    {
      id: "plant-care-ai-app",
      title: "Plant Care AI App",
      category: "AI/ML",
      summary: "AI-driven agricultural diagnostic tool predicting crop foliage diseases with early precaution advisories.",
      description:
        "An intelligent diagnostic utility designed for farmers and plant enthusiasts. By analyzing leaf photos or input symptoms, the application predicts probable botanical diseases, suggests immediate organic precautions, and outlines preventive spraying schedules to safeguard crop yields from pest outbreaks and nutrient deficiencies.",
      tags: ["Python", "Machine Learning", "Agricultural Tech", "Image Classifier", "HTML/JS"],
      featured: true,
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Pathology detection for common crop diseases (mildew, blight, rust)",
        "Early warning precaution checklist to prevent fungal contamination",
        "Accessible, lightweight interface designed for rural and field use",
      ],
    },
    {
      id: "study-tracker-system",
      title: "Study Tracker System (Group Project)",
      category: "Group & Systems",
      summary: "Collaborative study organizer that structures daily revision schedules, syllabus tracking, and focus intervals.",
      description:
        "Engineered as a core collaborative group project to streamline academic scheduling for engineering students. The system features a centralized timetable builder, pomodoro focus session logger, syllabus completion analytics, and deadline notifications to ensure teams stay accountable throughout semester exams.",
      tags: ["JavaScript", "SQL", "MongoDB", "Group Project", "Fullstack", "CSS3"],
      featured: true,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Dynamic study timetable planner with time-blocking",
        "Syllabus coverage progress bars and exam deadline countdowns",
        "Group collaboration module for shared project milestones",
      ],
    },
    {
      id: "freelance-client-ecosystem",
      title: "20+ Real Projects & 5+ Client Deliverables",
      category: "Web App",
      summary: "Commercial freelance contracts and diverse software experiments delivered to real business clients.",
      description:
        "Over the past three years, Rudra has engineered 20+ production-ready software repositories and delivered bespoke solutions for 5+ real clients. Spans custom responsive landing pages, automated data scrapers, SQL database migrations, and C# desktop utilities tailored to exact client specifications.",
      tags: ["Freelance", "Client Work", "Fullstack", "C#", "Python", "SQL"],
      featured: false,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "100% on-time milestone delivery across 5+ satisfied client projects",
        "Clean, documented codebases adhering to agile principles",
        "Wide breadth of applications: e-commerce utilities, inventory systems & portfolio sites",
      ],
    },
  ],

  internships: [
    {
      company: "BharatCares",
      role: "AI Engineer Intern",
      period: "March 2026 — April 2026",
      mode: "Industry Internship",
      badge: "Computer Vision & ML",
      description: [
        "Developed and fine-tuned machine learning models and image preprocessing pipelines for community-focused AI applications.",
        "Researched and integrated computer vision algorithms to automate data collection and analysis with high accuracy.",
        "Optimized model inference latency and packaged Python scripts into clean, reusable modules for cross-functional deployment.",
        "Collaborated with senior technical mentors to enforce best practices in dataset validation and model fairness.",
      ],
      technologies: ["Python", "Computer Vision", "Machine Learning", "OpenCV", "Data Preprocessing", "Git"],
    },
    {
      company: "Microsoft",
      role: "AI & Cloud Intern (Online)",
      period: "May 2026",
      mode: "Skill Based Training Program (SBTP 2026)",
      badge: "Enterprise AI & Cloud",
      certificateOrBadgeNote: "Earned official 'Implement a Responsible Generative AI Solution in Microsoft' Badge",
      description: [
        "Selected for the competitive Microsoft Skill Based Training Program (SBTP 2026), focusing on state-of-the-art Generative AI systems.",
        "Implemented end-to-end Responsible Generative AI architectures adhering to Microsoft fairness, transparency, and safety tenets.",
        "Engineered intelligent prompt templates, content moderation guardrails, and evaluation matrices for generative responses.",
        "Gained hands-on proficiency in Azure Cognitive Services, cloud resource provisioning, and scalable AI infrastructure.",
      ],
      technologies: [
        "Generative AI",
        "Microsoft Azure",
        "Responsible AI Guidelines",
        "Prompt Engineering",
        "Cognitive Services",
        "Python",
      ],
    },
  ],

  achievements: [
    {
      id: "google-ambassador",
      title: "Google Student Ambassador 2026",
      issuer: "Google",
      year: "2026",
      badgeId: "GID: 7908",
      category: "Leadership" as const,
      description: "Appointed as Google Student Ambassador (GID: 7908), spearheading developer community engagements, tech workshops, and Google developer technology adoption.",
      highlight: "GID: 7908",
      iconName: "Globe",
    },
    {
      id: "microsoft-badge",
      title: "Implement a Responsible Generative AI Solution",
      issuer: "Microsoft",
      year: "2026",
      category: "AI & Cloud" as const,
      description: "Official Microsoft verification proving technical competency in architecting responsible, bias-mitigated, and secure generative AI deployments.",
      highlight: "Verified Credential",
      iconName: "ShieldCheck",
    },
    {
      id: "iste-member",
      title: "Student Member of ISTE",
      issuer: "Indian Society for Technical Education",
      year: "2025",
      category: "Academic" as const,
      description: "Recognized as a dedicated Student Member of the prestigious Indian Society for Technical Education (ISTE), advancing technical literacy and engineering innovation.",
      highlight: "National Technical Society",
      iconName: "Award",
    },
    {
      id: "academic-merit-polytechnic",
      title: "1st Rank in Sem 4 & Top 3 Honors",
      issuer: "C. U. Shah Govt Polytechnic",
      year: "2024 — 2025",
      category: "Academic" as const,
      description: "Secured Multiple 1st Ranks in Semester 4 and featured in the Top 3 ranks twice in Diploma Computer Engineering with an extraordinary 9.46 CGPA.",
      highlight: "9.46 CGPA & Rank #1",
      iconName: "Trophy",
    },
    {
      id: "simplilearn-growth-hacking",
      title: "Growth Hacking Certification",
      issuer: "SimpliLearn",
      year: "2025",
      category: "Skill Certification" as const,
      description: "Mastered data-driven product growth strategies, conversion funnels, viral loops, and digital analytics to scale software user adoption.",
      highlight: "Certified Growth Hacker",
      iconName: "TrendingUp",
    },
  ],
};
