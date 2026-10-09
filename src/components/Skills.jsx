import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <p className="section-title">My Skills</p>
        <h2>What I Know</h2>
        <p className="skills-intro">
          Here are some technologies and programming languages I am currently
          learning and working with.
        </p>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>HTML</h3>
            <p>Web Structure</p>
            <div className="progress">
              <div className="progress-bar html"></div>
            </div>
            <span>90%</span>
          </div>

          <div className="skill-card">
            <h3>CSS</h3>
            <p>Web Designing</p>
            <div className="progress">
              <div className="progress-bar css"></div>
            </div>
            <span>85%</span>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Web Functionality</p>
            <div className="progress">
              <div className="progress-bar javascript"></div>
            </div>
            <span>75%</span>
          </div>

          <div className="skill-card">
            <h3>React</h3>
            <p>Frontend Development</p>
            <div className="progress">
              <div className="progress-bar react"></div>
            </div>
            <span>70%</span>
          </div>

          <div className="skill-card">
            <h3>C++</h3>
            <p>Programming</p>
            <div className="progress">
              <div className="progress-bar cpp"></div>
            </div>
            <span>80%</span>
          </div>

          <div className="skill-card">
            <h3>Java</h3>
            <p>Programming & OOP</p>
            <div className="progress">
              <div className="progress-bar java"></div>
            </div>
            <span>75%</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;