import React from 'react';
import { projects } from '../../assets/projectData/projects';

const styles = {
  h1: {
    margin: '20px',
  },
  title: {
    textAlign: 'center',
  },
  img: {
    width: '300px',
    height: '150px',
  },
  projects: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
};

export default function Portfolio() {
  return (
    <div style={styles.h1}>
      <h1>Portfolio</h1>
      <p>A collection of my favorite projects.</p>
      <section id="projects">
        <div className="container">
          <div>
            <h3 style={styles.title}>Apps that I've Built</h3>
          </div>
          <div style={styles.projects}>
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
              >
                <img
                  alt="gallery"
                  src={project.image}
                  style={styles.img}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
