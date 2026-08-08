
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaArrowDown,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            CM.
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-small">Hello, I'm</p>

          <h1>
            Chanthini Mai <span>T V</span>
          </h1>

          <h2>Full Stack Developer | MERN Stack Developer</h2>

<p className="hero-description">
  I'm a passionate Full Stack Developer with hands-on experience
  building web applications using the MERN stack. I enjoy learning
  new technologies and building practical web applications.
</p>

          <div className="hero-buttons">
  <a href="#projects" className="btn primary-btn">
    View My Work
  </a>

  <a href="#contact" className="btn secondary-btn">
    Contact Me
  </a>

  <a
    href="/Chanthini_Mai_TV_Resume.pdf"
    download
    className="btn secondary-btn"
  >
    Download Resume
  </a>
</div>

          <div className="social-links">
            <a
              href="https://github.com/kandhanprofessional369-cloud"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/chanthini-mai-t-v-473968421"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:kandhanprofessional369@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-card">
            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <span className="purple">const</span>{" "}
                <span className="blue">developer</span> = {"{"}
              </p>

              <p>
                &nbsp;&nbsp;name:{" "}
                <span className="green">"Chanthini Mai"</span>,
              </p>

              <p>
                &nbsp;&nbsp;role:{" "}
                <span className="green">"Full Stack Developer"</span>,
              </p>

              <p>
                &nbsp;&nbsp;stack:{" "}
                <span className="green">"MERN"</span>,
              </p>

              <p>
                &nbsp;&nbsp;passion:{" "}
                <span className="green">"Building"</span>
              </p>

              <p>{"}"}</p>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-down">
          <FaArrowDown />
        </a>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
  <h3>Full Stack Developer</h3>

  <p>
    I'm a Full Stack Developer with hands-on experience building
    responsive and user-friendly web applications using the MERN stack.
  </p>

  <p>
    I enjoy developing complete applications across the frontend,
    backend, and database layers, including REST APIs, authentication,
    and MongoDB integration.
  </p>

  <p>
    I'm continuously improving my problem-solving skills and exploring
    new technologies to build practical and scalable web solutions.
  </p>
</div>

          <div className="about-info">
            <div>
              <strong>Name</strong>
              <span>Chanthini Mai T V</span>
            </div>

            <div>
              <strong>Role</strong>
              <span>Full Stack Developer</span>
            </div>

            <div>
              <strong>Location</strong>
              <span>Tirupur, Tamil Nadu, India</span>
            </div>

            <div>
              <strong>Email</strong>
              <span>kandhanprofessional369@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <p>WHAT I WORK WITH</p>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Bootstrap</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>REST APIs</p>
            <p>JWT Authentication</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>MongoDB Atlas</p>
          </div>

          <div className="skill-card">
            <h3>Tools & Development</h3>
            <p>Git</p>
            <p>GitHub</p>
            <p>Postman</p>
            <p>VS Code</p>
            <p>Vercel / Render</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-heading">
          <p>MY RECENT WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-number">01</div>

            <h3>Recipe CRUD Application</h3>

            <p>
              A full-stack recipe management application with CRUD
              operations, search functionality and MongoDB integration.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://recipe-crud-nh18.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo <FaExternalLinkAlt />
              </a>

              <a
                href="https://github.com/kandhanprofessional369-cloud/recipe-crud"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-number">02</div>

            <h3>Blogging Platform</h3>

            <p>
              A full-stack blogging platform with REST APIs, categories,
              tags and a responsive React frontend.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://blogging-platform-nine-gilt.vercel.app/?category=6a64ed2069951835a4a6d680"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo <FaExternalLinkAlt />
              </a>

              <a
                href="https://github.com/kandhanprofessional369-cloud/BloggingPlatform"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-number">03</div>

            <h3>Password Reset & Authentication</h3>

            <p>
              A full-stack authentication application featuring user
              registration, login, forgot password, password reset and
              JWT-based authorization.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>JWT</span>
              <span>MongoDB</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://password-reset-guvi-cw8z.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo <FaExternalLinkAlt />
              </a>

              <a
                href="https://github.com/kandhanprofessional369-cloud/PasswordResetGuvi"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section certifications">
        <div className="section-heading">
          <p>MY LEARNING JOURNEY</p>
          <h2>Certifications</h2>
        </div>

        <div className="cert-card">
  <h3>Full Stack Development</h3>

  <p>
    <strong>GUVI</strong> • Full Stack Developer Program
  </p>

  <span>MERN Stack</span>

  <p className="cert-skills">
    Frontend Development • Backend Development • REST APIs • MongoDB •
    Authentication
  </p>
</div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <p>LET'S CONNECT</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-content">
        <p>
  I'm open to full-time opportunities, collaborations, and interesting
  projects. Feel free to reach out if you'd like to connect or discuss
  an opportunity.
</p>

          <div className="contact-links">
            <a href="mailto:kandhanprofessional369@gmail.com">
              <FaEnvelope />
              kandhanprofessional369@gmail.com
            </a>

            <a href="tel:+919042758369">
              <FaPhone />
              +91 90427 58369
            </a>
          </div>

          <div className="social-links contact-social">
            <a
              href="https://github.com/kandhanprofessional369-cloud"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/chanthini-mai-t-v-473968421"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © {new Date().getFullYear()} Chanthini Mai T V. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;


