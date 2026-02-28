"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { 
  Github, Linkedin, Mail, ExternalLink, Code2, 
  Terminal, Database, Layout, BrainCircuit, 
  ChevronRight, Sun, Moon, Instagram, Sparkles, 
  Atom, Globe, Wind, FileCode2, Workflow, Server, 
  Leaf, Cpu, MessageSquare, Network, Box, Cloud, 
  MonitorPlay, Zap, GitBranch, Layers
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Portfolio() {
  const { theme, setTheme } = useTheme();

  // Updated projects with your actual image paths
  const projects = [
    {
      title: "Prashne.ai",
      description: "An AI-Powered Real-time Interview Platform conducting mock interviews with instant feedback using advanced LLMs and speech recognition.",
      tech: ["Next.js", "OpenAI", "Tailwind", "WebRTC"],
      link: "https://prashne.ai", 
      github: "https://github.com/ujwal209",
      image: "/prashne.png",
      featured: true
    },
    {
      title: "Nego AI",
      description: "Intelligent Supply Chain & B2B Negotiation Platform. Streamlines vendor communication and automates procurement workflows using AI agents.",
      tech: ["Next.js", "TypeScript", "Tailwind", "AI Agents", "MongoDB"],
      link: "https://negoai.tech",
      github: "https://github.com/ujwal209",
      image: "/nego.png",
      featured: false
    },
    {
      title: "Expenzoid",
      description: "AI-Powered Expense Tracker. Uses advanced OCR and NLP to automatically parse receipts and categorize expenses with 95% accuracy.",
      tech: ["Python", "TensorFlow", "React", "MongoDB"],
      link: "https://expenzoide.vercel.app",
      github: "https://github.com/ujwal209",
      image: "/exp.png",
      featured: false
    },
    {
      title: "InfraCore",
      description: "A comprehensive resource and collaboration hub built specifically for engineering students to share notes, projects, and connect.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      link: "https://inferacore.vercel.app",
      github: "https://github.com/ujwal209",
      image: "/icore.png",
      featured: false
    }
  ];

  // Upgraded skills array with individual icons and an "Advanced" category
  const skillCategories = [
    { 
      category: "Frontend Engineering", 
      icon: <Layout className="h-6 w-6 text-[#A64AFF]" />, 
      items: [
        { name: "React.js", icon: <Atom size={16} /> },
        { name: "Next.js", icon: <Globe size={16} /> },
        { name: "Tailwind CSS", icon: <Wind size={16} /> },
        { name: "TypeScript", icon: <FileCode2 size={16} /> },
        { name: "Redux", icon: <Workflow size={16} /> }
      ] 
    },
    { 
      category: "Backend Architecture", 
      icon: <Server className="h-6 w-6 text-[#A64AFF]" />, 
      items: [
        { name: "Node.js", icon: <Server size={16} /> },
        { name: "Express", icon: <MonitorPlay size={16} /> },
        { name: "MongoDB", icon: <Leaf size={16} /> },
        { name: "PostgreSQL", icon: <Database size={16} /> },
        { name: "REST APIs", icon: <Network size={16} /> }
      ] 
    },
    { 
      category: "AI & Machine Learning", 
      icon: <BrainCircuit className="h-6 w-6 text-[#A64AFF]" />, 
      items: [
        { name: "Python", icon: <Terminal size={16} /> },
        { name: "TensorFlow", icon: <Cpu size={16} /> },
        { name: "NLP", icon: <MessageSquare size={16} /> },
        { name: "LangChain", icon: <GitBranch size={16} /> },
        { name: "Custom LLMs", icon: <BrainCircuit size={16} /> }
      ] 
    },
    { 
      category: "Advanced & DevOps", 
      icon: <Zap className="h-6 w-6 text-[#A64AFF]" />, 
      items: [
        { name: "System Design", icon: <Layers size={16} /> },
        { name: "WebRTC Streaming", icon: <MonitorPlay size={16} /> },
        { name: "RAG Pipelines", icon: <Network size={16} /> },
        { name: "Docker & AWS", icon: <Cloud size={16} /> },
        { name: "Git & Linux", icon: <Terminal size={16} /> }
      ] 
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#A64AFF]/30 font-sans transition-colors duration-500 overflow-x-hidden">
      
      {/* GLOBAL BACKGROUND STYLES */}
      <style dangerouslySetInline={{__html: `
        .bg-grid-pattern {
          background-image: radial-gradient(rgba(166, 74, 255, 0.15) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}} />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-2xl border-b border-border/50 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-tighter flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Sparkles className="h-6 w-6 text-[#A64AFF]" />
            ujwaldev<span className="text-[#A64AFF]">.me</span>
          </Link>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex gap-8 text-sm font-bold text-muted-foreground">
              <Link href="#capabilities" className="hover:text-foreground transition-colors">Capabilities</Link>
              <Link href="#projects" className="hover:text-foreground transition-colors">Work</Link>
              <Link href="#arsenal" className="hover:text-foreground transition-colors">Arsenal</Link>
            </div>
            <div className="h-6 w-px bg-border hidden md:block"></div>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="rounded-full hover:bg-[#A64AFF]/10 hover:text-[#A64AFF]">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </nav>

      <main>
        
        {/* MASSIVE HERO SECTION */}
        <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 px-6 flex flex-col items-center justify-center min-h-screen">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] -z-20 opacity-60"></div>
          
          {/* Purple Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-[#A64AFF]/20 rounded-full blur-[150px] -z-10 pointer-events-none mix-blend-screen dark:mix-blend-lighten animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen dark:mix-blend-lighten"></div>

          <div className="max-w-5xl mx-auto w-full space-y-10 relative z-10 text-center">
            
            <Badge variant="outline" className="px-4 py-2 text-sm font-bold rounded-full bg-background/50 backdrop-blur-md border-[#A64AFF]/30 text-[#A64AFF] shadow-[0_0_20px_rgba(166,74,255,0.2)] inline-flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A64AFF] opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A64AFF]"></span>
              </span>
              Available for Impactful Roles
            </Badge>

            <div className="space-y-6">
              <h1 className="text-6xl sm:text-8xl md:text-[7rem] font-black tracking-tighter leading-[0.95]">
                Bridging Code & <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#A64AFF] to-indigo-500">
                  Cognition.
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed mt-8">
                I am <span className="text-foreground font-bold">Ujwal Venkatesh</span>. An AI Engineer specializing in integrating complex Machine Learning models into beautiful, scalable full-stack web applications.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
                <Button size="lg" asChild className="rounded-full px-10 h-16 font-bold text-lg bg-[#A64AFF] hover:bg-[#8f3ce0] text-white shadow-[0_0_30px_rgba(166,74,255,0.4)] hover:scale-105 transition-all">
                  <Link href="#projects">View Architecture <ChevronRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" asChild className="rounded-full h-16 w-16 border-border hover:bg-[#A64AFF]/10 hover:text-[#A64AFF] hover:border-[#A64AFF]/50 transition-all bg-background/50 backdrop-blur-md">
                    <Link href="https://github.com/ujwal209" target="_blank"><Github className="h-6 w-6" /></Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="rounded-full h-16 w-16 border-border hover:bg-[#A64AFF]/10 hover:text-[#A64AFF] hover:border-[#A64AFF]/50 transition-all bg-background/50 backdrop-blur-md">
                    <Link href="https://www.linkedin.com/in/ujwal-venkatesh-b85829326/" target="_blank"><Linkedin className="h-6 w-6" /></Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="rounded-full h-16 w-16 border-border hover:bg-[#A64AFF]/10 hover:text-[#A64AFF] hover:border-[#A64AFF]/50 transition-all bg-background/50 backdrop-blur-md">
                    <Link href="https://instagram.com/pn.kl8" target="_blank"><Instagram className="h-6 w-6" /></Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CORE CAPABILITIES (New Content Section replacing Stats) */}
        <section id="capabilities" className="py-24 bg-muted/30 border-y border-border/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">Core Capabilities</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">Delivering end-to-end solutions that scale.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <Card className="bg-background border-border shadow-xl shadow-black/5 dark:shadow-none hover:border-[#A64AFF]/50 transition-all duration-500 rounded-[2rem] overflow-hidden group">
                 <CardContent className="p-10 space-y-6">
                    <div className="h-16 w-16 rounded-2xl bg-[#A64AFF]/10 text-[#A64AFF] flex items-center justify-center group-hover:scale-110 transition-transform">
                       <Layout size={32} />
                    </div>
                    <h3 className="text-2xl font-bold">Modern Full-Stack</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      Building highly responsive, accessible, and performant web applications using Next.js, React, and Tailwind CSS backed by robust Node.js architectures.
                    </p>
                 </CardContent>
               </Card>

               <Card className="bg-background border-border shadow-xl shadow-black/5 dark:shadow-none hover:border-[#A64AFF]/50 transition-all duration-500 rounded-[2rem] overflow-hidden group relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#A64AFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <CardContent className="p-10 space-y-6 relative z-10">
                    <div className="h-16 w-16 rounded-2xl bg-[#A64AFF]/10 text-[#A64AFF] flex items-center justify-center group-hover:scale-110 transition-transform">
                       <BrainCircuit size={32} />
                    </div>
                    <h3 className="text-2xl font-bold">AI Integration</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      Seamlessly embedding LLMs, Computer Vision (OCR), and NLP models into user workflows to automate tasks and create intelligent, context-aware platforms.
                    </p>
                 </CardContent>
               </Card>

               <Card className="bg-background border-border shadow-xl shadow-black/5 dark:shadow-none hover:border-[#A64AFF]/50 transition-all duration-500 rounded-[2rem] overflow-hidden group">
                 <CardContent className="p-10 space-y-6">
                    <div className="h-16 w-16 rounded-2xl bg-[#A64AFF]/10 text-[#A64AFF] flex items-center justify-center group-hover:scale-110 transition-transform">
                       <Database size={32} />
                    </div>
                    <h3 className="text-2xl font-bold">Scalable Systems</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      Designing secure databases, real-time WebRTC communication pipelines, and cloud-deployed environments (AWS) for high-availability enterprise applications.
                    </p>
                 </CardContent>
               </Card>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Selected Architecture.</h2>
              <p className="text-muted-foreground text-xl max-w-2xl font-medium">Real-world systems where sophisticated backend logic meets seamless frontend experiences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project, idx) => (
                <Card key={idx} className={cn("flex flex-col overflow-hidden border-border bg-card shadow-2xl shadow-black/5 dark:shadow-none hover:shadow-[#A64AFF]/10 hover:border-[#A64AFF]/30 transition-all duration-700 group rounded-[2.5rem]", project.featured ? "md:col-span-2 md:flex-row" : "")}>
                  
                  {/* Clean Mock Browser Image Container */}
                  <div className={cn("bg-muted border-b md:border-b-0 md:border-r border-border relative overflow-hidden flex flex-col", project.featured ? "w-full md:w-[60%] min-h-[350px]" : "w-full aspect-[4/3]")}>
                     {/* Browser Chrome */}
                     <div className="h-12 bg-background/50 backdrop-blur-md border-b border-border/50 flex items-center px-5 gap-2 shrink-0 z-20 absolute top-0 w-full">
                        <div className="flex gap-1.5">
                           <div className="h-3 w-3 rounded-full bg-red-400"></div>
                           <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                           <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                        </div>
                        <div className="mx-auto bg-background/80 border border-border h-7 w-1/2 rounded-md text-[10px] text-muted-foreground flex items-center justify-center font-mono shadow-sm">
                           {project.link.replace('https://', '')}
                        </div>
                     </div>
                     {/* Actual Project Image */}
                     <div className="flex-1 relative w-full h-full mt-12 overflow-hidden bg-background">
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                     </div>
                  </div>

                  <div className={cn("flex flex-col p-8 md:p-12 justify-between bg-background z-10", project.featured ? "w-full md:w-[40%]" : "flex-1")}>
                    <div>
                       <div className="flex items-center justify-between mb-4">
                          <h3 className="text-3xl font-black tracking-tight">{project.title}</h3>
                       </div>
                       <p className="text-muted-foreground text-lg leading-relaxed font-medium mb-8">{project.description}</p>
                       <div className="flex flex-wrap gap-2 mb-10">
                         {project.tech.map(tech => (
                           <Badge key={tech} variant="secondary" className="bg-[#A64AFF]/10 text-[#A64AFF] font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-lg border-none">
                             {tech}
                           </Badge>
                         ))}
                       </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-auto">
                      <Button asChild variant="default" size="lg" className="rounded-xl font-bold bg-foreground text-background hover:bg-[#A64AFF] hover:text-white transition-colors">
                        <Link href={project.link} target="_blank">
                           Live Deployment <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="rounded-xl font-bold border-border hover:bg-muted">
                        <Link href={project.github} target="_blank">
                          <Github className="mr-2 h-5 w-5" /> Source
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* HIGH-END SKILLS SECTION */}
        <section id="arsenal" className="bg-muted/30 py-32 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center">
              <Badge variant="outline" className="px-4 py-2 mb-6 text-xs font-bold rounded-full border-[#A64AFF]/30 text-[#A64AFF]">
                Technical Proficiencies
              </Badge>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">The Arsenal.</h2>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">A highly curated stack utilized to engineer robust, intelligent, and scalable applications.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillCategories.map((group, idx) => (
                <div key={idx} className="bg-background border border-border rounded-[2rem] p-8 hover:border-[#A64AFF]/50 hover:shadow-[0_0_30px_rgba(166,74,255,0.1)] transition-all duration-500 shadow-lg shadow-black/5 dark:shadow-none group">
                  <div className="mb-8 transform group-hover:scale-110 transition-transform origin-left bg-muted w-fit p-4 rounded-2xl">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-black tracking-tight mb-8">{group.category}</h3>
                  <ul className="space-y-5">
                    {group.items.map(item => (
                      <li key={item.name} className="flex items-center text-muted-foreground font-semibold text-base group/item hover:text-foreground transition-colors">
                        <div className="bg-muted p-2 rounded-lg mr-4 text-foreground/50 group-hover/item:text-[#A64AFF] group-hover/item:bg-[#A64AFF]/10 transition-colors">
                           {item.icon}
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
        <section id="contact" className="py-32 max-w-5xl mx-auto px-6 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#A64AFF]/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
            Ready to <br/> collaborate?
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
            Whether you have a complex problem to solve, an innovative product to build, or an engineering role to fill—my inbox is open.
          </p>
          <Button size="lg" asChild className="rounded-full px-12 h-20 text-xl font-bold bg-[#A64AFF] hover:bg-[#8f3ce0] text-white shadow-[0_0_40px_rgba(166,74,255,0.3)] hover:scale-105 transition-transform">
            <Link href="mailto:ujwal23062006@gmail.com">
              <Mail className="mr-3 h-6 w-6" /> ujwal23062006@gmail.com
            </Link>
          </Button>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/50 bg-background py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
             <Sparkles className="h-5 w-5 text-[#A64AFF]" />
             <span className="font-black tracking-tight text-lg">ujwaldev.me</span>
             <span className="text-muted-foreground text-sm font-medium ml-2">© 2026. Engineered with Next.js & Tailwind</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-[#A64AFF]/10 hover:text-[#A64AFF] text-muted-foreground transition-colors">
              <Link href="https://github.com/ujwal209" target="_blank"><Github className="h-5 w-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-[#A64AFF]/10 hover:text-[#A64AFF] text-muted-foreground transition-colors">
              <Link href="https://www.linkedin.com/in/ujwal-venkatesh-b85829326/" target="_blank"><Linkedin className="h-5 w-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-[#A64AFF]/10 hover:text-[#A64AFF] text-muted-foreground transition-colors">
              <Link href="https://instagram.com/pn.kl8" target="_blank"><Instagram className="h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}