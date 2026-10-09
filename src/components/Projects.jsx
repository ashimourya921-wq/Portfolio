function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>Civic Complaint Platform</h3>
          <p>
            A web platform where users can submit and track civic complaints.
          </p>
          <span>React • JavaScript • CSS</span>
        </div>

        <div className="project-card">
          <h3>Smart Tourism Assistant</h3>
          <p>
            A tourism website that helps users find nearby places, hotels,
            food and routes.
          </p>
          <span>React • JavaScript • API</span>
        </div>

        <div className="project-card">
          <h3>Image Gallery</h3>
          <p>
            A responsive image gallery with navigation and interactive effects.
          </p>
          <span>HTML • CSS • JavaScript</span>
        </div>

        <div className="project-card">
          <h3>Calculator</h3>
          <p>
            A simple calculator for basic arithmetic operations.
          </p>
          <span>HTML • CSS • JavaScript</span>
        </div>

      </div>
    </section>
  );
}

export default Projects;