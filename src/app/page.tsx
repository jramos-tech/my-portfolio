"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sun, Moon } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem('darkMode');
      if (stored !== null) {
        setDarkMode(stored === 'true');
        return;
      }

      const mql = window.matchMedia?.('(prefers-color-scheme: dark)');
      const apply = (e: MediaQueryListEvent | MediaQueryList) => setDarkMode(!!e.matches);
      if (mql) {
        apply(mql);
        if (typeof mql.addEventListener === 'function') {
          mql.addEventListener('change', apply as any);
        } else {
          (mql as any).addListener(apply);
        }
        return () => {
          if (typeof mql.removeEventListener === 'function') {
            mql.removeEventListener('change', apply as any);
          } else {
            (mql as any).removeListener(apply);
          }
        };
      }
    } catch (e) { }
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => {
      const next = !prev;
      try { localStorage.setItem('darkMode', String(next)); } catch (e) { }
      return next;
    });
  };

  const projects = [
    {
      title: 'FULLBAY',
      role: 'QA Engineer',
      date: 'Jun 2025 – Sep 2025',
      desc: 'Collaborated with QA team to design test cases, execute complex scenarios, and ensure feature reliability using Agile and Jira.',
      tech: 'Jira · GitHub · Agile · QA',
    },
    {
      title: 'Frameworks Eyewear',
      role: 'Lead Software Developer',
      date: 'Mar 2025 – Jun 2025',
      desc: 'Directed enhancements to POS/ERP systems, coordinated mockups, and improved business workflows aligned with Agile practices.',
      tech: 'Python · PostgreSQL · ASP.NET · Trello',
    },
    {
      title: 'IAMAI Project',
      role: 'Scrum Master & Software Engineer',
      date: 'Jan 2025 – Mar 2025',
      desc: 'Led development of an AI platform with a React-based interface enabling real-time interaction through text, voice, and visuals.',
      tech: 'React · Python · Flask · AI · Agile',
    },
    {
      title: 'Neumont Capstone',
      role: 'Software Engineer',
      date: 'Sep 2024 – Dec 2024',
      desc: 'Built a social media analytics dashboard integrating APIs for real-time insights with an accessible React-based interface.',
      tech: 'React · Node.js · PostgreSQL · APIs',
    },
  ];

  return (
    <div className={darkMode ? 'dark bg-slate-900 text-gray-100' : 'bg-gray-50 text-gray-900'}>
      <nav className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-2xl font-bold">Jean Ramos</h1>
        <div className="flex gap-4 items-center">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#resume" className="hover:text-blue-500">Resume</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-4">
          Software Engineer | Full Stack | QA | Agile
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="max-w-2xl text-lg mb-8">
          I build efficient, scalable, and user-centered applications that connect design, data, and functionality.
        </motion.p>
        <div className="flex gap-4">
          <Button asChild><a href="#projects">View Projects</a></Button>
          <Button variant="outline" asChild><a href="#contact">Contact Me</a></Button>
        </div>
      </section>

      <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">About Me</h3>
        <p className="text-lg leading-relaxed text-center">
          I’m a versatile software engineer with hands-on experience across the software lifecycle — from development and testing to deployment and Agile leadership.
          My technical toolkit spans Python, JavaScript, SQL, Docker, and AWS. I’m passionate about crafting efficient, reliable, and user-focused solutions.
        </p>
      </section>

      <section id="projects" className="py-24 px-6 bg-gray-100 dark:bg-slate-800">
        <h3 className="text-3xl font-bold mb-12 text-center">Projects</h3>
        <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-500 mb-1">{p.role}</p>
                  <p className="text-sm text-gray-400 mb-3">{p.date}</p>
                  <p className="mb-3">{p.desc}</p>
                  <p className="text-sm italic text-gray-500">{p.tech}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="resume" className="py-24 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Resume</h3>
        <p className="mb-6">Download my full resume below for more details about my technical experience and education.</p>
        <Button asChild><a href="/JEAN_RAMOS.pdf" download>Download Resume</a></Button>
      </section>

      <section id="contact" className="py-24 px-6 bg-gray-100 dark:bg-slate-800 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <p className="mb-4">I’m open to software development, QA, and full-stack opportunities.</p>
        <p>Email: <a href="mailto:jeanmanuel466@gmail.com" className="text-blue-500 hover:underline">jeanmanuel466@gmail.com</a></p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/jramos-tech" className="hover:text-blue-500">GitHub</a>
          <a href="https://www.linkedin.com/in/jean-m-ramos-dev" className="hover:text-blue-500">LinkedIn</a>
        </div>
      </section>

      <footer className="py-6 text-center text-sm border-t border-gray-200 dark:border-gray-700">
        © 2025 Jean Ramos — Crafted with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}
