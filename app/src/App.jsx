import { useMemo, useState } from 'react';
import ProfileCard from './components/ProfileCard.jsx';
import Waves from './components/Waves.jsx';
import LogoLoop from './components/LogoLoop.jsx';
import SpotlightCard from './components/SpotlightCard.jsx';

const skills = [
  'React.js', 'JavaScript', 'Spring Boot', 'Java', 'MySQL',
  'HTML & CSS', 'Tailwind CSS', 'Git & GitHub', 'Vite'
];

const projects = [
  {
    number: '01',
    year: '2024',
    title: 'FoodMania',
    type: 'Full-stack application',
    description: 'A dine-and-deliver platform for discovering restaurants, managing a cart, and processing orders.',
    tools: ['React.js', 'Spring Boot', 'MySQL', 'JPA / Hibernate'],
    href: 'https://github.com/gourichaturvedi/FoodMania',
    action: 'Explore the code'
  },
  {
    number: '02',
    year: '2025',
    title: 'Beautivine',
    type: 'Web experience',
    description: 'A beauty care showcase with responsive layouts and a calm, considered browsing experience.',
    tools: ['React.js', 'Tailwind CSS', 'Vite'],
    href: 'https://github.com/gourichaturvedi/Beautivine',
    action: 'Explore the code'
  },
  {
    number: '03',
    year: '2023',
    title: 'Portfolio Website',
    type: 'Personal site',
    description: 'A lightweight portfolio built from the ground up for the open web.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/gourichaturvedi/gourichaturvedi.github.io',
    action: 'View source'
  }
];

function Arrow({ diagonal = false }) {
  return <span className="arrow-mark" aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const loopItems = useMemo(() => skills.map(skill => ({
    title: skill,
    node: <span className="skill-word">{skill}</span>
  })), []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Gouri Chaturvedi, home">
            Gouri Chaturvedi<span>.</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(open => !open)}
          >
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
            <span className={`menu-lines${menuOpen ? ' is-open' : ''}`} aria-hidden="true"><i /><i /></span>
          </button>
          <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} id="main-nav" aria-label="Main navigation">
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <Arrow diagonal /></a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-waves" aria-hidden="true">
            <Waves
              lineColor="#a40c50"
              accentColor="#c33a75"
              backgroundColor="transparent"
              spacing={17}
              lineWidth={0.75}
              amplitude={19}
              speed={0.42}
              variation={2}
              mouseStrength={0.45}
              clickRipple={false}
              intro={false}
              opacity={0.42}
              lightMode
              className="hero-waves-canvas"
            />
          </div>
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="overline"><span className="overline-dot" /> Full-stack developer <span className="overline-separator">/</span> Jharkhand, India</p>
              <h1 id="hero-title">Thoughtful code.<br /><em>Considered</em> experiences.</h1>
              <p className="hero-intro">I’m Gouri, an Information Technology student and full-stack developer from Jharkhand, India.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
                <a className="text-action" href="mailto:gourichaturvedi2003@gmail.com">Get in touch <Arrow diagonal /></a>
              </div>
              <div className="hero-note"><span>01</span><span>Building for the web, one thoughtful detail at a time.</span></div>
            </div>
            <div className="profile-wrap">
              <ProfileCard
                avatarUrl="./pfp.jpg"
                miniAvatarUrl="./pfp.jpg"
                name="Gouri Chaturvedi"
                title="Full-stack developer"
                handle="gourichaturvedi"
                status="Open to opportunities"
                statusColor="#a40c50"
                contactText="Say hello"
                onContactClick={() => { window.location.href = 'mailto:gourichaturvedi2003@gmail.com'; }}
                theme="light"
                backdropColor="#fffaf6"
                radius={14}
                holo={0}
                glare={0.14}
                enableTilt
                tiltStrength={5}
                parallax={4}
                intro={false}
                className="gouri-profile-card"
              />
              <span className="profile-caption">A little about me <span>↙</span></span>
            </div>
          </div>
          <div className="hero-bottom-rule shell"><span>Scroll to explore</span><span className="rule-line" /><span>Portfolio / 2026</span></div>
        </section>

        <section className="work-section section-pad" id="work" aria-labelledby="work-title">
          <div className="shell">
            <div className="section-heading">
              <p className="section-index">01 <span>/</span> Selected work</p>
              <div className="section-heading-main">
                <h2 id="work-title">A few things<br /><em>I’ve built.</em></h2>
                <p>Projects shaped by curiosity, craft, and a love of making the web useful.</p>
              </div>
            </div>
            <div className="project-grid">
              {projects.map(project => (
                <SpotlightCard
                  key={project.number}
                  theme="light"
                  spotlightColor="rgba(164, 12, 80, 0.32)"
                  intensity={0.18}
                  spotlightSize={280}
                  softness={0.8}
                  borderGlow={0.28}
                  flare={false}
                  grain={0}
                  className={`project-card${project.number === '01' ? ' project-featured' : ''}`}
                  style={{
                    '--spotlight-card-surface': '#fffdfb',
                    '--spotlight-card-border': 'rgba(164, 12, 80, 0.16)',
                    '--spotlight-card-shadow': 'none'
                  }}
                >
                  <div className="project-topline"><span>{project.number}</span><span>{project.year} <i>/</i> {project.type}</span></div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tools" aria-label={`${project.title} technologies`}>
                    {project.tools.map(tool => <li key={tool}>{tool}</li>)}
                  </ul>
                  <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">{project.action} <Arrow diagonal /></a>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about" aria-labelledby="about-title">
          <div className="shell about-layout">
            <p className="section-index">02 <span>/</span> A little about me</p>
            <div className="about-copy">
              <h2 id="about-title">From first sketch<br />to <em>final commit.</em></h2>
              <div className="about-detail">
                <p>I’m an Information Technology student who enjoys shaping ideas into clear, considered web experiences. I’m drawn to the full picture: the detail in an interface, the logic behind it, and the small decisions that make it feel right.</p>
                <p>Based in Nirsa, Dhanbad, I keep learning by building, experimenting, and sharing work on the open web.</p>
                <a className="text-action" href="mailto:gourichaturvedi2003@gmail.com">Let’s make something useful <Arrow diagonal /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills" aria-labelledby="skills-title">
          <div className="shell skills-heading">
            <p className="section-index">03 <span>/</span> The toolkit</p>
            <div><h2 id="skills-title">Tools I reach for.</h2><p>A growing toolkit for building across the stack.</p></div>
          </div>
          <div className="skills-loop-wrap">
            <LogoLoop
              logos={loopItems}
              speed={48}
              direction="left"
              logoHeight={36}
              gap={46}
              pauseOnHover
              fadeOut={false}
              intro={false}
              ariaLabel="Skills and technologies"
              className="skills-loop"
            />
          </div>
          <div className="shell skill-categories">
            <div><h3>Frontend</h3><p>React.js · JavaScript · HTML &amp; CSS · Tailwind CSS</p></div>
            <div><h3>Backend</h3><p>Spring Boot · Java · Express.js · RESTful APIs</p></div>
            <div><h3>Data &amp; tools</h3><p>MySQL · JPA / Hibernate · Git &amp; GitHub · Vite</p></div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-layout">
            <div><p className="section-index">04 <span>/</span> Say hello</p><h2 id="contact-title">Have a good<br /><em>problem?</em></h2></div>
            <div className="contact-aside">
              <p>For opportunities, collaborations, or a good conversation about building for the web.</p>
              <a className="email-link" href="mailto:gourichaturvedi2003@gmail.com">gourichaturvedi2003@gmail.com <Arrow diagonal /></a>
              <div className="social-links">
                <a href="https://github.com/gourichaturvedi" target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a>
                <a href="https://linkedin.com/in/gourichaturvedi" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-marquee" aria-label="Gouri Chaturvedi">
          <div className="footer-marquee-track">
            <span>Gouri Chaturvedi<span className="footer-period">.</span></span>
            <span aria-hidden="true">Gouri Chaturvedi<span className="footer-period">.</span></span>
          </div>
        </div>
        <div className="shell footer-bottom">
          <a className="brand" href="#home">Gouri Chaturvedi<span>.</span></a>
          <nav aria-label="Footer navigation">
            <a href="#home">Home</a><a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
          </nav>
          <p>© {new Date().getFullYear()} Gouri Chaturvedi</p>
        </div>
      </footer>
    </>
  );
}

export default App;
