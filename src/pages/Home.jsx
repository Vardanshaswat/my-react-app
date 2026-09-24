import { useEffect, useState } from 'react';
import { experience, profile, projects, skillGroups } from '../content';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import '../App.css';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const submitContact = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Role inquiry from ${form.name || 'a recruiter'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="site">
      <a className="skip" href="#work">
        Skip to work
      </a>

      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <a className="nav-mark" href="#top" onClick={closeMenu}>
          {profile.firstName.slice(0, 1)}
          <span>.</span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <Link to="/about">About</Link>
      <Link to="/search">Search users</Link>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">
            <span className="pulse" />
            {profile.availability} · {profile.years} years
          </p>
          <h1>
            <span className="hero-name">{profile.name}</span>
            <span className="hero-role">{profile.role}</span>
          </h1>
          <p className="hero-lead">{profile.headline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              View selected work
            </a>
            <a className="btn btn-ghost" href={profile.resumeUrl}>
              Resume
            </a>
          </div>
          <ul className="hero-meta">
            <li>{profile.location}</li>
            <li>
              <a href={profile.social.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
          <dl className="stats">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="work" className="section">
          <div className="section-head">
            <p className="kicker">01 — Selected work</p>
            <h2>Projects that read like production, not tutorials.</h2>
            <p className="section-copy">
              Outcome first, stack second. These are stand-ins until live products
              and metrics are plugged in — the structure is what a hiring manager
              should be able to scan in thirty seconds.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head">
            <p className="kicker">02 — Experience</p>
            <h2>Three years in the chair, owning slices of the stack.</h2>
          </div>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company}>
                <div className="timeline-meta">
                  <h3>{job.role}</h3>
                  <p>
                    {job.company} · {job.location}
                  </p>
                  <p className="period">{job.period}</p>
                </div>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="section">
          <div className="section-head">
            <p className="kicker">03 — Capabilities</p>
            <h2>A stack I can defend in an interview.</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-head">
            <p className="kicker">04 — About</p>
            <h2>How I work.</h2>
          </div>
          <div className="about-grid">
            <p className="about-lead">{profile.summary}</p>
            <div>
              <p>{profile.aboutExtra}</p>
              <ul className="focus">
                {profile.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-head">
            <p className="kicker">05 — Contact</p>
            <h2>If the work fits, let’s talk.</h2>
            <p className="section-copy">
              Recruiters: include the stack, location, and a one-line product description.
              I reply fastest to roles that say what the team actually ships.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <p>{profile.phone}</p>
              <p>{profile.location}</p>
              <div className="contact-social">
                <a href={profile.social.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              <label>
                Name
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                />
              </label>
              <label>
                Message
                <textarea
                  required
                  rows="5"
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                />
              </label>
              <button className="btn btn-primary" type="submit">
                {sent ? 'Opening mail app…' : 'Send message'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          {profile.name} · {profile.role}
        </p>
        <p>Built for hiring conversations. React, one page, fast to scan.</p>
      </footer>
    </div>
  );
}

export default Home;
