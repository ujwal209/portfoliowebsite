"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { 
  Github, Linkedin, Mail, ExternalLink, 
  Sun, Moon, Layout, Server, Zap, Code2, 
  ShieldCheck, Cpu, Search, Terminal, Rocket, GraduationCap, Briefcase
} from "lucide-react";

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch for theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: "Prashne.ai",
      description: "An automated mock-interview platform. It listens to user answers and provides instant, realistic feedback to help candidates prep for real jobs.",
      tech: ["Next.js", "OpenAI", "Tailwind", "WebRTC"],
      link: "https://prashne.ai", 
      github: "https://github.com/ujwal209",
    },
    {
      title: "Nego AI",
      description: "A smart negotiation tool for businesses. It talks to vendors and automates the boring parts of supply chain purchasing, saving companies time and money.",
      tech: ["Next.js", "TypeScript", "Tailwind", "AI Agents", "MongoDB"],
      link: "https://negoai.tech",
      github: "https://github.com/ujwal209",
    },
    {
      title: "Expenzoid",
      description: "A smart expense tracker. Just snap a picture of a receipt, and the app reads the text and categorizes your spending automatically.",
      tech: ["Python", "TensorFlow", "React", "MongoDB"],
      link: "https://expenzoide.vercel.app",
      github: "https://github.com/ujwal209",
    },
    {
      title: "InfraCore",
      description: "A clean, fast platform for engineering students to share class notes, collaborate on projects, and connect with each other.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      link: "https://inferacore.vercel.app",
      github: "https://github.com/ujwal209",
    }
  ];

  const skillCategories = [
    { 
      category: "What User Sees", 
      icon: <Layout className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />, 
      items: [
        { name: "React.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invertDark: true },
        { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" }
      ] 
    },
    { 
      category: "Behind The Scenes", 
      icon: <Server className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />, 
      items: [
        { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invertDark: true },
        { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" }
      ] 
    },
    { 
      category: "Making It Smart", 
      icon: <Cpu className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />, 
      items: [
        { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "TensorFlow", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
        { name: "Pandas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", invertDark: true },
        { name: "Scikit-Learn", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" }
      ] 
    },
    { 
      category: "Keeping It Running", 
      icon: <ShieldCheck className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />, 
      items: [
        { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invertDark: true },
        { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Linux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" }
      ] 
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-neutral-200 dark:selection:bg-neutral-800 transition-colors duration-500 overflow-x-hidden font-sans">
      
      {/* TYPOGRAPHY & NOISE STYLES */}
      <style dangerouslySetInline={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap');

        :root {
          --font-heading: 'Outfit', sans-serif;
          --font-body: 'Google Sans', sans-serif;
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
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-900 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <Link href="/" className="group flex items-center gap-1">
            <span className="font-heading font-extrabold text-2xl tracking-tighter text-black dark:text-white">
              ujwal<span className="text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">.</span>
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              <Link href="#why-me" className="hover:text-black dark:hover:text-white transition-colors">Why Me</Link>
              <Link href="#process" className="hover:text-black dark:hover:text-white transition-colors">Process</Link>
              <Link href="#work" className="hover:text-black dark:hover:text-white transition-colors">Work</Link>
            </div>
            <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-800 hidden md:block"></div>
            
            {mounted && (
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="relative z-10 bg-noise">
        
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 flex flex-col items-center justify-center min-h-[90vh]">
          {/* Subtle Glow Effect */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-black dark:bg-white opacity-[0.02] rounded-full blur-[120px] pointer-events-none -z-10"></div>
          
          <div className="max-w-3xl mx-auto w-full space-y-8 text-center relative z-10">
            <div className="space-y-8">
              <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[1.05] text-black dark:text-white">
                I build apps that <br className="hidden md:block"/>
                <span className="text-neutral-400 dark:text-neutral-500">simply work.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
                Hi, I'm <strong className="text-black dark:text-white font-medium">Ujwal Venkatesh</strong>. I help teams and businesses turn complex ideas into fast, reliable, and user-friendly software. No fluff, just clean code that solves real problems.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Link 
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full px-8 h-14 font-medium text-sm bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors w-full sm:w-auto"
                >
                  See my work
                </Link>
                
                <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                  <Link 
                    href="https://github.com/ujwal209" 
                    target="_blank"
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="https://www.linkedin.com/in/ujwal-venkatesh-b85829326/" 
                    target="_blank"
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section id="why-me" className="py-24 border-y border-neutral-200 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16 md:mb-24">
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-black dark:text-white">Why work with me?</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl font-light">I focus on what matters: delivering value, moving fast, and building things that last.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="border border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-300 rounded-2xl p-8 space-y-5 shadow-sm dark:shadow-none">
                  <div className="h-12 w-12 rounded-full bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
                     <Zap size={20} className="text-black dark:text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-black dark:text-white">Fast & Reliable</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm font-light leading-relaxed">
                    Nobody likes a slow app. I build lightweight, lightning-fast interfaces that your users will love to interact with.
                  </p>
               </div>

               <div className="border border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-300 rounded-2xl p-8 space-y-5 shadow-sm dark:shadow-none">
                  <div className="h-12 w-12 rounded-full bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
                     <Cpu size={20} className="text-black dark:text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-black dark:text-white">Smart Features</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm font-light leading-relaxed">
                    I integrate practical AI to automate tedious tasks, save you hours of manual work, and give your product a competitive edge.
                  </p>
               </div>

               <div className="border border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-300 rounded-2xl p-8 space-y-5 shadow-sm dark:shadow-none">
                  <div className="h-12 w-12 rounded-full bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
                     <Server size={20} className="text-black dark:text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-black dark:text-white">Built to Scale</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm font-light leading-relaxed">
                    I design databases and servers that can handle 10 users or 10,000 users. Your app won't crash when you go viral.
                  </p>
               </div>
            </div>
          </div>
        </section>

        {/* HOW I WORK (PROCESS) */}
        <section id="process" className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16 md:mb-24 text-center">
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-black dark:text-white">How we get it done.</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto font-light">A clear, no-nonsense process to turn your idea into a live product.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center mb-6 text-black dark:text-white border border-neutral-200 dark:border-neutral-800">
                  <Search size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-black dark:text-white">1. Understand</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm font-light leading-relaxed">
                  We start by talking. No coding yet. I learn about your business goals, your users, and the exact problem we need to solve.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 relative">
                <div className="hidden md:block absolute top-14 -left-[20%] w-[40%] h-[1px] bg-neutral-300 dark:bg-neutral-800"></div>
                <div className="hidden md:block absolute top-14 -right-[20%] w-[40%] h-[1px] bg-neutral-300 dark:bg-neutral-800"></div>
                <div className="h-16 w-16 rounded-full bg-black dark:bg-white flex items-center justify-center mb-6 text-white dark:text-black shadow-lg">
                  <Terminal size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-black dark:text-white">2. Build</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm font-light leading-relaxed">
                  I lock in and write clean, efficient code. You get regular updates and testing links so you can see the progress in real-time.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center mb-6 text-black dark:text-white border border-neutral-200 dark:border-neutral-800">
                  <Rocket size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-black dark:text-white">3. Launch</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm font-light leading-relaxed">
                  We push the product live to the world. I ensure the servers are stable, fast, and ready to handle your users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section id="experience" className="py-24 border-y border-neutral-200 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950/30">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-black dark:text-white">The Journey.</h2>
            
            <div className="space-y-12 pl-4 md:pl-0">
              
              <div className="relative pl-8 md:pl-0">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-300 dark:bg-neutral-800"></div>
                <div className="md:hidden absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-black dark:bg-white"></div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                  <div className="md:w-1/4 pt-1 md:text-right">
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Current</span>
                  </div>
                  <div className="md:w-3/4 pb-8 md:border-l md:border-neutral-300 dark:md:border-neutral-800 md:pl-12 relative">
                    <div className="hidden md:block absolute left-[-5px] top-2 h-2 w-2 rounded-full bg-black dark:bg-white ring-4 ring-neutral-50 dark:ring-neutral-950"></div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-4 w-4 text-neutral-400" />
                      <h3 className="font-heading text-xl font-bold text-black dark:text-white">Founder & AI Engineer</h3>
                    </div>
                    <p className="text-black dark:text-white font-medium mb-3">Nego AI & Prashne.ai</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm font-light leading-relaxed">
                      Architecting and developing intelligent platforms. Building real-time WebRTC interview systems and AI-driven supply chain negotiation tools from scratch.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-0">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-300 dark:bg-neutral-800"></div>
                <div className="md:hidden absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                  <div className="md:w-1/4 pt-1 md:text-right">
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Current</span>
                  </div>
                  <div className="md:w-3/4 pb-8 md:border-l md:border-neutral-300 dark:md:border-neutral-800 md:pl-12 relative">
                    <div className="hidden md:block absolute left-[-5px] top-2 h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700 ring-4 ring-neutral-50 dark:ring-neutral-950"></div>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-4 w-4 text-neutral-400" />
                      <h3 className="font-heading text-xl font-bold text-black dark:text-white">B.S. in Data Science</h3>
                    </div>
                    <p className="text-black dark:text-white font-medium mb-3">IIT Madras</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm font-light leading-relaxed">
                      Pursuing a rigorous degree focused on statistics, programming, and applied data science to build robust ML foundations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-0">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-300 dark:bg-neutral-800"></div>
                <div className="md:hidden absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                  <div className="md:w-1/4 pt-1 md:text-right">
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Current</span>
                  </div>
                  <div className="md:w-3/4 md:border-l md:border-neutral-300 dark:md:border-neutral-800 md:pl-12 relative">
                    <div className="hidden md:block absolute left-[-5px] top-2 h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700 ring-4 ring-neutral-50 dark:ring-neutral-950"></div>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-4 w-4 text-neutral-400" />
                      <h3 className="font-heading text-xl font-bold text-black dark:text-white">B.E. in AI & Machine Learning</h3>
                    </div>
                    <p className="text-black dark:text-white font-medium mb-3">BMS College of Engineering</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm font-light leading-relaxed">
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
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-black dark:text-white">Selected Work.</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-xl font-light">A look at some of the real-world problems I've solved through code.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div 
                  key={idx} 
                  className="group flex flex-col justify-between bg-white dark:bg-black border border-neutral-200 dark:border-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 p-8 rounded-2xl transition-all duration-300 shadow-sm dark:shadow-none"
                >
                  <div className="mb-8">
                     <div className="flex items-center gap-3 mb-4">
                       <div className="p-2 bg-neutral-50 dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400">
                         <Code2 size={18} />
                       </div>
                       <h3 className="font-heading text-2xl font-bold tracking-tight text-black dark:text-white">{project.title}</h3>
                     </div>
                     <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light mb-6">
                       {project.description}
                     </p>
                     
                     <div className="flex flex-wrap gap-2">
                       {project.tech.map(tech => (
                         <span 
                           key={tech} 
                           className="inline-flex items-center rounded-md bg-neutral-100 dark:bg-neutral-950 px-2.5 py-1 text-[11px] font-medium text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800"
                         >
                           {tech}
                         </span>
                       ))}
                     </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-auto border-t border-neutral-200 dark:border-neutral-900 pt-6">
                    <Link 
                      href={project.link} 
                      target="_blank"
                      className="inline-flex h-10 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black px-4 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                    >
                      View Live Site <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </Link>
                    <Link 
                      href={project.github} 
                      target="_blank"
                      className="inline-flex h-10 items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-800 bg-transparent px-4 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS / ARSENAL */}
        <section id="tools" className="py-32 border-y border-neutral-200 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-black dark:text-white">The Toolkit.</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl font-light">The technologies I use to bring ideas to life quickly and reliably.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((group, idx) => (
                <div key={idx} className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-900 rounded-2xl p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm dark:shadow-none">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="bg-neutral-50 dark:bg-neutral-950 p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800">
                      {group.icon}
                    </div>
                    <h3 className="font-heading text-lg font-bold tracking-tight text-black dark:text-white">{group.category}</h3>
                  </div>
                  <ul className="space-y-1">
                    {group.items.map(item => (
                      <li key={item.name} className="flex items-center text-neutral-600 dark:text-neutral-400 font-medium text-sm p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white transition-colors">
                        <div className="w-5 h-5 mr-3 flex items-center justify-center shrink-0">
                           <img 
                             src={item.iconUrl} 
                             alt={item.name} 
                             className={`max-w-full max-h-full object-contain ${item.invertDark ? "dark:invert dark:brightness-200" : ""}`}
                           />
                        </div>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-40 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-5xl md:text-7xl font-black tracking-tighter mb-6 text-black dark:text-white">
            Ready to build?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl mb-10 max-w-xl mx-auto font-light leading-relaxed">
            If you have a project in mind, need a developer for your team, or just want to chat about tech—send me an email.
          </p>
          <Link 
            href="mailto:ujwal23062006@gmail.com"
            className="inline-flex items-center justify-center rounded-full px-10 h-16 text-base font-medium bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-md dark:shadow-none"
          >
            <Mail className="mr-3 h-5 w-5" /> ujwal23062006@gmail.com
          </Link>
        </section>
      </main>

      {/* MINIMAL FOOTER */}
      <footer className="border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
             <span className="font-heading font-extrabold tracking-tighter text-lg text-black dark:text-white">ujwal.</span>
             <span className="text-neutral-500 dark:text-neutral-600 text-sm font-light ml-2">© 2026. Handcrafted.</span>
          </div>
          <div className="flex gap-2">
            <Link 
              href="https://github.com/ujwal209" 
              target="_blank"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/ujwal-venkatesh-b85829326/" 
              target="_blank"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}