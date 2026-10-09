import React from "react";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p>Hello, I'm</p>

        <h1>Ashi Mourya</h1>

        <h2>Frontend Developer</h2>

        <p className="description">
          I am a Computer Science Engineering student passionate about
          creating modern and attractive websites.
        </p>

        <div className="home-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;