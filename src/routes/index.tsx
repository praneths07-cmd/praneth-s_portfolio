import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Brain,
  Eye,
  Layers,
  Menu,
  X,
  ArrowRight,
  GraduationCap,
  FileText,
  Instagram,
  Send,
  User,
  MessageSquare,
  Award,
  Camera,
  Database,
  Smartphone,
  Search,
  Sprout,
  Newspaper,
  FileCheck,
  Activity,
  Code,
  Terminal,
  Palette,
  Image as ImageIcon,
  PenTool,
  FileCode,
  Coffee,
  Bot,
  MonitorPlay,
  FileSpreadsheet,
  GitBranch,
  Table,
  Network,
  Sparkles
} from "lucide-react";
import resumePdf from "@/assets/PRANETH S_Resume.pdf";
import myPhoto from "@/assets/my_photo.jpeg";

export const Route = createFileRoute("/")(function () {
  return {
    head: () => ({
      meta: [
        { title: "Praneth S — AI Engineer & Full-Stack Developer" },
        {
          name: "description",
          content:
            "Praneth S builds LLM systems, computer vision pipelines, and full-stack AI apps. AI Engineer based in Coimbatore, India.",
        },
        { property: "og:title", content: "Praneth S — AI Engineer" },
        {
          property: "og:description",
          content:
            "I build systems that perceive, reason, and act — LLMs, computer vision, and full-stack AI.",
        },
      ],
    }),
    component: Portfolio,
  };
}());

/* ─────────────────────────────── Data ─────────────────────────────── */

const NAV = [
  { href: "#about", id: "about", label: "About" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#stack", id: "stack", label: "Stack" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#education", id: "education", label: "Education" },
  { href: "#contact", id: "contact", label: "Contact" },
];

const EDUCATION = [
  {
    school: "Dr. N.G.P Institute of Technology",
    location: "Coimbatore, TN",
    degree: "B.Tech — Artificial Intelligence & Data Science",
    period: "2023 – 2027",
    score: "CGPA 7.7",
  },
  {
    school: "ELGI Matric Higher Secondary School",
    location: "Coimbatore, TN",
    degree: "HSC — Higher Secondary Certificate",
    period: "2023",
    score: "83%",
  },
  {
    school: "ELGI Matric Higher Secondary School",
    location: "Coimbatore, TN",
    degree: "SSLC — Secondary School Leaving Certificate",
    period: "2021",
    score: "88%",
  },
];

type Project = {
  domain: string; // Used for the pill badge
  title: string;
  desc: string;
  tags: string[];
  href: string;
  icon: React.ElementType;
};

const PROJECTS: Project[] = [
  {
    domain: "Web & CCTV",
    title: "AI Employee Tracking & Attendance System",
    desc: "A multi-camera surveillance pipeline for automated employee attendance and workforce analytics in a real enterprise environment.",
    tags: ["yolo", "opencv", "bytetrack", "face recognition"],
    href: "https://github.com/praneths07-cmd",
    icon: Camera,
  },
  {
    domain: "Web",
    title: "SmartDB Assistant",
    desc: "A natural language interface for MySQL databases that allows users to type questions in plain English and get instant SQL results.",
    tags: ["llms", "mysql", "fastapi", "sql generation"],
    href: "https://github.com/praneths07-cmd",
    icon: Database,
  },
  {
    domain: "Mobile",
    title: "Object Detection for Blind Navigation",
    desc: "An Android application that uses the phone camera to detect nearby objects in real time and announces their names and distance via voice feedback.",
    tags: ["android", "computer vision", "voice feedback"],
    href: "https://github.com/praneths07-cmd/Object-Detection-with-Voice-for-Blind-Navigation",
    icon: Smartphone,
  },
  {
    domain: "Web",
    title: "AI Image Accuracy Finder",
    desc: "A web platform to evaluate and rank AI-generated images against a reference using CLIP semantic similarity and pixel-level scoring.",
    tags: ["clip", "node.js", "pixelmatch", "openai"],
    href: "https://github.com/praneths07-cmd/AI-Image-Accuracy-Finder-Pixel-Semantic-Similarity-Evaluation",
    icon: Search,
  },
  {
    domain: "Web & Mobile",
    title: "AgroSmart: Farm-to-Market Platform",
    desc: "A mobile-first marketplace connecting farmers to consumers with AI-powered crop price predictions to ensure fair, transparent pricing.",
    tags: ["javascript", "ai pricing", "weather api"],
    href: "https://github.com/praneths07-cmd/Agrosmart-Farm-to-Market-",
    icon: Sprout,
  },
  {
    domain: "Web",
    title: "AI Financial News Summarizer",
    desc: "A Streamlit web app using Hugging Face transformer models to generate concise summaries from long financial news articles in seconds.",
    tags: ["python", "hugging face", "streamlit", "nlp"],
    href: "https://github.com/praneths07-cmd/AI-Financial-News-Summarizer",
    icon: Newspaper,
  },
  {
    domain: "Web",
    title: "AI Contract Analysis System",
    desc: "An NLP system that parses legal contracts to extract named entities, classify clauses, and surface critical terms like parties and governing law.",
    tags: ["nlp", "python", "entity extraction", "flask"],
    href: "https://github.com/praneths07-cmd/AI-Powered-Contract-Analysis-System",
    icon: FileCheck,
  },
  {
    domain: "Web",
    title: "Medical Note Analyser",
    desc: "A Flask ML application that classifies clinical notes into medical categories like cardiac, diabetes, neurological, and sepsis.",
    tags: ["flask", "scikit-learn", "nlp", "healthcare"],
    href: "https://github.com/praneths07-cmd/Medical-Note-Analyser",
    icon: Activity,
  },
];

const SKILL_CONTEXT: Record<string, string> = {
  "Python": "Primary language for all AI/ML projects",
  "YOLO v8": "Real-time object detection in production systems",
  "FastAPI": "Backend for SmartDB and AI service APIs",
  "LLMs": "SQL generation, summarization, contract analysis",
  "OpenCV": "Frame processing in surveillance pipelines",
  "CLIP": "Semantic similarity scoring in image evaluator",
  "Node.js": "Backend for AgroSmart and Image Accuracy Finder",
  "ByteTrack": "Multi-object tracking in employee surveillance",
  "Hugging Face": "Transformers for NLP summarization tasks",
  "SQL / MySQL": "Database layer for SmartDB Assistant",
  "Power BI": "Dashboard creation during data analyst internship",
  "Tableau": "Stakeholder reporting at I-Bacus Tech Solutions",
  "Flask": "Web framework for contract and medical note apps",
  "Streamlit": "Rapid UI for financial news summarizer",
  "SAM": "Segmentation in computer vision pipelines",
  "Android Studio": "IDE for blind navigation app",
  "Git": "Version control across all projects",
  "GitHub": "Version control across all projects",
  "Face Recognition": "Identity matching for attendance system",
};

const STACK = [
  {
    label: "AI & Machine Learning",
    items: ["Python", "LLMs", "YOLO v8", "OpenCV", "CLIP", "Face Recognition", "ByteTrack", "Hugging Face", "SAM"],
  },
  {
    label: "Web & Backend",
    items: ["FastAPI", "Node.js", "JavaScript", "Flask", "HTML", "CSS", "REST APIs"],
  },
  {
    label: "Data & Analytics",
    items: ["SQL / MySQL", "Power BI", "Tableau", "Excel", "Pandas"],
  },
  {
    label: "Tools & Platform",
    items: ["Git", "GitHub", "Android Studio", "Streamlit", "VS Code"],
  },
];

const EXPERIENCE = [
  {
    role: "AI Engineer Intern",
    company: "TEXA Innovates",
    location: "Coimbatore",
    date: "April 2026",
    bullets: [
      "Developed production-grade AI employee tracking system using YOLO, OpenCV, and live RTSP camera streams tracking **200+ employees** in **real-time**.",
      "Built SmartDB Assistant — an LLM chatbot enabling **natural language queries** to enterprise databases.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "I-Bacus Tech Solutions",
    location: "Coimbatore",
    date: "June 2025",
    bullets: [
      "Built and maintained Power BI and Tableau dashboards tracking key business KPIs.",
      "Produced structured data summaries and visual reports for stakeholder presentations.",
    ],
  },
  {
    role: "Graphic Design Intern",
    company: "Visaiathalam Academy & Solutions",
    location: "",
    date: "May 2024",
    bullets: [
      "Designed logos, banners, and brochures ensuring brand consistency across print and digital.",
      "Created social media content to drive brand visibility and engagement.",
    ],
  },
];

const CERTS = [
  { name: "GenAI-Powered Data Analytics Job Simulation", issuer: "Tata / Forage", date: "2025" },
  { name: "Introduction to HCI", issuer: "NPTEL (Elite + Gold)", date: "2024" },
  { name: "Design & Implementation of Human Computer Interfaces", issuer: "NPTEL (Elite)", date: "2024" },
  { name: "Graphical Designing (3-Month Course)", issuer: "Professional Certificate", date: "2024" },
];

const TERMINAL_COMMANDS = [
  { prompt: "praneth@ai:~$", cmd: "python train.py --model yolov8 --epochs 50", out: "✓ Tracking 200+ employees in real-time" },
  { prompt: "praneth@ai:~$", cmd: "llm query --nl 'Show top sales by region'", out: "✓ Natural language → SQL. Zero manual queries." },
  { prompt: "praneth@ai:~$", cmd: "clip.evaluate --input images/ --metric semantic", out: "✓ AI images ranked by CLIP + pixel similarity" },
  { prompt: "praneth@ai:~$", cmd: "yolo detect --source camera --voice-feedback on", out: "✓ Blind navigation at 30fps with voice alerts" },
];

/* ─────────────────────────────── Hooks ─────────────────────────────── */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActiveSection() {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

/* ─────────────────────────────── UI Components ─────────────────────────────── */

function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden>
      <div className="section-dots">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[2px] bg-cyan-accent transition-[width] duration-75"
      style={{ width: `${pct}%`, boxShadow: "0 0 8px rgba(0,212,255,0.7)" }}
    />
  );
}

function Navbar({ active }: { active: string; }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-background/90 border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1100px] px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#top" className="font-display font-bold text-lg tracking-tight text-foreground">
            <span className="text-cyan-accent">P</span>RANETH<span className="text-cyan-accent">.</span>
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-tag border border-cyan-accent/20 text-cyan-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-accent" />
            </span>
            Available for Hire
          </span>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <li key={n.href}>
                <a
                  href={n.href}
                  className={`relative transition-colors duration-200 pb-1 font-medium ${
                    isActive ? "text-cyan-accent" : "hover:text-foreground"
                  }`}
                >
                  {n.label}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-cyan-accent rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur shadow-md">
          <ul className="px-6 py-4 flex flex-col gap-3 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={n.href}
                  className={`block py-1.5 font-medium ${
                    active === n.id ? "text-cyan-accent" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-accent mb-3 font-semibold">
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mb-12 reveal text-center sm:text-left">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-display font-bold heading-accent">{children}</h2>
    </div>
  );
}

function TerminalTypewriter() {
  const [lineIdx, setLineIdx] = useState(0);
  const [cmdText, setCmdText] = useState("");
  const [outText, setOutText] = useState("");
  const [phase, setPhase] = useState<"typing-cmd" | "showing-out" | "waiting">("typing-cmd");

  useEffect(() => {
    const current = TERMINAL_COMMANDS[lineIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing-cmd") {
      if (cmdText.length < current.cmd.length) {
        timeout = setTimeout(() => setCmdText(current.cmd.slice(0, cmdText.length + 1)), 45);
      } else {
        timeout = setTimeout(() => {
          setOutText(current.out);
          setPhase("showing-out");
        }, 400);
      }
    } else if (phase === "showing-out") {
      timeout = setTimeout(() => setPhase("waiting"), 2200);
    } else if (phase === "waiting") {
      timeout = setTimeout(() => {
        setCmdText("");
        setOutText("");
        setPhase("typing-cmd");
        setLineIdx((i) => (i + 1) % TERMINAL_COMMANDS.length);
      }, 600);
    }
    return () => clearTimeout(timeout);
  }, [cmdText, outText, phase, lineIdx]);

  const current = TERMINAL_COMMANDS[lineIdx];

  return (
    <div className="mt-6 rounded-xl overflow-hidden font-mono text-xs sm:text-sm shadow-2xl max-w-xl mx-auto lg:mx-0" style={{border: '2px solid #1e293b'}}>
      {/* Mac terminal header */}
      <div className="bg-[#1e293b] px-4 py-2.5 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[#64748b] text-[10px] font-medium tracking-widest uppercase">terminal — bash</span>
      </div>
      {/* Terminal body */}
      <div className="bg-[#0f172a] p-4 h-[140px] sm:h-[130px] text-left">
        {/* Previous completed lines hint */}
        <div className="text-[#475569] text-[10px] mb-2">praneth@ai:~$ <span className="text-[#64748b]">whoami</span></div>
        <div className="text-[#22d3ee] text-[10px] mb-3">AI Engineer · Full-Stack Dev · LLM Builder</div>
        {/* Current typing line */}
        <div className="flex items-start gap-1 flex-wrap">
          <span className="text-[#22d3ee] shrink-0">{current.prompt}</span>
          <span className="text-[#e2e8f0] break-all">{cmdText}</span>
          {phase === "typing-cmd" && <span className="cursor-blink inline-block w-[7px] h-[13px] bg-[#22d3ee] translate-y-0.5" />}
        </div>
        {outText && (
          <div className="mt-1.5 text-[#4ade80] pl-2">{outText}</div>
        )}
      </div>
    </div>
  );
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    if (inView) {
      const duration = 400;
      const steps = 60;
      const stepTime = duration / steps;
      const increment = value / steps;
      let current = 0;
      interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
    }
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [value, inView]);

  return (
    <div
      ref={(el) => {
        if (!el) return;
        const io = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
        io.observe(el);
      }}
      className="font-display font-bold text-2xl sm:text-3xl text-cyan-accent leading-none"
    >
      {count}{suffix}
    </div>
  );
}

function MetricsStrip() {
  const metrics = [
    { num: 8, suffix: "+", label: "Projects Shipped" },
    { num: 3, label: "AI Domains" },
    { num: 5, suffix: "+", label: "Production Tools" },
    { num: 3, suffix: "+", label: "Internships" },
  ];
  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-y-4 sm:divide-x divide-border rounded-xl border border-border bg-white shadow-sm py-5 max-w-2xl mx-auto lg:mx-0">
      {metrics.map((m) => (
        <div key={m.label} className="px-4 text-center sm:text-left">
          <AnimatedNumber value={m.num} suffix={m.suffix} />
          <div className="mt-1.5 text-[11px] uppercase tracking-wider text-muted-foreground font-mono font-medium">
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────── Sections ─────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-background">
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-1/3 left-[15%] w-[520px] h-[520px] rounded-full blur-3xl glow-pulse"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 right-[10%] w-[460px] h-[460px] rounded-full blur-3xl glow-pulse"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", animationDelay: "1.5s" }}
        />
      </div>
      <div className="mx-auto max-w-[1100px] px-6 w-full grid lg:grid-cols-5 gap-12 items-center text-center lg:text-left">
        <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
          <h1 className="font-display font-bold leading-[0.92] tracking-tight flex flex-col items-center lg:items-start">
            <span className="block text-6xl sm:text-7xl lg:text-[5.5rem] name-shimmer mb-4 uppercase">
              PRANETH S
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-foreground">
              <span className="text-cyan-accent">AI</span> Engineer.
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-foreground mt-1">
              LLM Builder.
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-foreground mt-1">
              Full-Stack Dev<span className="text-cyan-accent">.</span>
            </span>
          </h1>
          <div className="w-full mt-6">
            <TerminalTypewriter />
            <MetricsStrip />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a
              href="#projects"
              className="shine lift-on-hover inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-cyan-accent to-violet-accent text-white font-semibold text-sm shadow-hero"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="shine lift-on-hover inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-cyan-accent/30 bg-white text-cyan-accent font-semibold text-sm shadow-elegant hover:bg-cyan-accent/5"
            >
              <FileText size={16} /> View Resume
            </a>
            <a
              href="https://github.com/praneths07-cmd"
              target="_blank"
              rel="noreferrer"
              className="lift-on-hover inline-flex items-center gap-2 px-4 py-3.5 rounded-lg border border-border bg-white text-foreground font-medium text-sm shadow-sm hover:border-cyan-accent hover:text-cyan-accent"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/praneths07/"
              target="_blank"
              rel="noreferrer"
              className="lift-on-hover inline-flex items-center gap-2 px-4 py-3.5 rounded-lg border border-border bg-white text-foreground font-medium text-sm shadow-sm hover:border-cyan-accent hover:text-cyan-accent"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-center mt-24 sm:mt-12 lg:mt-0 relative h-full items-start pt-12 lg:pt-16">
          <div className="hanging-wrapper relative w-64 mt-12 scale-[0.85] sm:scale-100 lg:scale-125 origin-top">
            {/* Box above the strap */}
            <div className="absolute -top-[92px] left-1/2 -translate-x-1/2 w-32 h-8 bg-slate-900 border-2 border-foreground shadow-[4px_4px_0_var(--foreground)] z-30 flex items-center justify-center">
              <div className="w-16 h-1 rounded-full bg-slate-700"></div>
            </div>
            {/* Strap */}
            <div className="absolute -top-[60px] left-1/2 -translate-x-1/2 w-8 h-[80px] bg-slate-800 rounded-t-none rounded-b-md shadow-inner" />
            {/* Clip */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-900 rounded-lg border-2 border-slate-700 shadow-md z-20 flex justify-center items-center">
               <div className="w-12 h-2 rounded-full bg-slate-800" />
            </div>
            
            {/* Card */}
            <div className="relative z-10 bg-[#a3e635] rounded-2xl border-[3px] border-foreground p-5 shadow-[8px_8px_0_var(--foreground)] flex flex-col items-center overflow-hidden">
              <div className="w-full aspect-[4/5] bg-white rounded-xl border-[3px] border-foreground overflow-hidden mb-5 relative flex items-center justify-center">
                <img src={myPhoto} alt="Praneth S" className="w-full h-full object-cover transition-all duration-300" onError={(e) => { e.currentTarget.style.display='none'; }} />
                <User size={64} className="absolute text-slate-300 -z-10" />
              </div>
              <div className="text-center font-mono font-bold text-[10px] tracking-[0.2em] text-foreground/80 uppercase mb-1">
                Cross-Platform
              </div>
              <div className="text-center font-display font-black text-[24px] text-foreground leading-tight uppercase">
                AI<br />Engineer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIBuild() {
  const pillars = [
    {
      icon: <Brain className="text-cyan-accent" size={24} />,
      title: "Intelligent Agents & LLMs",
      desc: "Building LLM-powered systems that can reason over structured data, generate SQL from natural language, and operate as autonomous backend agents.",
      tags: ["LLMs", "FastAPI", "Python", "MySQL", "Prompt Engineering"],
    },
    {
      icon: <Eye className="text-violet-accent" size={24} />,
      title: "Computer Vision Systems",
      desc: "Real-time multi-camera object detection, face recognition, and tracking pipelines built for production environments with YOLO and ByteTrack.",
      tags: ["YOLO", "OpenCV", "Face Recognition", "ByteTrack", "RTSP", "SAM"],
    },
    {
      icon: <Layers className="text-cyan-accent" size={24} />,
      title: "Full-Stack AI Apps",
      desc: "End-to-end web applications that bring AI models to users — from React frontends to FastAPI/Node.js backends with persistent AI services.",
      tags: ["Node.js", "FastAPI", "JavaScript", "HTML/CSS", "Streamlit"],
    },
  ];
  return (
    <section id="about" className="section-bordered section-alt py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionHeading eyebrow="Focus Areas">What I Build</SectionHeading>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="reveal group card-fancy rounded-2xl border border-border bg-white p-8 shadow-sm flex flex-col items-center text-center"
            >
              <div className="icon-tile w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{p.desc}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 border border-transparent cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const IconComponent = p.icon;
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      className="reveal group relative flex flex-col brutal-card bg-white overflow-hidden"
    >
      {/* Top Illustration Area */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-6 overflow-hidden">
        {/* Floating pill badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur border border-slate-200 text-slate-600 font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm z-10">
          {p.domain}
        </div>
        
        {/* Icon / Illustration */}
        <div className="relative z-10 w-24 h-24 rounded-2xl bg-white shadow-[0_12px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
          <IconComponent size={40} className="text-cyan-accent stroke-[1.5]" />
        </div>
        
        {/* Decorative background blobs */}
        <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-accent/10 rounded-full blur-2xl" />
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-accent/10 rounded-full blur-2xl" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1 items-center text-center">
        <h3 className="font-display font-bold text-lg leading-tight mb-3 text-foreground group-hover:text-cyan-accent transition-colors">
          {p.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
          {p.desc}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {p.tags.map((t) => (
            <span key={t} className="project-tag inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 border border-transparent">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-bordered py-24 bg-background">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionHeading eyebrow="What I've Shipped">Projects</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Row 1: Core languages & frameworks | Row 2: AI/ML specializations
const SKILLS_ROW1 = [
  { name: "Python", icon: <Terminal size={36} /> },
  { name: "Java", icon: <Coffee size={36} /> },
  { name: "JavaScript", icon: <FileCode size={36} /> },
  { name: "HTML & CSS", icon: <Layers size={36} /> },
  { name: "MySQL", icon: <Database size={36} /> },
  { name: "React.js", icon: <Code size={36} /> },
  { name: "FastAPI", icon: <MonitorPlay size={36} /> },
];
const SKILLS_ROW2 = [
  { name: "Machine Learning", icon: <Network size={36} /> },
  { name: "Prompt Engineering", icon: <MessageSquare size={36} /> },
  { name: "Computer Vision", icon: <Eye size={36} /> },
  { name: "LLM", icon: <Bot size={36} /> },
  { name: "Generative AI", icon: <Sparkles size={36} /> },
  { name: "YOLO", icon: <Camera size={36} /> },
  { name: "OpenCV", icon: <Eye size={36} /> },
];
const SKILLS = [...SKILLS_ROW1, ...SKILLS_ROW2];

const TOOLS = [
  { name: "VS Code", icon: <Code size={36} /> },
  { name: "Claude Code", icon: <Terminal size={36} /> },
  { name: "PowerBI", icon: <Activity size={36} /> },
  { name: "SQL", icon: <Database size={36} /> },
  { name: "Git", icon: <GitBranch size={36} /> },
  { name: "GitHub", icon: <Github size={36} /> },
  { name: "Adobe Photoshop", icon: <ImageIcon size={36} /> },
  { name: "Excel", icon: <Table size={36} /> },
];

function Stack() {
  const [activeTab, setActiveTab] = useState<"skills" | "tools">("skills");

  return (
    <section id="stack" className="section-bordered section-alt py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 tracking-tight">Skills &amp; Tools</h2>
          <p className="text-slate-500 font-medium">Technologies I use to build real products</p>
          
          <div className="mt-8 inline-flex bg-white rounded-full brutal-card p-1 items-center mx-auto" style={{ border: '3px solid var(--foreground)', boxShadow: '4px 4px 0 var(--foreground)'}}>
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-8 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${
                activeTab === "skills" ? "bg-[#a3e635] text-foreground" : "text-slate-500 hover:text-foreground"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-8 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${
                activeTab === "tools" ? "bg-[#a3e635] text-foreground" : "text-slate-500 hover:text-foreground"
              }`}
            >
              Tools
            </button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {activeTab === "skills" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12 place-items-center animate-in fade-in zoom-in duration-300">
              {SKILLS.map(s => (
                <div key={s.name} className="flex flex-col items-center gap-4 group cursor-default">
                  <div className="w-24 h-24 rounded-full bg-white brutal-icon flex items-center justify-center text-cyan-accent transition-all duration-200 group-hover:text-violet-accent group-hover:-translate-y-1">
                    {s.icon}
                  </div>
                  <span className="text-sm font-bold text-foreground text-center">{s.name}</span>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === "tools" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12 place-items-center animate-in fade-in zoom-in duration-300">
              {TOOLS.map(t => (
                <div key={t.name} className="flex flex-col items-center gap-4 group cursor-default">
                  <div className="w-24 h-24 rounded-full bg-white brutal-icon flex items-center justify-center text-violet-accent transition-all duration-200 group-hover:text-cyan-accent group-hover:-translate-y-1">
                    {t.icon}
                  </div>
                  <span className="text-sm font-bold text-foreground text-center">{t.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* Render markdown-style bold (**text**) in experience bullets */
function BulletText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <span key={i} className="text-cyan-accent font-bold">{part.slice(2, -2)}</span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-bordered py-24 bg-background">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionHeading eyebrow="Where I've Worked">Experience</SectionHeading>
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200">
          {EXPERIENCE.map((e) => (
            <div key={e.role + e.company} className="reveal relative pb-12 last:pb-0 group">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-accent ring-4 ring-background node-pulse" />
              <div className="card-fancy rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                  <h3 className="font-display font-bold text-xl group-hover:text-cyan-accent transition-colors">{e.role}</h3>
                  <span className="inline-flex w-fit font-mono text-xs font-bold uppercase tracking-wider text-cyan-accent px-3 py-1.5 rounded-full bg-cyan-accent/10 border border-cyan-accent/20">{e.date}</span>
                </div>
                <div className="text-[15px] font-medium text-slate-600 mb-5">
                  {e.company}{e.location && <> · {e.location}</>}
                </div>
                <ul className="space-y-3 text-[15px] text-slate-600 leading-relaxed">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-cyan-accent font-bold mt-0.5">—</span>
                      <BulletText text={b} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const currentYear = new Date().getFullYear();
  return (
    <section id="education" className="section-bordered section-alt py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionHeading eyebrow="Academic Background">Education</SectionHeading>
        <div className="grid md:grid-cols-3 gap-6">
          {EDUCATION.map((e) => (
            <div
              key={e.school + e.degree}
              className="reveal group card-fancy rounded-2xl border border-border bg-white p-8 shadow-sm flex flex-col items-center text-center"
            >
              <div className="icon-tile w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
                <GraduationCap className="text-cyan-accent" size={24} />
              </div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-accent mb-3">
                {e.period} · <span className="text-violet-accent">{e.score}</span>
              </div>
              <h3 className="font-display font-bold text-[17px] leading-snug mb-2 text-foreground group-hover:text-cyan-accent transition-colors">{e.degree}</h3>
              <p className="text-sm font-medium text-slate-600">{e.school}</p>
              <p className="text-[13px] text-slate-400 mt-1">{e.location}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <span className="w-12 h-12 rounded-xl bg-cyan-accent/10 border border-cyan-accent/30 flex items-center justify-center text-cyan-accent shadow-inner">
              <FileText size={20} />
            </span>
            <div>
              <div className="font-bold text-base text-foreground">Full Resume</div>
              <div className="text-xs font-bold text-slate-400 font-mono mt-1 uppercase tracking-wider">PRANETH S_Resume.pdf · Updated {currentYear}</div>
            </div>
          </div>
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="shine lift-on-hover inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-cyan-accent to-violet-accent text-white font-bold text-sm shadow-hero w-full sm:w-auto justify-center"
          >
            <ExternalLink size={16} /> View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function CertModal({ cert, onClose }: { cert: typeof CERTS[number]; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[480px] rounded-2xl bg-white border border-border overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-cyan-accent hover:border-cyan-accent transition flex items-center justify-center shadow-sm"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <div className="aspect-[16/9] bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative z-10 w-20 h-20 rounded-2xl bg-white shadow-[0_10px_30px_-10px_rgba(8,145,178,0.3)] border border-cyan-accent/20 flex items-center justify-center mb-4">
            <Award className="text-cyan-accent" size={32} />
          </div>
          <div className="relative z-10 font-display font-bold text-xl text-foreground text-center px-8 leading-tight">{cert.name}</div>
          <div className="relative z-10 text-sm font-medium text-slate-500 mt-2">{cert.issuer}</div>
        </div>
        <div className="p-6 bg-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-accent/10 border border-cyan-accent/30 flex items-center justify-center shrink-0">
              <Award className="text-cyan-accent" size={20} />
            </div>
            <div>
              <h3 className="font-display font-bold text-[15px] leading-snug text-foreground">{cert.name}</h3>
              <p className="text-[13px] font-medium text-slate-500 mt-1">
                {cert.issuer} <span className="mx-1 text-slate-300">•</span> {cert.date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Certifications() {
  const [openCert, setOpenCert] = useState<typeof CERTS[number] | null>(null);
  return (
    <section id="certifications" className="section-bordered py-24 bg-background">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionHeading eyebrow="Credentials">Certifications</SectionHeading>
        <div className="grid sm:grid-cols-2 gap-6">
          {CERTS.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setOpenCert(c)}
              className="reveal card-fancy relative group text-left flex items-start gap-5 rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <div
                className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center shadow-sm"
                style={{
                  background: i % 2 === 0 ? "rgba(8,145,178,0.08)" : "rgba(124,58,237,0.08)",
                  border: `1px solid ${i % 2 === 0 ? "rgba(8,145,178,0.2)" : "rgba(124,58,237,0.2)"}`,
                }}
              >
                <Award size={22} className={i % 2 === 0 ? "text-cyan-accent" : "text-violet-accent"} />
              </div>
              <div className="min-w-0 pr-8">
                <div className="font-bold text-[15px] text-foreground leading-snug group-hover:text-cyan-accent transition-colors">{c.name}</div>
                <div className="text-[13px] font-medium text-slate-500 mt-1.5">{c.issuer}</div>
              </div>
              <span className="absolute top-1/2 -translate-y-1/2 right-6 text-slate-300 group-hover:text-cyan-accent transition-colors">
                <ArrowRight size={18} />
              </span>
            </button>
          ))}
        </div>
        {openCert && <CertModal cert={openCert} onClose={() => setOpenCert(null)} />}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-bordered section-alt py-24 relative z-0 overflow-hidden">
      {/* Background breathing glow behind everything */}
      <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-[50%] bg-gradient-to-br from-cyan-accent/30 via-violet-accent/20 to-cyan-accent/30 opacity-70 blur-[120px] pointer-events-none -z-10 breathing-glow" />
      
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-12">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Let's Build Something</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Open to internships, project collaborations, and full-time AI/ML roles. Based in Coimbatore — working remotely or in-person.
          </p>
          <div className="mt-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-border shadow-sm text-xs font-bold uppercase tracking-wider text-slate-500">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-foreground">Available for work</span>
          </div>
        </div>

        <div className="reveal grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {[
            { icon: <Mail size={20} />, label: "Email", value: "praneths07@gmail.com", href: "mailto:praneths07@gmail.com" },
            { icon: <Linkedin size={20} />, label: "LinkedIn", value: "praneths07", href: "https://www.linkedin.com/in/praneths07/" },
            { icon: <Github size={20} />, label: "GitHub", value: "praneths07-cmd", href: "https://github.com/praneths07-cmd" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group card-fancy flex flex-col items-center text-center gap-3 rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <span className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-cyan-accent shadow-[0_4px_12px_rgba(0,0,0,0.03)] group-hover:scale-110 transition-transform duration-300">
                {c.icon}
              </span>
              <div className="min-w-0">
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">{c.label}</div>
                <div className="text-[15px] font-medium text-foreground truncate">{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        <form
          className="reveal relative max-w-2xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget as HTMLFormElement;
            const data = new FormData(f);
            const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
            const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
            window.location.href = `mailto:praneths07@gmail.com?subject=${subject}&body=${body}`;
          }}
        >
          <div className="relative rounded-3xl border border-border bg-white/80 backdrop-blur-sm p-8 grid gap-5 overflow-hidden shadow-xl shadow-slate-200/50">
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-slate-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-accent dot-pulse" />
              <span className="text-cyan-accent uppercase tracking-widest">Send a direct message</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="group relative flex items-center">
                <User size={18} className="absolute left-4 text-slate-400 group-focus-within:text-cyan-accent transition-colors" />
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-[15px] font-medium text-foreground focus:outline-none focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20 transition-all placeholder:font-normal placeholder:text-slate-400"
                />
              </label>
              <label className="group relative flex items-center">
                <Mail size={18} className="absolute left-4 text-slate-400 group-focus-within:text-cyan-accent transition-colors" />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-[15px] font-medium text-foreground focus:outline-none focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20 transition-all placeholder:font-normal placeholder:text-slate-400"
                />
              </label>
            </div>
            <label className="group relative flex items-start">
              <MessageSquare size={18} className="absolute left-4 top-4 text-slate-400 group-focus-within:text-cyan-accent transition-colors" />
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about your project, role, or idea..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-[15px] font-medium text-foreground focus:outline-none focus:border-cyan-accent focus:ring-2 focus:ring-cyan-accent/20 resize-none transition-all placeholder:font-normal placeholder:text-slate-400"
              />
            </label>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
              <p className="text-[12px] font-medium text-slate-500">
                <span className="text-cyan-accent font-bold mr-1">→</span> Opens your mail client with a pre-filled draft
              </p>
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-accent to-violet-accent text-white font-bold text-[15px] overflow-hidden transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(8,145,178,0.5)] w-full sm:w-auto"
              >
                <span className="relative z-10">Send Message</span>
                <Send size={16} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Socials() {
  const socials = [
    {
      label: "Instagram",
      handle: "@rx_praneth",
      href: "https://instagram.com/rx_praneth",
      icon: <Instagram size={24} />,
      gradient: "from-[#f09433] via-[#e6683c] to-[#bc1888]",
      shadow: "rgba(220,72,156,0.25)",
    },
    {
      label: "WhatsApp",
      handle: "+91 79047 86938",
      href: "https://wa.me/917904786938",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      gradient: "from-[#25D366] via-[#1ebe5d] to-[#128C7E]",
      shadow: "rgba(37,211,102,0.25)",
    },
  ];
  return (
    <section className="section-bordered pt-4 pb-24 bg-background">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="reveal text-center mb-10">
          <Eyebrow>Find Me Around</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-display font-bold">Say Hi on Social</h2>
        </div>
        <div className="reveal grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-5 rounded-2xl border border-border bg-white p-6 overflow-hidden transition-transform hover:-translate-y-1.5"
              style={{ ["--glow" as string]: s.shadow }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px -10px ${s.shadow}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              <span
                aria-hidden
                className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
              <span
                className={`relative grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br ${s.gradient} text-white shadow-lg shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]`}
              >
                <span className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />
                {s.icon}
              </span>
              <div className="relative min-w-0 flex-1">
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  {s.label}
                </div>
                <div className="font-display font-bold text-[19px] truncate text-foreground">{s.handle}</div>
              </div>
              <ArrowRight
                size={20}
                className="relative text-slate-300 group-hover:text-cyan-accent transition-all group-hover:translate-x-1"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-[1100px] px-6 py-12 flex flex-col items-center justify-center text-center gap-2">
        <p className="text-2xl sm:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-violet-accent mb-2">
          Thanks for visiting my portfolio
        </p>
        <p className="text-base sm:text-lg font-bold text-foreground">
          Designed &amp; Developed by Praneth with Love <span className="text-cyan-accent">♥</span>
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────────── Main ─────────────────────────────── */

function Portfolio() {
  useReveal();
  const active = useActiveSection();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-cyan-accent/20 selection:text-cyan-900">
      <ReadingProgress />
      <Navbar active={active} />
      <main>
        <Hero />
        <SectionDivider />
        <WhatIBuild />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Stack />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Contact />
        <SectionDivider />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
