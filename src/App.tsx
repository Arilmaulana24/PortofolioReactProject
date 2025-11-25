import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Development Web Sistem Informasi Unimal',
      description: 'Website resmi Program Studi Sistem Informasi Universitas Malikussaleh dengan fitur lengkap untuk informasi akademik, profil prodi, berita, dan galeri. Dibangun menggunakan Joomla CMS.',
      category: 'Website',
      image: '/images/proyek1.png',
      link: 'https://sisteminformasi.unimal.ac.id/'
    },
    {
      id: 2,
      title: 'E-Commerce Website',
      description: 'A full-featured e-commerce platform built with React and Node.js, featuring user authentication, shopping cart, and payment integration.',
      category: 'Website',
      image: '/images/project1.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'Smart Home IoT System',
      description: 'An IoT-based smart home automation system that controls lights, temperature, and security devices through a mobile app.',
      category: 'IOT',
      image: '/images/project2.jpg',
      link: '#'
    },
    {
      id: 4,
      title: 'Image Classification ML',
      description: 'Machine learning model for image classification using TensorFlow and Python, achieving 95% accuracy on custom dataset.',
      category: 'Machine Learning',
      image: '/images/project3.jpg',
      link: '#'
    },
    {
      id: 5,
      title: 'Task Management Mobile App',
      description: 'A collaborative task management mobile application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      category: 'Mobile',
      image: '/images/project4.jpg',
      link: '#'
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard website that displays current weather conditions and forecasts for multiple locations using weather API.',
      category: 'Website',
      image: '/images/project5.jpg',
      link: '#'
    },
    {
      id: 7,
      title: 'IoT Sensor Network',
      description: 'A distributed IoT sensor network for monitoring environmental conditions with real-time data visualization and alerts.',
      category: 'IOT',
      image: '/images/project6.jpg',
      link: '#'
    },
    {
      id: 8,
      title: 'Sentiment Analysis ML',
      description: 'Natural language processing model for sentiment analysis of social media posts using deep learning techniques.',
      category: 'Machine Learning',
      image: '/images/project7.jpg',
      link: '#'
    },
    {
      id: 9,
      title: 'Fitness Tracker Mobile',
      description: 'A mobile fitness tracking app with workout plans, progress tracking, and social features for motivation.',
      category: 'Mobile',
      image: '/images/project8.jpg',
      link: '#'
    }
  ]

  const categories = ['All', 'Website', 'IOT', 'Machine Learning', 'Mobile']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    // Update body class and localStorage
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode'
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }


  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Portfolio</h2>
          </div>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
            <button 
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="menu-overlay" onClick={closeMobileMenu}></div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="accent-text">Aril</span>
            </h1>
            <h2 className="hero-subtitle">Frontend Developer</h2>
            <p className="hero-description">
              I'm a frontend developer passionate about creating beautiful and functional web experiences. 
              I love turning complex problems into simple, beautiful, and intuitive designs. 
              When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="#projects" className="btn btn-outline">See My Work</a>
            </div>
          </div>
          <div className="hero-image-section">
            <div className="hero-image-wrapper">
              <img 
                src="/images/aril.png" 
                alt="Aril" 
                className="hero-image"
                onError={(e) => {
                  console.error('Error loading image:', e);
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'block';
                  target.style.visibility = 'visible';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content-wrapper">
            <div className="about-text-content">
              <div className="about-intro">
                <h3>Frontend Developer</h3>
                <p className="about-lead">
                  I'm a passionate frontend developer with a love for creating beautiful, 
                  user-friendly web experiences.
                </p>
              </div>
              <div className="about-description">
                <p>
                  My journey in web development started with curiosity and has evolved into 
                  a career focused on building modern, responsive applications. I specialize 
                  in React, JavaScript, and modern CSS frameworks.
                </p>
                <p>
                  I'm always eager to learn new technologies and improve my skills. When I'm 
                  not coding, I enjoy contributing to open-source projects and sharing 
                  knowledge with the developer community.
                </p>
                <p>
                  My goal is to create web applications that are not only visually appealing 
                  but also performant and accessible to all users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">HTML</div>
              <h3>HTML</h3>
            </div>
            <div className="skill-card">
              <div className="skill-icon">CSS</div>
              <h3>CSS</h3>
            </div>
            <div className="skill-card">
              <div className="skill-icon">JS</div>
              <h3>JavaScript</h3>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚛️</div>
              <h3>React</h3>
            </div>
            <div className="skill-card">
              <div className="skill-icon">Node</div>
              <h3>Node.js</h3>
            </div>
            <div className="skill-card">
              <div className="skill-icon">Exp</div>
              <h3>Express</h3>
            </div>
            <div className="skill-card">
              <div className="skill-icon">Mongo</div>
              <h3>MongoDB</h3>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🐍</div>
              <h3>Python</h3>
            </div>
            <div className="skill-card">
              <div className="skill-icon">Git</div>
              <h3>Git</h3>
            </div>
            <div className="skill-card">
              <div className="skill-icon">TS</div>
              <h3>TypeScript</h3>
            </div>
            <div className="skill-card">
              <div className="skill-icon">Vue</div>
              <h3>Vue.js</h3>
            </div>
            <div className="skill-card">
              <div className="skill-icon">Sass</div>
              <h3>Sass</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          
          {/* Filter Buttons */}
          <div className="project-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Journey Map */}
          <div className="projects-journey">
            <div className="journey-line"></div>
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-journey-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="journey-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-pulse"></div>
                </div>
                <div className="project-journey-card">
                  <div className="project-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                    <div className="project-placeholder" style={{ display: 'none' }}>
                      {project.title}
                    </div>
                    <div className="project-overlay">
                      <div className="project-category">{project.category}</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="project-number">#{index + 1}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-project">
                      <span>View Project</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-content">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            <div className="contact-info">
              <div className="info-item">
                <h4>Email</h4>
                <p>aril@example.com</p>
              </div>
              <div className="info-item">
                <h4>Phone</h4>
                <p>+62 123 456 7890</p>
              </div>
              <div className="info-item">
                <h4>Location</h4>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
