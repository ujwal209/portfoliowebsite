"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { 
  Github, Linkedin, Mail, ExternalLink, 
  Layout, Server, Zap, Code2, 
  ShieldCheck, Cpu, Search, Terminal, Rocket, GraduationCap, Briefcase,
  Sun, Moon, X
} from "lucide-react";

import TiltCard from "@/components/TiltCard";


export default function Portfolio() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Prevent hydration mismatch & setup scroll observer for active sections
  useEffect(() => {
    setMounted(true);
    
    const sections = ["home", "why-me", "services", "process", "work", "tools", "faq", "contact"];
    const handleScroll = () => {
      // Find current section in view with a 33% screen offset trigger
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initially to set starting state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "Prashne.ai",
      description: "An automated mock-interview platform. It listens to user answers and provides instant, realistic feedback to help candidates prep for real jobs.",
      tech: ["Next.js", "OpenAI", "Tailwind", "WebRTC"],
      link: "https://prashne.ai", 
      github: "https://github.com/ujwal209",
      role: "Lead AI Architect & Full-Stack Developer",
      duration: "4 Weeks",
      longDescription: "Prashne.ai is an intelligent mock-interview system designed to bridge the gap between candidate preparation and real job demands. By leveraging low-latency WebRTC audio streaming, the application records candidate speech, processes it through advanced semantic models to grade answer accuracy, and provides instant verbal/text feedback. It handles automatic question progression based on user responses, providing a highly realistic mock-interview experience.",
      features: [
        "Real-time WebRTC audio recording & latency optimization",
        "Semantic evaluation using custom LLM prompts",
        "Detailed analytical dashboards with category-wise performance scores",
        "Responsive Next.js 14 frontend layout"
      ]
    },
    {
      title: "Nego AI",
      description: "A smart negotiation tool for businesses. It talks to vendors and automates the boring parts of supply chain purchasing, saving companies time and money.",
      tech: ["Next.js", "TypeScript", "Tailwind", "AI Agents", "MongoDB"],
      link: "https://negoai.tech",
      github: "https://github.com/ujwal209",
      role: "Founder & Core Engineer",
      duration: "6 Weeks",
      longDescription: "Nego AI is an automated negotiation agent designed to optimize supply chain procurement. It handles active, multi-turn price negotiations with wholesale suppliers, analyzing historically successful purchase agreements, market indicators, and real-time vendor inputs. By automating standard vendor negotiations, companies reduce procurement overhead by up to 18% and cut vendor communication loops from days to minutes.",
      features: [
        "Autonomous conversational agents with multi-turn negotiation logic",
        "RAG query pipeline connected to database vendor records",
        "Secure MongoDB storage with robust encryption standards",
        "FastAPI analytics endpoints for contract management"
      ]
    },
    {
      title: "Expenzoid",
      description: "A smart expense tracker. Just snap a picture of a receipt, and the app reads the text and categorizes your spending automatically.",
      tech: ["Python", "TensorFlow", "React", "MongoDB"],
      link: "https://expenzoide.vercel.app",
      github: "https://github.com/ujwal209",
      role: "ML Developer & Designer",
      duration: "3 Weeks",
      longDescription: "Expenzoid is a receipts scanning and automated expense tracking platform. Using a custom TensorFlow pipeline combined with advanced OCR (Optical Character Recognition), the application reads raw receipts images, extracts the merchant, transaction total, tax, and purchase items, and automatically registers and categorizes the transaction inside the database.",
      features: [
        "Custom OCR scanning model using TensorFlow & Tesseract",
        "Automated taxonomy classification utilizing sentence embeddings",
        "Interactive charting dashboards for monthly spend analysis",
        "React frontend with quick mobile camera capture action"
      ]
    },
    {
      title: "InfraCore",
      description: "A clean, fast platform for engineering students to share class notes, collaborate on projects, and connect with each other.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      link: "https://inferacore.vercel.app",
      github: "https://github.com/ujwal209",
      role: "Backend & Database Architect",
      duration: "4 Weeks",
      longDescription: "InfraCore is a document sharing and workspace collaboration platform designed specifically for engineering student cohorts. It allows instant uploads, cloud indexing, and semantic search on class notes and project plans. Built on PostgreSQL with Redis caching, it easily supports rapid, high-concurrency spikes during exam weeks without degradation in response times.",
      features: [
        "Scalable PostgreSQL database schema with automated replication",
        "High-performance Redis layer for session and file metadata caching",
        "AWS S3 integration for secure, distributed PDF document hosting",
        "Granular user role controls and shared community forums"
      ]
    }
  ];

  const skillCategories = [
    { 
      category: "Frontend Development", 
      icon: <Layout className="h-5 w-5 text-primary" />, 
      items: [
        { name: "React.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invertDark: true },
        { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Three.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg", invertDark: true },
        { name: "Redux / Zustand", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" }
      ] 
    },
    { 
      category: "Backend Engineering", 
      icon: <Server className="h-5 w-5 text-primary" />, 
      items: [
        { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express / FastAPI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Redis", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
        { name: "Django / Flask", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" }
      ] 
    },
    { 
      category: "Machine Learning & AI", 
      icon: <Cpu className="h-5 w-5 text-primary" />, 
      items: [
        { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "PyTorch", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
        { name: "LangChain / LlamaIndex", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", invertDark: true },
        { name: "Scikit-Learn", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "Vector Databases", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
        { name: "Hugging Face", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" }
      ] 
    },
    { 
      category: "DevOps & Systems", 
      icon: <ShieldCheck className="h-5 w-5 text-primary" />, 
      items: [
        { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Kubernetes", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
        { name: "AWS / GCP", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invertDark: true },
        { name: "Git / CI-CD", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Linux Systems", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
        { name: "Vercel / Netlify", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" }
      ] 
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 transition-colors duration-500 overflow-x-hidden font-sans">
      
      {/* TYPOGRAPHY & NOISE STYLES */}
      <style dangerouslySetInline={{__html: `
        :root {
          --font-heading: var(--font-serif), serif;
          --font-body: var(--font-sans), sans-serif;
        }

        body {
          font-family: var(--font-body);
        }

        h1, h2, h3, h4, h5, h6, .font-heading {
          font-family: var(--font-heading) !important;
        }

        /* Extremely subtle, high-end noise overlay */
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
        }
      `}} />

      {/* MINIMALIST NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/85 backdrop-blur-md border-b border-[var(--border)]/60">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <Link href="/" className="group flex items-center gap-1">
            <span className="font-heading font-extrabold text-2xl tracking-tighter text-foreground">
              ujwal<span className="text-primary group-hover:text-foreground transition-colors duration-300">.</span>
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
              <Link href="#why-me" className="hover:text-primary transition-colors">Why Me</Link>
              <Link href="#process" className="hover:text-primary transition-colors">Process</Link>
              <Link href="#work" className="hover:text-primary transition-colors">Work</Link>
            </div>
            <div className="h-4 w-px bg-[var(--border)] hidden md:block"></div>
            
            {mounted && (
              <button 
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} 
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-[var(--secondary)] text-neutral-500 hover:text-foreground transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="relative z-10 bg-noise">
        
        {/* HERO SECTION */}
        <section id="home" className="relative pt-40 pb-28 md:pt-48 md:pb-36 px-6 min-h-[85vh] flex flex-col justify-center">
          
          <div className="max-w-5xl mx-auto w-full space-y-12 relative z-10">
            <div className="space-y-6">
              <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.95] text-foreground uppercase">
                I build apps <br/>
                that <span className="text-primary">simply work.</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-light max-w-3xl leading-relaxed">
                Hi, I'm <strong className="text-foreground font-medium">Ujwal Venkatesh</strong>. I help teams and businesses turn complex ideas into fast, reliable, and user-friendly software. No fluff, just clean code that solves real problems.
              </p>
            </div>
            
            {/* Metadata columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[var(--border)]">
              <div className="space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-primary">Specialty</div>
                <p className="text-xs text-neutral-700 font-medium dark:text-neutral-300">AI Engineering & Intelligent Negotiation Systems</p>
              </div>
              <div className="space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-primary">Education</div>
                <p className="text-xs text-neutral-700 font-medium dark:text-neutral-300">IIT Madras (B.S. Data Science) & BMSCE (B.E. AI & ML)</p>
              </div>
              <div className="space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-primary">Philosophy</div>
                <p className="text-xs text-neutral-700 font-medium dark:text-neutral-300">No vibecoding. Zero fluff. Purely robust software engineering.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <Link 
                href="#work"
                className="inline-flex items-center justify-center rounded-full px-8 h-14 font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity w-full sm:w-auto shadow-sm"
              >
                See selected work
              </Link>
              
              <div className="flex items-center gap-4">
                <Link 
                  href="https://github.com/ujwal209" 
                  target="_blank"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--secondary)] text-neutral-600 dark:text-neutral-400 transition-all"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/ujwal-venkatesh-b85829326/" 
                  target="_blank"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--secondary)] text-neutral-600 dark:text-neutral-400 transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BANNER */}
        <section className="py-16 border-y border-[var(--border)] bg-[var(--card)]/40 backdrop-blur-sm relative z-10">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-1">
              <div className="text-3xl md:text-5xl font-black text-primary">20+</div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 dark:text-neutral-400">Projects Completed</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl md:text-5xl font-black text-primary">3+</div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 dark:text-neutral-400">AI Core Agents Live</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl md:text-5xl font-black text-primary">15k+</div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 dark:text-neutral-400">Lines of Code Written</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl md:text-5xl font-black text-primary">100%</div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 dark:text-neutral-400">Client Satisfaction</div>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section id="why-me" className="py-24 border-y border-[var(--border)] bg-[var(--background)]/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16 md:mb-24">
              <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-foreground uppercase">Why work with me?</h2>
              <p className="text-neutral-600 text-lg max-w-2xl font-light dark:text-neutral-400">I focus on what matters: delivering value, moving fast, and building things that last.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TiltCard className="h-full">
                <div className="solid-card transition-colors duration-300 rounded-2xl p-8 space-y-5 h-full">
                   <div className="h-12 w-12 rounded-full bg-[var(--secondary)] flex items-center justify-center border border-[var(--border)]">
                      <Zap size={20} className="text-primary" />
                   </div>
                   <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">Fast & Reliable</h3>
                   <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                     Nobody likes a slow app. I build lightweight, lightning-fast interfaces that your users will love to interact with.
                   </p>
                </div>
              </TiltCard>

              <TiltCard className="h-full">
                <div className="solid-card transition-colors duration-300 rounded-2xl p-8 space-y-5 h-full">
                   <div className="h-12 w-12 rounded-full bg-[var(--secondary)] flex items-center justify-center border border-[var(--border)]">
                      <Cpu size={20} className="text-primary" />
                   </div>
                   <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">Smart Features</h3>
                   <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                     I integrate practical AI to automate tedious tasks, save you hours of manual work, and give your product a competitive edge.
                   </p>
                </div>
              </TiltCard>

              <TiltCard className="h-full">
                <div className="solid-card transition-colors duration-300 rounded-2xl p-8 space-y-5 h-full">
                   <div className="h-12 w-12 rounded-full bg-[var(--secondary)] flex items-center justify-center border border-[var(--border)]">
                      <Server size={20} className="text-primary" />
                   </div>
                   <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">Built to Scale</h3>
                   <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                     I design databases and servers that can handle 10 users or 10,000 users. Your app won't crash when you go viral.
                   </p>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="py-24 border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-foreground uppercase">Development Philosophy</h2>
              <p className="text-neutral-600 text-lg max-w-2xl font-light dark:text-neutral-400">My code is guided by principles that value long-term stability and genuine user utility over short-term trends.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="text-xs font-bold tracking-widest text-primary uppercase font-mono">01 / Zero Vibecoding</div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Intentional Architecture</h3>
                <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                  No copy-pasting unverified AI generations. Every library import, file structure, and design decision is backed by deep technical understanding and sound engineering design patterns.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-xs font-bold tracking-widest text-primary uppercase font-mono">02 / Performance First</div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Speed as a Feature</h3>
                <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                  Uptime, low latency, and highly responsive page transitions are non-negotiable. I build systems that are optimized from database indices to browser paint cycles.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-xs font-bold tracking-widest text-primary uppercase font-mono">03 / Human Simplicity</div>
                <h3 className="font-heading text-2xl font-bold text-foreground">No Tech Clutter</h3>
                <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                  Technology should empower, not confuse. I write documentation, user-flows, and copywriting that is fully human, straightforward, and completely jargon-free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES / WHAT I DO */}
        <section id="services" className="py-32 relative z-10 border-b border-[var(--border)]/60 bg-[var(--card)]/10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16 md:mb-24">
              <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-foreground uppercase">Services I Offer.</h2>
              <p className="text-neutral-600 text-lg max-w-2xl font-light dark:text-neutral-400">Custom software solutions designed to solve real business bottlenecks with AI and performance engineering.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TiltCard className="h-full">
                <div className="solid-card rounded-2xl p-8 space-y-6 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="font-sans text-[11px] font-bold tracking-widest text-primary uppercase">Intelligence</div>
                    <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">AI Integrations & Custom Agents</h3>
                    <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                      Build conversational bots, autonomous workflow agents, and semantic Search systems using LLMs (OpenAI, Anthropic) and vector databases. Turn static data repositories into active intelligent query pipelines.
                    </p>
                  </div>
                  <div className="border-t border-[var(--border)] pt-4 flex justify-between items-center text-xs font-semibold text-neutral-500 font-mono">
                    <span>Python / FastAPI / LangChain</span>
                    <span className="text-primary">→</span>
                  </div>
                </div>
              </TiltCard>

              <TiltCard className="h-full">
                <div className="solid-card rounded-2xl p-8 space-y-6 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="font-sans text-[11px] font-bold tracking-widest text-primary uppercase">Interfaces</div>
                    <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">High-Performance Web Applications</h3>
                    <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                      Deliver hyper-fast, visually premium user interfaces using Next.js, React 19, and Tailwind CSS. Structured with absolute layout accuracy, micro-animations, and client-side database management for fluid 60fps interaction.
                    </p>
                  </div>
                  <div className="border-t border-[var(--border)] pt-4 flex justify-between items-center text-xs font-semibold text-neutral-500 font-mono">
                    <span>Next.js / TypeScript / Tailwind</span>
                    <span className="text-primary">→</span>
                  </div>
                </div>
              </TiltCard>

              <TiltCard className="h-full">
                <div className="solid-card rounded-2xl p-8 space-y-6 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="font-sans text-[11px] font-bold tracking-widest text-primary uppercase">Structure</div>
                    <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">Scalable Databases & Systems</h3>
                    <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                      Design robust databases (PostgreSQL, MongoDB) and backend architectures equipped with caching systems (Redis) and Docker/Kubernetes container orchestration. Prepared to scale securely to meet rapid viral growth.
                    </p>
                  </div>
                  <div className="border-t border-[var(--border)] pt-4 flex justify-between items-center text-xs font-semibold text-neutral-500 font-mono">
                    <span>Docker / K8s / Redis / Postgres</span>
                    <span className="text-primary">→</span>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* HOW I WORK (PROCESS) */}
        <section id="process" className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16 md:mb-24 text-center">
              <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-foreground uppercase">How we get it done.</h2>
              <p className="text-neutral-600 text-lg max-w-2xl mx-auto font-light dark:text-neutral-400">A clear, no-nonsense process to turn your idea into a live product.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 rounded-full bg-[var(--secondary)] flex items-center justify-center mb-6 text-primary border border-[var(--border)]">
                  <Search size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">1. Understand</h3>
                <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                  We start by talking. No coding yet. I learn about your business goals, your users, and the exact problem we need to solve.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 relative">
                <div className="hidden md:block absolute top-14 -left-[20%] w-[40%] h-[1px] bg-[var(--border)]"></div>
                <div className="hidden md:block absolute top-14 -right-[20%] w-[40%] h-[1px] bg-[var(--border)]"></div>
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-6 text-primary-foreground shadow-sm animate-pulse">
                  <Terminal size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">2. Build</h3>
                <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                  I lock in and write clean, efficient code. You get regular updates and testing links so you can see the progress in real-time.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 rounded-full bg-[var(--secondary)] flex items-center justify-center mb-6 text-primary border border-[var(--border)]">
                  <Rocket size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">3. Launch</h3>
                <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                  We push the product live to the world. I ensure the servers are stable, fast, and ready to handle your users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section id="experience" className="py-24 border-y border-[var(--border)] bg-[var(--background)]/40">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-foreground">The Journey.</h2>
            
            <div className="space-y-12 pl-4 md:pl-0">
              
              <div className="relative pl-8 md:pl-0">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--border)]"></div>
                <div className="md:hidden absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-primary"></div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                  <div className="md:w-1/4 pt-1 md:text-right">
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Current</span>
                  </div>
                  <div className="md:w-3/4 pb-8 md:border-l md:border-[var(--border)] md:pl-12 relative">
                    <div className="hidden md:block absolute left-[-5px] top-2 h-2 w-2 rounded-full bg-primary ring-4 ring-[var(--background)]"></div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-4 w-4 text-neutral-400" />
                      <h3 className="font-heading text-xl font-bold text-foreground">Founder & AI Engineer</h3>
                    </div>
                    <p className="text-neutral-700 font-medium mb-3 dark:text-neutral-300">Nego AI & Prashne.ai</p>
                    <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                      Architecting and developing intelligent platforms. Building real-time WebRTC interview systems and AI-driven supply chain negotiation tools from scratch.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-0">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--border)]"></div>
                <div className="md:hidden absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                  <div className="md:w-1/4 pt-1 md:text-right">
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Current</span>
                  </div>
                  <div className="md:w-3/4 pb-8 md:border-l md:border-[var(--border)] md:pl-12 relative">
                    <div className="hidden md:block absolute left-[-5px] top-2 h-2 w-2 rounded-full bg-neutral-300 ring-4 ring-[var(--background)]"></div>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-4 w-4 text-neutral-400" />
                      <h3 className="font-heading text-xl font-bold text-foreground">B.S. in Data Science</h3>
                    </div>
                    <p className="text-neutral-700 font-medium mb-3 dark:text-neutral-300">IIT Madras</p>
                    <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                      Pursuing a rigorous degree focused on statistics, programming, and applied data science to build robust ML foundations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-0">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--border)]"></div>
                <div className="md:hidden absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                  <div className="md:w-1/4 pt-1 md:text-right">
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Current</span>
                  </div>
                  <div className="md:w-3/4 md:border-l md:border-[var(--border)] md:pl-12 relative">
                    <div className="hidden md:block absolute left-[-5px] top-2 h-2 w-2 rounded-full bg-neutral-300 ring-4 ring-[var(--background)]"></div>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-4 w-4 text-neutral-400" />
                      <h3 className="font-heading text-xl font-bold text-foreground">B.E. in AI & Machine Learning</h3>
                    </div>
                    <p className="text-neutral-700 font-medium mb-3 dark:text-neutral-300">BMS College of Engineering</p>
                    <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                      Deepening knowledge in advanced algorithms, artificial intelligence, and core software engineering principles.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="work" className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16 md:mb-24">
              <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-foreground uppercase">Selected Work.</h2>
              <p className="text-neutral-600 text-lg max-w-xl font-light dark:text-neutral-400">A look at some of the real-world problems I've solved through code.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {projects.map((project, idx) => (
                <TiltCard 
                  key={idx} 
                  className={`h-full ${
                    idx === 0 || idx === 3 ? "md:col-span-7" : "md:col-span-5"
                  }`}
                >
                  <div 
                    className="group flex flex-col justify-between solid-card p-8 rounded-2xl transition-all duration-300 h-full"
                  >
                    <div className="mb-8">
                       <div className="flex items-center gap-3 mb-4">
                         <div className="p-2 bg-[var(--secondary)] rounded-lg border border-[var(--border)] text-primary">
                           <Code2 size={18} />
                         </div>
                         <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">{project.title}</h3>
                       </div>
                       <p className="text-neutral-600 text-sm leading-relaxed font-light mb-6 dark:text-neutral-400">
                         {project.description}
                       </p>
                       
                       <div className="flex flex-wrap gap-2">
                         {project.tech.map(tech => (
                           <span 
                             key={tech} 
                             className="inline-flex items-center rounded-md bg-[var(--secondary)] px-2.5 py-1 text-[11px] font-medium text-neutral-600 dark:text-neutral-400 border border-[var(--border)]"
                           >
                             {tech}
                           </span>
                         ))}
                       </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 mt-auto border-t border-[var(--border)] pt-6">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex h-10 items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
                      >
                        Read Case Study
                      </button>
                      <Link 
                        href={project.link} 
                        target="_blank"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-transparent text-neutral-600 dark:text-neutral-400 hover:bg-[var(--secondary)] hover:text-foreground transition-colors"
                        title="View Live Site"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                      <Link 
                        href={project.github} 
                        target="_blank"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-transparent text-neutral-700 dark:text-neutral-300 hover:bg-[var(--secondary)] hover:text-foreground transition-colors"
                        title="View Code"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS / ARSENAL */}
        <section id="tools" className="py-32 border-y border-[var(--border)] bg-[var(--background)]/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-foreground uppercase">The Toolkit.</h2>
              <p className="text-neutral-600 text-lg max-w-2xl font-light dark:text-neutral-400">The technologies I use to bring ideas to life quickly and reliably.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((group, idx) => (
                <TiltCard key={idx} className="h-full">
                  <div className="solid-card rounded-2xl p-6 transition-all duration-300 h-full">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="bg-[var(--secondary)] p-2.5 rounded-lg border border-[var(--border)] text-primary">
                        {group.icon}
                      </div>
                      <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">{group.category}</h3>
                    </div>
                    <ul className="space-y-1">
                      {group.items.map(item => (
                        <li key={item.name} className="flex items-center text-neutral-600 dark:text-neutral-400 font-medium text-sm p-2 rounded-lg hover:bg-[var(--secondary)] hover:text-foreground transition-colors">
                          <div className="w-5 h-5 mr-3 flex items-center justify-center shrink-0">
                             <img 
                               src={item.iconUrl} 
                               alt={item.name} 
                               className="max-w-full max-h-full object-contain animate-fade-in"
                             />
                          </div>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section id="faq" className="py-32 relative z-10 border-t border-[var(--border)]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-foreground uppercase">Frequently Asked.</h2>
              <p className="text-neutral-600 text-lg max-w-xl mx-auto font-light dark:text-neutral-400">Answers to common questions about workflows, AI technology stacks, and database scaling.</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What is your typical workflow and project timeline?",
                  a: "I split work into three clear phases: discovery, development, and launch. Simple products take 1-2 weeks, while larger platforms with complex AI pipelines take 3-6 weeks, with regular testing links provided."
                },
                {
                  q: "How do you integrate AI capabilities into existing platforms?",
                  a: "I build lightweight, secure backend systems (primarily in FastAPI or Node.js) that hook into your databases, handle retrieval augmented generation (RAG) processes, connect to major LLM providers (OpenAI, Anthropic), and serve the data via clean REST APIs."
                },
                {
                  q: "Do you offer post-launch support and hosting configurations?",
                  a: "Yes. All projects include 30 days of active support, monitoring, and minor modifications. I deploy systems on scalable cloud providers (AWS, GCP, Vercel) and package them with Docker to ensure future-proof scaling."
                },
                {
                  q: "What roles or project types are you currently open to?",
                  a: "I am open to contract AI engineering roles, full-stack application development consulting, and building end-to-end MVPs for early-stage startups."
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="solid-card border border-[var(--border)] bg-[var(--card)] rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-foreground">
                      {item.q}
                    </span>
                    <span className="text-xl text-neutral-400 transition-transform duration-300 font-light select-none">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      openFaq === idx ? "max-h-[250px] border-t border-[var(--border)] p-6 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-neutral-600 text-sm font-light leading-relaxed dark:text-neutral-400">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-40 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-5xl md:text-8xl font-black tracking-tighter mb-6 text-foreground uppercase">
            Ready to build?
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl mb-10 max-w-xl mx-auto font-light leading-relaxed dark:text-neutral-400">
            If you have a project in mind, need a developer for your team, or just want to chat about tech—send me an email.
          </p>
          <Link 
            href="mailto:ujwal23062006@gmail.com"
            className="inline-flex items-center justify-center rounded-full px-10 h-16 text-base font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-sm"
          >
            <Mail className="mr-3 h-5 w-5" /> ujwal23062006@gmail.com
          </Link>
        </section>
      </main>

      {/* MINIMAL FOOTER */}
      <footer className="border-t border-[var(--border)] bg-[var(--card)] py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
             <span className="font-heading font-extrabold tracking-tighter text-lg text-foreground">ujwal.</span>
             <span className="text-neutral-500 text-sm font-light ml-2 dark:text-neutral-400">© 2026. Handcrafted.</span>
          </div>
          <div className="flex gap-2">
            <Link 
              href="https://github.com/ujwal209" 
              target="_blank"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-[var(--secondary)] text-neutral-400 dark:text-neutral-500 hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/ujwal-venkatesh-b85829326/" 
              target="_blank"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-[var(--secondary)] text-neutral-400 dark:text-neutral-500 hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-neutral-900/60 dark:bg-neutral-950/80 backdrop-blur-sm cursor-pointer animate-fade-in"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Modal Container */}
          <div className="relative bg-[var(--card)] border border-[var(--border)] max-w-2xl w-full p-8 rounded-3xl shadow-2xl z-10 max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[var(--secondary)] text-neutral-500 hover:text-foreground transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-primary font-bold tracking-wider uppercase">
                  {selectedProject.role}
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">
                  {selectedProject.title}
                </h3>
                <div className="flex gap-4 text-xs text-neutral-500 font-medium dark:text-neutral-400">
                  <span>Duration: {selectedProject.duration}</span>
                </div>
              </div>

              <div className="h-px bg-[var(--border)]" />

              {/* Description */}
              <div className="space-y-4">
                <h4 className="font-heading text-lg font-bold text-foreground">Detailed Description</h4>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm font-light leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="font-heading text-lg font-bold text-foreground">Key Engineering Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feat: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-300 font-light">
                      <span className="text-primary mt-1 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="font-heading text-lg font-bold text-foreground">Tech Stack Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string) => (
                    <span 
                      key={tech} 
                      className="inline-flex items-center rounded-md bg-[var(--secondary)] px-2.5 py-1 text-[11px] font-medium text-neutral-600 dark:text-neutral-400 border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-[var(--border)] pt-2" />

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  href={selectedProject.link} 
                  target="_blank"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  View Live Site <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href={selectedProject.github} 
                  target="_blank"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-transparent px-5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-[var(--secondary)] transition-colors"
                >
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Link>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] bg-transparent px-5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-[var(--secondary)] transition-colors cursor-pointer ml-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}