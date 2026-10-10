import React, { useState } from "react";
import {
  Gamepad2,
  Sparkles,
  Mail,
  ChevronRight,
  Layers,
  Trophy,
  Folder,
  X,
  Palette,
  Terminal,
  Cpu,
  BarChart2,
  FileText,
  Copy,
  Check,
  Download,
  Calendar,
  Award,
  ChevronDown,
  Code,
  Ticket
} from "lucide-react";
import Hero3DCanvas from "./components/Hero3DCanvas";

// SVG Brand Icons not in lucide-react
const Figma = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
    <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
    <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" />
    <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" />
    <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" />
  </svg>
);

const Github = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Resume Data
  const personalInfo = {
    name: "Asif Abdulla P A",
    title: "Computer Science Engineer | Software Developer & 2D Game Dev",
    email: "asifabdulla1234@gmail.com",
    linkedin: "https://www.linkedin.com/in/asif-abdulla-0b996531a",
    github: "https://github.com/asifabdu10",
    objective:
      "Computer Science student with strong foundations in software engineering, 2D game development in Unity, C# programming, and UI/UX design. Experienced in developing responsive 2D physics controllers, tilemap systems, database tooling, and interactive digital interfaces. Driven by core CS principles, problem-solving, and building robust interactive applications."
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const skills = [
    {
      category: "2D Game Dev & Engineering",
      icon: <Gamepad2 className="w-5 h-5 text-indigo-400" />,
      items: [
        { name: "Unity Engine (2D)", level: "Advanced", pct: 90 },
        { name: "C# Game Scripting", level: "Advanced", pct: 88 },
        { name: "Custom 2D Physics Controllers", level: "Intermediate", pct: 82 },
        { name: "Tilemaps & Grid Navigation", level: "Advanced", pct: 85 },
        { name: "Pathfinding & Sprite Animations", level: "Intermediate", pct: 80 },
        { name: "In-Editor Tooling & Telemetry", level: "Intermediate", pct: 75 }
      ]
    },
    {
      category: "UI/UX & Visual Design",
      icon: <Palette className="w-5 h-5 text-pink-400" />,
      items: [
        { name: "Figma (UI/UX & Prototyping)", level: "Advanced", pct: 90 },
        { name: "Canva", level: "Intermediate", pct: 85 },
        { name: "Game HUD & Menu Design", level: "Advanced", pct: 88 },
        { name: "Interactive Component Systems", level: "Intermediate", pct: 82 }
      ]
    },
    {
      category: "Core CS, Tools & Systems",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      items: [
        { name: "Languages: C#, Python, C, Java", level: "Intermediate", pct: 82 },
        { name: "React, Web Apps & Payment APIs (Razorpay)", level: "Advanced", pct: 88 },
        { name: "Data Structures & Algorithms", level: "Intermediate", pct: 78 },
        { name: "SQL / PostgreSQL / Firebase", level: "Intermediate", pct: 76 },
        { name: "Git & GitHub", level: "Intermediate", pct: 84 }
      ]
    }
  ];

  const projects = [
    {
      id: "sparkz-26",
      title: "SPARKZ '26 — Official Tech Fest Platform",
      category: "software",
      subtitle: "Event Platform, Digital Ticketing & Razorpay Gateway",
      description:
        "Engineered the official tech fest web platform for Carmel College of Engineering and Technology. Built dynamic event showcase pages, self-service registration workflows, an automated digital ticket generator, and integrated the Razorpay Payment Gateway for secure online payments and fee processing.",
      tags: ["React", "JavaScript", "Tailwind CSS", "Razorpay API", "Payment Gateway", "Ticket Generator", "State Management"],
      featured: true,
      icon: <Ticket className="w-6 h-6 text-amber-400" />,
      metrics: "Live College Tech Fest Platform",
      highlights: [
        "End-to-end Razorpay Payment Gateway integration with verification for online ticket purchases & fee processing",
        "Automated digital ticket generator producing branded event passes with dynamic receipt verification",
        "Comprehensive participant registration workflows supporting single and team event enrollments",
        "Modern, responsive React & Tailwind CSS web architecture built for high concurrent traffic",
        "Robust client state management tracking event selections, checkout flows, and payment confirmations"
      ]
    },
    {
      id: "game-2d",
      title: "2D Game Development & Gameplay Mechanics",
      category: "game",
      subtitle: "Grid Navigation, Platformer Mechanics & Tilemaps",
      description:
        "Engineered custom 2D grid navigation and platformer mechanics in Unity featuring responsive character controllers, tilemap integration, sprite sheet animations, and custom pathfinding logic.",
      tags: ["Unity 2D", "C#", "Tilemaps", "2D Physics", "Pathfinding"],
      featured: true,
      icon: <Gamepad2 className="w-6 h-6 text-indigo-400" />,
      metrics: "Custom 2D Controller & Grid Logic",
      highlights: [
        "Frame-independent acceleration, friction, and responsive jump physics",
        "Tilemap dynamic collision layers and rule tile auto-tiling",
        "A* pathfinding adaptation for enemy patrolling on 2D grids",
        "Sprite sheet animation state transitions in Unity Animator"
      ]
    },
    {
      id: "game-analytics",
      title: "Unity In-Editor Analytics & Telemetry Tooling",
      category: "software",
      subtitle: "Level Difficulty & Player Movement Pipelines (In-Progress)",
      description:
        "Developing an in-editor tool extension using C# and SQL/PostgreSQL for game telemetry, enabling natural language to database query pipelines to analyze level difficulty and player movement patterns.",
      tags: ["Unity Editor Tooling", "C#", "SQL", "PostgreSQL", "Telemetry", "Software Engineering"],
      featured: true,
      icon: <BarChart2 className="w-6 h-6 text-cyan-400" />,
      metrics: "In-Progress Game Analytics Extension",
      highlights: [
        "Custom Unity EditorWindow with real-time scene heatmaps",
        "Telemetry ingestion pipeline for death locations and attempt frequencies",
        "Database abstraction layer querying local SQLite and remote PostgreSQL",
        "C# scripting with focus on modular architecture and performance"
      ]
    },
    {
      id: "figma-uidesign",
      title: "UI/UX Design Systems & Wireframe Prototypes",
      category: "design",
      subtitle: "Wireframes, User Flows & Interface Mockups",
      description:
        "User experience design concepts, wireframes, and interface layouts created in Figma. Explores visual hierarchy, layout spacing, interactive component flows, and usability principles.",
      figmaFocus:
        "Interface wireframes, component auto-layouts, and clickable prototype flows designed in Figma.",
      tags: ["Figma", "UI/UX Design", "Wireframing", "Canva", "Prototyping"],
      featured: true,
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      metrics: "Figma UI/UX Prototypes",
      highlights: [
        "Wireframes and layout mockups exploring intuitive spatial organization",
        "Component variations and clickable interactive user flows",
        "Color palette harmony and clean typography hierarchy",
        "Practical design exploration for web and interactive applications"
      ]
    },
    {
      id: "loan-prediction",
      title: "AI Loan Eligibility Prediction System",
      category: "software",
      subtitle: "Full-Stack Risk Calculation App",
      description:
        "A full-stack loan approval prediction web application featuring dynamic risk assessment and real-time EMI calculators built over 307k+ financial records.",
      tags: ["React", "Python", "Tailwind CSS", "LightGBM", "Data Science"],
      featured: false,
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      metrics: "0.9746 ROC-AUC Model Score",
      highlights: [
        "Interactive borrower financial dashboard with responsive charts",
        "Python backend leveraging trained LightGBM gradient boosted trees",
        "Clean, responsive front-end user experience in React"
      ]
    }
  ];

  const experience = [
    {
      role: "Arts Club Secretary",
      organization: "Carmel College of Engineering and Technology",
      period: "2026 - 2027",
      type: "Leadership",
      details: "Leading college-wide cultural, artistic, and creative initiatives, directing design branding, and orchestrating mega campus events."
    },
    {
      role: "Secretary",
      organization: "Obcydians (Computer Science Association)",
      period: "2026 - 2027",
      type: "Technical Leadership",
      details: "Organizing department technical symposia, coding hackathons, guest tech lectures, and student software initiatives."
    },
    {
      role: "Game Development Workshop Coordinator",
      organization: "IEEE Computer Society",
      period: "Jan 2026",
      type: "Workshop",
      details: "Coordinated hands-on student workshops introducing 2D game loops, Unity game objects, physics, and gameplay scripting."
    },
    {
      role: "TEDxCCET Team Lead",
      organization: "TEDx Events",
      period: "Recent",
      type: "Event Management",
      details: "Coordinated technical setups, audiovisual synchronization, guest speaker hospitality, and high-stakes stage logistics."
    },
    {
      role: "NSS Volunteer & NRPF Coordinator",
      organization: "NSS Unit 625",
      period: "2025 - 2026",
      type: "Community",
      details: "Leading college initiatives, environmental resource protection campaigns, and social outreach drives."
    }
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">

      {/* =========================================================================
          ATMOSPHERIC SPOTLIGHT EFFECT (Directly inspired by the 3D showcase video)
          ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Overhead SpotLight Cone Beam */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] lg:w-[1200px] h-[750px] opacity-40 mix-blend-screen"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(129, 140, 248, 0.45) 0%, rgba(168, 85, 247, 0.18) 45%, transparent 80%)",
            clipPath: "polygon(38% 0%, 62% 0%, 95% 100%, 5% 100%)",
          }}
        />

        {/* Ambient Top Glow Orbs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/20 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 right-[-100px] w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-2/3 left-[-100px] w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full" />

        {/* Fine Star / Dust particle overlay */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* =========================================================================
          STICKY LEFT VERTICAL SOCIAL DOCK (Modern developer portfolio staple)
          ========================================================================= */}
      <aside className="fixed left-4 lg:left-6 bottom-12 z-30 hidden md:flex flex-col items-center space-y-4">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          title="GitHub Profile"
          className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/30 border border-slate-800 hover:border-indigo-500/50 text-slate-400 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          title="LinkedIn Profile"
          className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/30 border border-slate-800 hover:border-indigo-500/50 text-slate-400 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <button
          onClick={copyEmailToClipboard}
          title="Copy Email"
          className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/30 border border-slate-800 hover:border-indigo-500/50 text-slate-400 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg relative"
        >
          {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
          target="_blank"
          rel="noreferrer"
          title="Compose Email on Gmail"
          className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/30 border border-slate-800 hover:border-indigo-500/50 text-slate-400 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
        >
          <Mail className="w-4 h-4" />
        </a>
        {/* Vertical divider stem */}
        <div className="w-[1.5px] h-16 bg-gradient-to-b from-slate-700 to-transparent" />
      </aside>

      {/* =========================================================================
          TOP NAVIGATION BAR (Clean, glassy & cybernetic)
          ========================================================================= */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#07090e]/75 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">

          {/* Logo / Brand Name */}
          <a href="#about" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-black tracking-widest text-slate-200 uppercase font-mono">
                ASIF ABDULLA
              </div>
              <div className="text-[10px] font-mono text-indigo-400 tracking-wider">
                CS ENGINEER & DEVELOPER
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-wider uppercase text-slate-400">
            <a href="#about" className="hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">
              Skills
            </a>
            <a href="#work" className="hover:text-indigo-400 transition-colors">
              Work
            </a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Resume Modal Trigger Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowResumeModal(true)}
              className="px-4 py-2 rounded-lg bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/40 hover:border-indigo-400 text-indigo-300 hover:text-white text-xs font-mono font-medium tracking-wide transition-all shadow-md flex items-center space-x-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME ↗</span>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          MAIN CONTENT CONTAINER
          ========================================================================= */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 space-y-28">

        {/* =======================================================================
            HERO SECTION (3D Avatar + Spotlight + High-Impact Typography)
            ======================================================================= */}
        <section id="about" className="pt-6 lg:pt-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Interactive 3D Avatar Scene (Exactly like the YouTube Short) */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-[480px] relative">
                {/* Frame border highlight */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent blur-md"></div>
                <div className="relative rounded-2xl bg-slate-950/70 border border-slate-800/90 p-2 overflow-hidden shadow-2xl backdrop-blur-sm">
                  {/* Window Controls Decorator */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 text-[11px] font-mono text-slate-400">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></div>
                    </div>

                  </div>
                  {/* Three.js 3D Canvas */}
                  <Hero3DCanvas />
                </div>
              </div>
            </div>

            {/* Right Column: Hero Typography & Professional Bio */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">

              {/* Status Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>OPEN FOR SOFTWARE & GAME DEVELOPMENT ROLES</span>
              </div>

              {/* Balanced Headline */}
              <div className="space-y-1">
                <p className="text-base sm:text-lg font-mono text-indigo-400 font-semibold tracking-wider uppercase">
                  Software Developer & CS Engineer
                </p>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] uppercase">
                  <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                    SOFTWARE
                  </span>{" "}
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    DEVELOPER
                  </span>
                  <br />
                  <span className="text-2xl sm:text-4xl text-slate-300 font-extrabold tracking-normal">
                    & 2D GAME ENGINEER
                  </span>
                </h1>
              </div>

              {/* Tagline / Specialties Pills */}
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span className="px-2.5 py-1 rounded-md bg-amber-950/60 border border-amber-800/60 text-amber-300">
                  Web Platforms & Razorpay API
                </span>
                <span className="px-2.5 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/60 text-indigo-300">
                  CS & Software Engineering
                </span>
                <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-800/60 text-purple-300">
                  Unity 2D & C# Mechanics
                </span>
                <span className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-300">
                  Custom 2D Physics
                </span>
                <span className="px-2.5 py-1 rounded-md bg-pink-950/60 border border-pink-800/60 text-pink-300">
                  UI/UX Wireframing (Figma)
                </span>
              </div>

              {/* Career Objective Text Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 text-slate-300 text-sm sm:text-base leading-relaxed backdrop-blur-md relative">
                <div className="text-xs font-mono text-slate-500 mb-1 flex items-center space-x-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>profile_overview.cs</span>
                </div>
                <p className="text-slate-300">
                  {personalInfo.objective}
                </p>
              </div>

              {/* Quick Info Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                  target="_blank"
                  rel="noreferrer"
                  title="Open Gmail to compose email"
                  className="flex items-center space-x-2 bg-slate-900/70 hover:bg-slate-800 p-2.5 rounded-lg border border-slate-800/80 hover:border-indigo-500/50 transition-colors group cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-pink-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="truncate">{personalInfo.email}</span>
                  <span className="text-[10px] text-indigo-400 font-mono ml-auto">Compose ↗</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  title="Open GitHub Profile"
                  className="flex items-center space-x-2 bg-slate-900/70 hover:bg-slate-800 p-2.5 rounded-lg border border-slate-800/80 hover:border-indigo-500/50 transition-colors group cursor-pointer"
                >
                  <Github className="w-4 h-4 text-indigo-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="truncate">github.com/asifabdu10</span>
                  <span className="text-[10px] text-indigo-400 font-mono ml-auto">View ↗</span>
                </a>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#work"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/25 flex items-center space-x-2 transform hover:-translate-y-0.5"
                >
                  <Gamepad2 className="w-4 h-4" />
                  <span>Explore Work</span>
                  <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-sm transition-all flex items-center space-x-2 hover:border-slate-500"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-sm transition-all flex items-center space-x-2 hover:border-slate-500"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="#contact"
                  className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-sm transition-all flex items-center space-x-2 hover:border-slate-500"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================================
            SKILLS SECTION (Categorized with interactive level meters)
            ======================================================================= */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-5 gap-4">
            <div>
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-1">
                // System Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight flex items-center space-x-3">
                <Layers className="w-7 h-7 text-indigo-400" />
                <span>Technical Skills & Tooling</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Primary capabilities centered around 2D Game Development in Unity, C# mechanics engineering, and Figma UI/UX prototyping.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-900/50 border border-slate-800/80 rounded-2xl hover:border-indigo-500/40 transition-all backdrop-blur-sm group space-y-5"
              >
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform">
                    {skillGroup.icon}
                  </div>
                  <h3 className="font-bold text-slate-200 text-base">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {skillGroup.items.map((item, iIdx) => (
                    <div key={iIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-slate-300">{item.name}</span>
                        <span className="font-mono text-indigo-400 text-[11px] px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                          {item.level}
                        </span>
                      </div>
                      {/* Skill progress bar */}
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================================================
            WORK / PROJECTS SHOWCASE SECTION (Cards with deep-dive modal)
            ======================================================================= */}
        <section id="work" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-800 pb-5 gap-4">
            <div>
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-1">
                // Selected Works
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight flex items-center space-x-3">
                <Folder className="w-7 h-7 text-indigo-400" />
                <span>Featured Projects & Systems</span>
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap bg-slate-900 border border-slate-800 p-1 rounded-xl self-start gap-1">
              {[
                { id: "all", label: "All Works" },
                { id: "game", label: "Game Dev (Unity)" },
                { id: "software", label: "Software & Web" },
                { id: "design", label: "UI/UX (Figma)" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${activeTab === tab.id
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all flex flex-col group"
              >
                {/* Project Header */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl group-hover:scale-105 transition-transform">
                        {project.icon}
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                        {project.metrics}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-indigo-400 font-mono mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Figma Highlight Box if present */}
                    {project.figmaFocus && (
                      <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-xs space-y-1">
                        <div className="font-semibold text-pink-400 flex items-center space-x-1.5">
                          <Figma className="w-3.5 h-3.5" />
                          <span>Figma & UI Integration:</span>
                        </div>
                        <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-2">
                          {project.figmaFocus}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="pt-3 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white text-xs font-medium transition-all flex items-center justify-center space-x-1.5"
                    >
                      <span>Deep Dive Architecture</span>
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================================================
            EXPERIENCE & MILESTONES SECTION (Interactive Timeline)
            ======================================================================= */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="border-b border-slate-800 pb-5">
            <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-1">
              // Timeline & Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight flex items-center space-x-3">
              <Trophy className="w-7 h-7 text-indigo-400" />
              <span>Career Milestones & Experience</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Leadership roles, game development workshops, and institutional associations.
            </p>
          </div>

          <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
            {experience.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 group-hover:bg-indigo-500 group-hover:scale-125 transition-all shadow-md shadow-indigo-500/50" />

                <div className="p-5 sm:p-6 bg-slate-900/50 border border-slate-800 rounded-2xl group-hover:border-indigo-500/40 transition-all backdrop-blur-sm space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-1.5 inline-block">
                        {item.type}
                      </span>
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-800 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================================================
            CONTACT SECTION
            ======================================================================= */}
        <section id="contact" className="space-y-8 scroll-mt-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 relative overflow-hidden">
            {/* Ambient accent inside card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>LET'S CONNECT</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                Interested in building immersive games together?
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you have an opening for a 2D Game Developer, Gameplay Engineer, or UI/UX Designer—or just want to chat about game mechanics—feel free to reach out.
              </p>

              {/* Contact methods grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 flex items-center justify-between transition-all group cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono text-indigo-400 uppercase flex items-center space-x-1">
                      <span>Gmail • Compose Direct</span>
                      <span className="text-xs">↗</span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 truncate">{personalInfo.email}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-600/20 group-hover:bg-indigo-600 text-indigo-300 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                </a>

                <div
                  onClick={copyEmailToClipboard}
                  className="p-4 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 flex items-center justify-between transition-all cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono text-slate-500 uppercase">
                      {copiedEmail ? "Status" : "One-Click Copy"}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200">
                      {copiedEmail ? "✓ Copied to clipboard!" : "Copy email address"}
                    </div>
                  </div>
                  <button
                    className="p-2.5 rounded-lg bg-slate-900 hover:bg-indigo-600 text-slate-300 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/25 flex items-center space-x-2 transform hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Gmail (Compose)</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-5 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-semibold text-sm transition-all flex items-center space-x-2"
                >
                  <span>Default Mail Client</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center space-x-2 hover:border-blue-500/50"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <footer className="border-t border-slate-800/80 bg-[#05070a] py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-slate-400">© 2025 Asif Abdulla P A.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center space-x-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>asifabdu10</span>
            </a>
            <span>•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center space-x-1"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <span>•</span>
            <p>Software & 2D Game Development Portfolio</p>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          PROJECT DETAIL MODAL (Deep Dive View)
          ========================================================================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl overflow-y-auto max-h-[90vh]">

            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-indigo-400 font-mono">
                    {selectedProject.subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-slate-950 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Architecture Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                System Overview
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                {selectedProject.description}
              </p>
            </div>

            {/* Figma Focus Note */}
            {selectedProject.figmaFocus && (
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <h4 className="font-semibold text-pink-400 text-xs flex items-center space-x-1.5">
                  <Figma className="w-4 h-4" />
                  <span>Figma & UI Integration</span>
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {selectedProject.figmaFocus}
                </p>
              </div>
            )}

            {/* Technical Highlights */}
            {selectedProject.highlights && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Technical Architecture
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedProject.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-2">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Tags */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-950 text-indigo-300 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-xl transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          INTERACTIVE FULL RESUME MODAL
          ========================================================================= */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl overflow-y-auto max-h-[92vh]">

            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-indigo-400">
                  {personalInfo.title}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => window.print()}
                  className="p-2 rounded-xl bg-slate-950 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                  title="Print / Save PDF"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 rounded-xl bg-slate-950 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Contact details row */}
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 pb-2 border-b border-slate-800/60 items-center">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition-colors flex items-center space-x-1"
              >
                <span>✉️</span>
                <span>{personalInfo.email}</span>
                <span className="text-[10px] text-indigo-400">(Compose on Gmail)</span>
              </a>
              <span>•</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition-colors flex items-center space-x-1"
              >
                <span>🔗</span>
                <span>github.com/asifabdu10</span>
              </a>
              <span>•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition-colors flex items-center space-x-1"
              >
                <span>💼</span>
                <span>linkedin.com/in/asif-abdulla-0b996531a</span>
              </a>
            </div>

            {/* Education Section */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-widest flex items-center space-x-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Education</span>
              </h4>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center text-sm font-semibold text-white">
                  <span>Carmel College of Engineering and Technology</span>
                  <span className="text-xs font-mono text-indigo-400">2023 - 2027</span>
                </div>
                <p className="text-xs text-slate-400">
                  B.Tech in Computer Science and Engineering • APJ Abdul Kalam Technological University
                </p>
              </div>
            </div>

            {/* Core Objective */}
            <div className="space-y-1">
              <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
                Career Objective
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                {personalInfo.objective}
              </p>
            </div>

            {/* Leadership & Activities */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-widest flex items-center space-x-1.5">
                <Trophy className="w-3.5 h-3.5" />
                <span>Leadership & Co-Curricular</span>
              </h4>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                {experience.map((item, eIdx) => (
                  <div key={eIdx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="flex justify-between font-semibold text-slate-200">
                      <span>{item.role}</span>
                      <span className="font-mono text-[10px] text-indigo-400">{item.period}</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">{item.organization}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer buttons */}
            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
              <span className="text-[11px] text-slate-500 font-mono">
                Verified portfolio resume data
              </span>
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-xl transition-colors"
              >
                Close Resume
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Portfolio;