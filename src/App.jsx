import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Moon, Sun, Award } from 'lucide-react';

const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/tanmay-shankar2911/',
  github: 'https://github.com/tanmays2k6',
};

const projectLinks = {
  rakshaNav: 'https://rakshanav.vercel.app/',
  ecoEats: 'https://eco-eats-full-j5yr.vercel.app/',
};

const LinkedInLogo = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1h.02C3.87 1 4.98 2.12 4.98 3.5ZM.5 8h4V23h-4ZM8 8h3.83v2.05h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V23h-4v-7.03c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V23H8Z" />
  </svg>
);

const GitHubLogo = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.08 1.83 2.82 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.16 0 0 1.01-.32 3.3 1.23A11.4 11.4 0 0 1 12 6.58c1.02 0 2.05.14 3.01.4 2.29-1.55 3.29-1.23 3.29-1.23.66 1.64.25 2.86.12 3.16.77.84 1.23 1.91 1.23 3.22 0 4.6-2.81 5.61-5.49 5.91.43.37.82 1.1.82 2.23v3.3c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
  </svg>
);

const experienceItems = [
  {
    role: 'Software Developer Intern',
    org: 'FlowEazy Software',
    period: 'Mar 2026 - May 2026',
    desc: 'Built and shipped XML-based workflow modules in Odoo ERP for a WhatsApp-native business OS, automating data routing and eliminating manual handoffs. Wrote Python scripts to parse and transform ERP payloads and owned 2 sprint features end-to-end.',
  },
  {
    role: 'Campus Ambassador',
    org: 'IISc Rhapsody 3.0',
    period: 'Feb 2025 - Mar 2025',
    desc: 'Recognised as Runner-Up Campus Ambassador; drove targeted peer outreach that grew SMVIT event registrations by 40%.',
  },
  {
    role: 'Digital Marketing Intern',
    org: 'Acadboost Technologies Pvt. Ltd.',
    period: 'Aug 2024 - Sept 2024',
    desc: 'Ran controlled A/B experiments across post formats, timing, and hashtag strategies on X and drove a 2x engagement lift with 35% organic impression growth in 28 days.',
  },
  {
    role: 'Digital Marketing Intern',
    org: 'AICRA',
    period: 'May 2024 - Aug 2024',
    desc: "Executed data-driven Facebook ad campaigns for India's largest startup conclave, generating 1,000+ qualified leads while reducing cost-per-lead by 18%.",
  },
  {
    role: 'Content Writing Intern',
    org: 'Vyanra Creations Pvt. Ltd.',
    period: 'Jun 2021 - Sep 2021',
    desc: "Wrote SEO-optimised meta descriptions and platform-specific copy that improved organic discoverability across the organisation's content pipeline.",
  },
];

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14 },
    },
  };

  const shellClass = darkMode
    ? 'bg-[#140f23] text-zinc-50'
    : 'bg-[#fff7ed] text-slate-900';
  const panelClass = darkMode
    ? 'border-white/10 bg-white/5'
    : 'border-orange-200/80 bg-white/80';
  const softTextClass = darkMode ? 'text-zinc-300' : 'text-slate-600';
  const mutedTextClass = darkMode ? 'text-zinc-400' : 'text-slate-500';
  const monoAccentClass = darkMode ? 'text-fuchsia-300' : 'text-fuchsia-700';

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${shellClass}`}>
      <div className="fixed inset-0 -z-10">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? 'bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.22),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_24%),linear-gradient(180deg,_#140f23_0%,_#09090f_100%)]'
              : 'bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_26%),linear-gradient(180deg,_#fff7ed_0%,_#fff1f2_100%)]'
          }`}
        />
        <div
          className={`absolute inset-x-0 top-24 mx-auto h-64 w-64 rounded-full blur-3xl sm:h-72 sm:w-72 ${
            darkMode ? 'bg-cyan-500/15' : 'bg-amber-300/30'
          }`}
        />
      </div>

      <nav
        className={`fixed top-0 z-50 w-full border-b backdrop-blur-xl ${
          darkMode ? 'border-white/10 bg-[#140f23]/70' : 'border-orange-200/70 bg-[#fff7ed]/75'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border text-sm font-black sm:h-10 sm:w-10 ${
                darkMode
                  ? 'border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-200'
                  : 'border-fuchsia-300 bg-fuchsia-100 text-fuchsia-700'
              }`}
            >
              TS
            </div>
            <span className="text-base font-black tracking-tight sm:text-xl">Tanmay Shankar</span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`rounded-full border p-2.5 transition-colors ${
              darkMode
                ? 'border-white/10 bg-white/5 hover:bg-white/10'
                : 'border-orange-200 bg-white/70 hover:bg-white'
            }`}
            aria-label="Toggle color mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid items-start gap-6 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="space-y-6 sm:space-y-7">
            <motion.div variants={fadeUp} className="inline-flex">
              <span
                className={`rounded-full border px-4 py-1.5 text-xs font-mono ${
                  darkMode
                    ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                    : 'border-emerald-300 bg-emerald-50 text-emerald-700'
                }`}
              >
                Available for Opportunities
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <p className={`font-mono text-xs uppercase tracking-[0.24em] sm:text-sm sm:tracking-[0.3em] ${monoAccentClass}`}>
                Full-Stack • Software Development
              </p>
              <h1 className="max-w-3xl text-4xl font-black leading-none tracking-[-0.05em] sm:text-5xl md:text-7xl">
                Tanmay Shankar
              </h1>
              <h2 className={`max-w-2xl text-lg font-medium sm:text-xl md:text-2xl ${softTextClass}`}>
                Computer Science undergrad building production-grade products with
                strong engineering instincts and a sharp eye for real-world impact.
              </h2>
              <p className={`max-w-2xl text-sm leading-7 sm:text-base md:text-lg md:leading-8 ${mutedTextClass}`}>
                I work across the MERN stack, real-time geolocation systems, and
                automation-heavy workflows. I like products that feel useful,
                responsive, and a little memorable.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#projects"
                className={`rounded-2xl px-6 py-3 text-center text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                  darkMode
                    ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-950'
                    : 'bg-gradient-to-r from-fuchsia-600 to-orange-400 text-white'
                }`}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className={`rounded-2xl border px-6 py-3 text-center text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                  darkMode
                    ? 'border-white/10 bg-white/5 hover:bg-white/10'
                    : 'border-orange-200 bg-white/80 hover:bg-white'
                }`}
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.aside
            variants={fadeUp}
            className={`relative rounded-[2rem] border p-5 shadow-2xl sm:p-6 ${panelClass}`}
          >
            <div
              className={`absolute inset-x-8 top-0 h-px ${
                darkMode
                  ? 'bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-orange-400/70 to-transparent'
              }`}
            />
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <p className={`font-mono text-xs uppercase tracking-[0.3em] ${monoAccentClass}`}>
                  Quick Links
                </p>
                <div className="flex gap-3">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-2xl border p-3 transition-transform hover:-translate-y-1 ${
                      darkMode
                        ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                        : 'border-orange-200 bg-white text-slate-900 hover:bg-orange-50'
                    }`}
                    aria-label="LinkedIn profile"
                  >
                    <LinkedInLogo />
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-2xl border p-3 transition-transform hover:-translate-y-1 ${
                      darkMode
                        ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                        : 'border-orange-200 bg-white text-slate-900 hover:bg-orange-50'
                    }`}
                    aria-label="GitHub profile"
                  >
                    <GitHubLogo />
                  </a>
                </div>
              </div>

              <div
                className={`rounded-[1.5rem] border p-5 ${
                  darkMode
                    ? 'border-cyan-400/20 bg-cyan-400/10'
                    : 'border-cyan-200 bg-cyan-50/80'
                }`}
              >
                <p className="text-sm font-semibold">Current vibe</p>
                <p className={`mt-2 text-sm leading-7 ${softTextClass}`}>
                  Shipping fast, learning deeply, and turning technical work into
                  clean product experiences.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['Competitive Wins', 'Case Comp, Pitch, Quiz & Hackathon Winner'],
                  ['Projects Deployed', '2+'],
                  ['Sprint Ownership', '2 Features'],
                  ['Focus', 'MERN + Geo APIs'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className={`rounded-[1.4rem] border p-4 ${
                      darkMode
                        ? 'border-white/10 bg-black/20'
                        : 'border-orange-100 bg-white/90'
                    }`}
                  >
                    <p className={`text-xs font-mono uppercase tracking-[0.22em] ${mutedTextClass}`}>
                      {label}
                    </p>
                    <p className="mt-2 text-base font-black leading-snug sm:text-lg">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </motion.section>

        <div className="mt-20 grid gap-6 sm:mt-24 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className={`rounded-[2rem] border p-6 sm:p-8 ${panelClass}`}
          >
            <motion.h3 variants={fadeUp} className="mb-6 text-3xl font-black">
              Education
            </motion.h3>
            <motion.div variants={fadeUp} className="space-y-6">
              <div
                className={`rounded-[1.6rem] border p-5 ${
                  darkMode
                    ? 'border-fuchsia-400/20 bg-fuchsia-500/10'
                    : 'border-fuchsia-200 bg-fuchsia-50/70'
                }`}
              >
                <p className={`text-xs font-mono uppercase tracking-[0.24em] ${monoAccentClass}`}>
                  2024–2028
                </p>
                <h4 className="mt-3 text-xl font-bold leading-snug">
                  Sir M. Visvesvaraya Institute of Technology, Bengaluru
                </h4>
                <p className={`mt-3 leading-7 ${softTextClass}`}>
                  B.E. in Computer Science & Engineering with specialization in
                  IoT, Cybersecurity & Blockchain.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['CGPA', '9.2'],
                  ['Campus Communities', 'SMVIT DEBSOC • MVIT Quillz'],
                  ['Focus', 'Systems + Product Build'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className={`rounded-[1.4rem] border p-4 ${
                      darkMode
                        ? 'border-white/10 bg-black/20'
                        : 'border-orange-100 bg-white/90'
                    }`}
                  >
                    <p className={`text-xs font-mono uppercase tracking-[0.22em] ${mutedTextClass}`}>
                      {label}
                    </p>
                    <p className="mt-2 text-base font-black leading-snug">{value}</p>
                  </div>
                ))}
              </div>

              <div
                className={`rounded-[1.4rem] border p-4 ${
                  darkMode ? 'border-white/10 bg-white/5' : 'border-orange-100 bg-white/90'
                }`}
              >
                <p className={`text-sm leading-7 ${softTextClass}`}>
                  Building a strong base in software engineering while exploring
                  practical product development, real-time systems, and
                  user-facing application design.
                </p>
              </div>
            </motion.div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className={`rounded-[2rem] border p-6 sm:p-8 ${panelClass}`}
          >
            <motion.h3 variants={fadeUp} className="mb-8 text-3xl font-black">
              Experience
            </motion.h3>
            <div className="space-y-8">
              {experienceItems.map((item) => (
                <motion.div
                  key={`${item.role}-${item.org}`}
                  variants={fadeUp}
                  className="relative pl-8"
                >
                  <div
                    className={`absolute left-0 top-1.5 h-4 w-4 rounded-full ${
                      darkMode
                        ? 'bg-fuchsia-400 shadow-[0_0_0_6px_rgba(217,70,239,0.12)]'
                        : 'bg-orange-400 shadow-[0_0_0_6px_rgba(251,146,60,0.18)]'
                    }`}
                  />
                  <h4 className="text-lg font-bold sm:text-xl">{item.role}</h4>
                  <div className="mb-2 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <p className={`text-sm font-mono ${monoAccentClass}`}>{item.org}</p>
                    <p className={`text-[11px] font-mono uppercase tracking-[0.16em] sm:text-xs sm:tracking-[0.18em] ${mutedTextClass}`}>
                      {item.period}
                    </p>
                  </div>
                  <p className={`text-sm leading-7 sm:text-base ${softTextClass}`}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-20 sm:mt-24"
        >
          <motion.div
            variants={fadeUp}
            className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className={`font-mono text-sm uppercase tracking-[0.3em] ${monoAccentClass}`}>
                Work That Ships
              </p>
              <h3 className="mt-2 text-3xl font-black md:text-4xl">Featured Projects</h3>
            </div>
            <p className={`max-w-xl text-sm leading-7 ${mutedTextClass}`}>
              Two real products with live deployments, strong utility, and clear
              technical depth.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                name: 'RakshaNav',
                subtitle: 'Safety-First Navigation & Urban Telemetry Platform',
                description:
                  'Engineered a safety-optimised routing engine that scores street segments in real time using ambient light sensor readings and historical incident data, with both a B2C navigation interface and B2G municipal dashboard.',
                tech: ['React 18', 'Node.js', 'Express.js', 'MapLibre GL', 'OSRM'],
                href: projectLinks.rakshaNav,
                accent: darkMode
                  ? 'from-fuchsia-500/20 via-cyan-400/10 to-transparent'
                  : 'from-orange-300/40 via-fuchsia-200/40 to-transparent',
              },
              {
                name: 'Eco Eats',
                subtitle: 'Food Waste Reduction Platform',
                description:
                  'Built a full-stack platform connecting food donors with receivers through real-time geolocation matching, route optimisation, and a responsive low-bandwidth-friendly interface deployed across Vercel and Render.',
                tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Leaflet.js', 'OSRM'],
                href: projectLinks.ecoEats,
                accent: darkMode
                  ? 'from-cyan-400/20 via-emerald-400/10 to-transparent'
                  : 'from-emerald-200/60 via-cyan-100/70 to-transparent',
              },
            ].map((project) => (
              <motion.a
                key={project.name}
                variants={fadeUp}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={`group relative overflow-hidden rounded-[2rem] border p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${panelClass}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-black sm:text-2xl">{project.name}</h4>
                      <p className={`mt-2 text-sm font-medium ${monoAccentClass}`}>
                        {project.subtitle}
                      </p>
                    </div>
                    <ExternalLink
                      size={18}
                      className="mt-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                  <p className={`mt-5 text-sm leading-7 ${softTextClass}`}>
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full px-3 py-1 text-xs font-mono ${
                          darkMode ? 'bg-black/30 text-zinc-200' : 'bg-white/90 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <div className="mt-20 grid gap-6 sm:mt-24 sm:gap-8 lg:grid-cols-2">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className={`rounded-[2rem] border p-6 sm:p-8 ${panelClass}`}
          >
            <motion.h3 variants={fadeUp} className="mb-6 text-3xl font-black">
              Key Achievements
            </motion.h3>
            <div className="grid gap-4">
              {[
                'University Topper with a 9.2 CGPA.',
                '2nd Runner-Up at Tata Crucible Campus Quiz Cluster Finals, Mumbai.',
                'Winner at Starpitch 3.0 startup pitch competition.',
                "Winner at Startup Mela Investor's Dilemma.",
                'Top 10 of 200+ teams at Hack Day Pondy (0x.day).',
              ].map((achieve) => (
                <motion.div
                  key={achieve}
                  variants={fadeUp}
                  className={`flex items-start gap-3 rounded-[1.4rem] border p-4 ${
                    darkMode ? 'border-white/10 bg-black/20' : 'border-orange-100 bg-white/90'
                  }`}
                >
                  <Award
                    size={20}
                    className={
                      darkMode
                        ? 'mt-0.5 shrink-0 text-fuchsia-300'
                        : 'mt-0.5 shrink-0 text-orange-500'
                    }
                  />
                  <span className={softTextClass}>{achieve}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className={`rounded-[2rem] border p-6 sm:p-8 ${panelClass}`}
          >
            <motion.h3 variants={fadeUp} className="mb-6 text-3xl font-black">
              Technical Skills
            </motion.h3>
            <div className="space-y-6">
              {[
                ['Languages', ['C', 'C++', 'Python', 'JavaScript', 'SQL']],
                ['Web / Stack', ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB']],
                ['Tools & Practices', ['Git', 'GitHub', 'VS Code', 'Vercel', 'Render', 'Agile/Scrum', 'Version Control']],
              ].map(([title, skills]) => (
                <motion.div key={title} variants={fadeUp}>
                  <h4 className={`mb-3 text-sm font-mono uppercase tracking-[0.22em] ${mutedTextClass}`}>
                    {title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-full border px-4 py-2 text-sm font-medium ${
                          darkMode
                            ? 'border-white/10 bg-black/20 text-zinc-200'
                            : 'border-orange-100 bg-white text-slate-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <footer
        id="contact"
        className={`border-t py-14 ${
          darkMode ? 'border-white/10 bg-black/20' : 'border-orange-200/70 bg-white/70'
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`font-mono text-sm uppercase tracking-[0.3em] ${monoAccentClass}`}>
              Let's Connect
            </p>
            <h2 className="mt-3 text-3xl font-black">Open to building cool things.</h2>
            <p className={`mt-3 max-w-xl leading-7 ${softTextClass}`}>
              If you have an internship, collaboration, product idea, or just want
              to talk engineering, I'm easy to reach.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:tanmays2006@gmail.com"
              className={`flex items-start gap-3 break-all text-sm leading-6 transition-transform hover:-translate-y-0.5 sm:items-center ${softTextClass}`}
            >
              <Mail size={18} /> tanmays2006@gmail.com
            </a>
            <a
              href="tel:+918797923247"
              className={`flex items-start gap-3 text-sm leading-6 transition-transform hover:-translate-y-0.5 sm:items-center ${softTextClass}`}
            >
              <Phone size={18} /> +91 87979 23247
            </a>
            <div className="flex gap-3 pt-2">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`rounded-2xl border p-3 ${
                  darkMode
                    ? 'border-white/10 bg-white/5 hover:bg-white/10'
                    : 'border-orange-200 bg-white hover:bg-orange-50'
                }`}
                aria-label="LinkedIn profile"
              >
                <LinkedInLogo />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className={`rounded-2xl border p-3 ${
                  darkMode
                    ? 'border-white/10 bg-white/5 hover:bg-white/10'
                    : 'border-orange-200 bg-white hover:bg-orange-50'
                }`}
                aria-label="GitHub profile"
              >
                <GitHubLogo />
              </a>
            </div>
            <p className={darkMode ? 'pt-2 text-sm text-zinc-500' : 'pt-2 text-sm text-slate-400'}>
              © {new Date().getFullYear()} Tanmay Shankar. Built with React &
              Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
