export const personalInfo = {
  name: "Vaibhav Zalavadiya",
  title: "Front-End Developer | Quick Learner | Problem Solver",
  description: "Creative and results-driven web developer with a strong command of front-end technologies including React, JavaScript, Bootstrap, and Tailwind CSS. I build responsive, high-performance user interfaces for modern web applications, focused on clean design and seamless user experiences. Passionate about turning ideas into polished digital products through real-world project experience.",
  experience: "1+",
  projects: "15+",
  contact: {
    email: "vaibhavzalavadiya2@gmail.com",
    phone: "+91 6355981951",
    location: "Surat, Gujarat, India"
  },
  social: {
    linkedin: "https://www.linkedin.com/in/vaibhav-zalavadiya-0000000000/",
    github: "https://github.com/vaibhavzalavadiya",
    twitter: "https://x.com/vaibhavzalavadiya",
    instagram: "https://www.instagram.com/vaibhavzalavadiya/"
  }
};

export const skills = [
  {
    name: "HTML",
    level: 95,
    icon: "fab fa-html5",
    color: "from-orange-500 to-red-500",
    category: "Expert",
    description: "Semantic markup and accessibility"
  },
  {
    name: "CSS",
    level: 92,
    icon: "fab fa-css3-alt", 
    color: "from-blue-500 to-indigo-600",
    category: "Expert",
    description: "Modern layouts and animations"
  },
  {
    name: "JavaScript",
    level: 88,
    icon: "fab fa-js-square",
    color: "from-yellow-400 to-amber-500",
    category: "Advanced",
    description: "ES6+ and DOM manipulation"
  },
  {
    name: "Bootstrap",
    level: 90,
    icon: "fab fa-bootstrap",
    color: "from-purple-500 to-violet-600",
    category: "Expert",
    description: "Responsive grid systems"
  },
  {
    name: "Tailwind",
    level: 87,
    icon: "fas fa-wind",
    color: "from-cyan-400 to-teal-500",
    category: "Advanced",
    description: "Utility-first CSS framework"
  },
  {
    name: "React",
    level: 85,
    icon: "fab fa-react",
    color: "from-sky-400 to-blue-500",
    category: "Advanced",
    description: "Components and state management"
  },
  {
    name: "jQuery",
    level: 83,
    icon: "fab fa-js",
    color: "from-blue-600 to-indigo-700",
    category: "Advanced",
    description: "DOM manipulation and AJAX"
  },
  {
    name: "Figma",
    level: 75,
    icon: "fab fa-figma",
    color: "from-pink-500 to-rose-500",
    category: "Intermediate",
    description: "UI/UX design and prototyping"
  },
  {
    name: "Python",
    level: 70,
    icon: "fab fa-python",
    color: "from-green-500 to-emerald-600",
    category: "Intermediate",
    description: "Backend development with Django/Flask"
  },
  {
    name: "Django",
    level: 75,
    icon: "fas fa-server",
    color: "from-green-600 to-teal-600",
    category: "Advanced",
    description: "Web framework for rapid development"
  }
];

export const tools = [
  { name: "Git", icon: "fab fa-git-alt", color: "text-orange-500" },
  { name: "GitHub", icon: "fab fa-github", color: "text-gray-800" },
  { name: "VS Code", icon: "fas fa-code", color: "text-blue-500" },
  { name: "Figma", icon: "fab fa-figma", color: "text-purple-500" }
];

export const projects = [
  {
    id: 1,
    title: "Forex Backtest Platform",
    description: "An AI-powered Forex strategy backtesting platform built with Django (backend) and React with Bootstrap (frontend). It features symbol/timeframe selection, dynamic trade visualization, and real-time strategy simulation using historical data.",
    technologies: ["React", "Django", "AI"],
    icon: "fas fa-chart-line",
    color: "from-blue-600 to-indigo-700",
    liveDemo: "https://forex-trading-mocha.vercel.app/",
    github: "#",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
  },
  {
    id: 2,
    title: "AI Background Remover",
    description: "A fast and user-friendly AI background remover web app built using Flask and React. Instantly upload an image, remove the background with one click, and download a clean cutout—ideal for product photos, designers, and online sellers.",
    technologies: ["Flask", "React", "AI"],
    icon: "fas fa-scissors",
    color: "from-emerald-500 to-teal-600",
    liveDemo: "https://apexremovecom.vercel.app/",
    github: "#",
    image: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
  },
  {
    id: 3,
    title: "Jewelry Store – Online Shop",
    description: "A fully responsive online jewelry store built without frameworks using pure HTML, CSS, JavaScript, and jQuery. Features include interactive product galleries, smooth animations, and a clean, elegant user interface for browsing and shopping.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: "fas fa-gem",
    color: "from-amber-500 to-orange-600",
    liveDemo: "https://jewelry-storesite.netlify.app/",
    github: "#",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
  },
  {
    id: 4,
    title: "Edusity – College & University",
    description: "A sleek and responsive university website built using React. Edusity showcases courses, faculty, events, and admissions info—perfect for modern educational institutions looking to build a strong online presence.",
    technologies: ["React", "Education"],
    icon: "fas fa-graduation-cap",
    color: "from-violet-500 to-purple-600",
    liveDemo: "https://edusity-react-web-gamma.vercel.app/",
    github: "#",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
  },
  {
    id: 5,
    title: "CSS2RTL – RTL CSS Converter Tool",
    description: "A smart and developer-friendly RTL CSS converter built with React. CSS2RTL lets users quickly transform LTR styles into clean, direction-aware RTL code—ideal for multilingual web projects and internationalization workflows.",
    technologies: ["React", "Tool", "CSS", "RTL"],
    icon: "fas fa-code",
    color: "from-cyan-500 to-sky-600",
    liveDemo: "https://css2rtl-vaibhavs-projects-b8c97238.vercel.app/",
    github: "#",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
  },
  {
    id: 6,
    title: "Boss Coolant – Brand Website",
    description: "A modern and responsive business website built with React to showcase Boss Coolant’s products and industrial solutions. Designed for brand impact, the site features a sleek UI, smooth navigation, and mobile-friendly design to ensure a strong digital presence.",
    technologies: ["React", "Tailwind CSS", "Brand Website"],
    icon: "fas fa-industry",
    color: "from-yellow-500 to-red-600",
    liveDemo: "https://boss-coolant.vercel.app/",
    github: "#",
    image: "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  
  
];

export const strengths = [
  { name: "Leadership", icon: "fas fa-crown" },
  { name: "Communication", icon: "fas fa-comments" },
  { name: "Adaptability", icon: "fas fa-sync-alt" },
  { name: "Teamwork", icon: "fas fa-users" },
  { name: "Time Management", icon: "fas fa-clock" }
];
