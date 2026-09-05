import { useState } from "react";
import axios from "axios";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaArrowDown,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "./App.css";

import profileImage from "./assets/profile.jpg";
import guviCertificate from "./assets/guvi-certificate.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await axios.post(
        "https://chanthini-portfolio.onrender.com/api/contact",
        formData,
      );

      setStatus(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        error.response?.data?.message ||
          "Unable to send message. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* =========================
          NAVBAR
      ========================= */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            CM.
          </a>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="#certifications" onClick={closeMenu}>
              Certifications
            </a>

            <a href="#education" onClick={closeMenu}>
              Education
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* =========================
          HERO
      ========================= */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-small">Hello, I'm</p>

          <h1>
            Chanthini Mai <span>T V</span>
          </h1>

          <h2>Full Stack Developer | MERN Stack Developer</h2>

          <p className="hero-description">
            Entry-level Full Stack Developer trained in MERN stack development
            with hands-on experience building full-stack web applications and
            REST APIs using React.js, Node.js, Express.js, and MongoDB.
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

        {/* Code Card */}
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
                &nbsp;&nbsp;name: <span className="green">"Chanthini Mai"</span>
                ,
              </p>

              <p>
                &nbsp;&nbsp;role:{" "}
                <span className="green">"Full Stack Developer"</span>,
              </p>

              <p>
                &nbsp;&nbsp;stack: <span className="green">"MERN"</span>,
              </p>

              <p>
                &nbsp;&nbsp;frontend: <span className="green">"React.js"</span>,
              </p>

              <p>
                &nbsp;&nbsp;backend: <span className="green">"Node.js"</span>,
              </p>

              <p>
                &nbsp;&nbsp;database: <span className="green">"MongoDB"</span>
              </p>

              <p>{"}"}</p>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-down" aria-label="Scroll to About">
          <FaArrowDown />
        </a>
      </section>

      {/* =========================
          ABOUT
      ========================= */}
      <section id="about" className="section">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={profileImage} alt="Chanthini Mai T V" />
          </div>

          <div className="about-text">
            <h3>Full Stack Developer</h3>

            <p>
              I'm an entry-level Full Stack Developer with hands-on experience
              building full-stack web applications using the MERN stack.
            </p>

            <p>
              I enjoy developing applications across the frontend, backend, and
              database layers, including REST APIs, authentication, protected
              routes, CRUD operations, and MongoDB integration.
            </p>

            <p>
              I'm continuously improving my development and problem-solving
              skills through practical projects and structured full-stack
              training.
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

      {/* =========================
          SKILLS
      ========================= */}
      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <p>WHAT I WORK WITH</p>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {/* Languages */}
          <div className="skill-card">
            <h3>Languages</h3>

            <div className="skill-tags">
              <span>JavaScript (ES6+)</span>
              <span>Python</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>

          {/* Frontend */}
          <div className="skill-card">
            <h3>Frontend</h3>

            <div className="skill-tags">
              <span>React.js</span>
              <span>React Router</span>
              <span>Vite</span>
              <span>Bootstrap</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-card">
            <h3>Backend & Database</h3>

            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>MongoDB Atlas</span>
              <span>Mongoose</span>
              <span>MySQL</span>
            </div>
          </div>

          {/* Authentication & Tools */}
          <div className="skill-card">
            <h3>Authentication & Tools</h3>

            <div className="skill-tags">
              <span>JWT</span>
              <span>bcryptjs</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Postman</span>
              <span>VS Code</span>
              <span>npm</span>
              <span>Axios</span>
              <span>Render</span>
              <span>Vercel</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PROJECTS
      ========================= */}
      <section id="projects" className="section">
        <div className="section-heading">
          <p>MY RECENT WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-number">01</div>

            <h3>InkWell – MERN Blogging Platform</h3>

            <p>
              Developed a full-stack MERN blogging platform with user
              authentication, protected routes, blog creation, categories, tags,
              comments, and user profiles.
            </p>

            <div className="project-tech">
              <span>React.js</span>
              <span>Vite</span>
              <span>Tailwind CSS</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>JWT</span>
              <span>Axios</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://blogging-platform-nine-gilt.vercel.app/"
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

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-number">02</div>

            <h3>MERN Finance Tracker</h3>

            <p>
              Developed a full-stack finance management application using the
              MERN stack with JWT-based authentication and RESTful APIs for
              managing income and expense transactions.
            </p>

            <div className="project-tech">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>JWT</span>
              <span>Axios</span>
              <span>Vercel</span>
              <span>Render</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://mern-finance-tracker-sand.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo <FaExternalLinkAlt />
              </a>

              <a
                href="https://github.com/kandhanprofessional369-cloud/mern-finance-tracker"
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

            <h3>Career Track – Job Application Tracking System</h3>

            <p>
              Developed a full-stack job application tracking system with JWT
              authentication, protected routes, and user-specific application
              management.
            </p>

            <div className="project-tech">
              <span>React.js</span>
              <span>Vite</span>
              <span>Tailwind CSS</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>JWT</span>
              <span>Axios</span>
              <span>Recharts</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://career-track-eight.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo <FaExternalLinkAlt />
              </a>

              <a
                href="https://github.com/kandhanprofessional369-cloud/CareerTrack"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          WORK EXPERIENCE
      ========================= */}
      <section id="experience" className="section">
        <div className="section-heading">
          <p>PROFESSIONAL EXPERIENCE</p>
          <h2>Work Experience</h2>
        </div>

        <div className="cert-card experience-card">
          <h3>Patent Analyst</h3>

          <p>
            <strong>Molecular Connections</strong> • Coimbatore
          </p>

          <span>March 2024 – July 2026</span>

          <p className="cert-skills">
            Conducted Patentability, Freedom-to-Operate (FTO), Invalidity,
            Quick, and Patent Landscape searches.
          </p>

          <p className="cert-skills">
            Analyzed technical and patent information while maintaining research
            accuracy and delivering structured outputs within defined timelines.
          </p>
        </div>
      </section>

      {/* =========================
          CERTIFICATIONS
      ========================= */}
      <section id="certifications" className="section certifications">
        <div className="section-heading">
          <p>MY LEARNING JOURNEY</p>
          <h2>Certifications & Training</h2>
        </div>

        {/* GUVI MERN */}
        <div className="cert-card">
          <h3>MERN Stack Developer</h3>

          <p>
            <strong>GUVI</strong> • MERN Stack Developer Program
          </p>

          <span>MERN Stack</span>

          <p className="cert-skills">
            Frontend Development • Backend Development • REST APIs • MongoDB •
            Authentication
          </p>

          <a
            href={guviCertificate}
            target="_blank"
            rel="noreferrer"
            className="cert-link"
          >
            View Certificate
          </a>
        </div>

        {/* JavaScript */}
        <div className="cert-card">
          <h3>JavaScript Algorithms and Data Structures</h3>

          <p>
            <strong>GUVI</strong>
          </p>

          <span>JavaScript • Algorithms • Data Structures</span>

          <p className="cert-skills">
            Practiced JavaScript programming, problem-solving, algorithms, and
            data structure concepts.
          </p>
        </div>

        {/* Artificial Intelligence */}
        <div className="cert-card">
          <h3>Artificial Intelligence</h3>

          <p>
            <strong>Zen Crop Techno Solutions (ZCTS)</strong>
          </p>

          <span>Artificial Intelligence</span>

          <p className="cert-skills">
            Completed training in fundamental Artificial Intelligence concepts
            and applications.
          </p>
        </div>

        {/* L&T Traineeship */}
        <div className="cert-card training-card">
          <h3>Full Stack Development Training</h3>

          <p>
            <strong>LS Traineeship</strong>
          </p>

          <span>Python • HTML • CSS • SQL</span>

          <p className="cert-skills">
            Gained hands-on training in Python, HTML, CSS, and SQL for
            programming, web page development, styling, and database management.
          </p>

          <p className="cert-skills">
            Practiced Python fundamentals, HTML elements, CSS styling, and SQL
            operations including SELECT, INSERT, UPDATE, and DELETE.
          </p>
        </div>
      </section>

      {/* =========================
          EDUCATION
      ========================= */}
      <section id="education" className="section">
        <div className="section-heading">
          <p>ACADEMIC BACKGROUND</p>
          <h2>Education</h2>
        </div>

        <div className="cert-card education-card">
          <h3>
            Bachelor of Engineering in Electronics & Communication Engineering
          </h3>

          <p>
            <strong>Avinashilingam University, Tamil Nadu</strong>
          </p>

          <span>2019 – 2023</span>
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}

      {/* =========================
    CONTACT
========================= */}
      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <p>LET'S CONNECT</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-content">
          <div className="contact-intro">
            <p>
              I'm seeking opportunities as an entry-level Full Stack Developer.
              Feel free to reach out if you'd like to connect, discuss an
              opportunity, or collaborate on a project.
            </p>

            <div className="contact-links">
              <a href="mailto:kandhanprofessional369@gmail.com">
                <FaEnvelope />
                <span>kandhanprofessional369@gmail.com</span>
              </a>

              <a href="tel:+919042758369">
                <FaPhone />
                <span>+91 90427 58369</span>
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

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn primary-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && <p className="contact-status">{status}</p>}
          </form>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer>
        <p>
          © {new Date().getFullYear()} Chanthini Mai T V. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
