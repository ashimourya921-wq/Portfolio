import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <p className="section-title">About Me</p>

        <h2>Who I Am</h2>

        <p>
          Hello! I am Ashi Mourya, a Computer Science Engineering student.
          I am interested in web development and enjoy creating modern,
          responsive and user-friendly websites.
        </p>

        <p>
          I am currently learning React, JavaScript, HTML and CSS. My goal is
          to become a skilled software engineer and build useful real-world
          projects.
        </p>

        <div className="about-info">
          <div>
            <h3>Education</h3>
            <p>B.Tech CSE</p>
          </div>

          <div>
            <h3>Focus</h3>
            <p>Web Development</p>
          </div>

          <div>
            <h3>Learning</h3>
            <p>React & JavaScript</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;