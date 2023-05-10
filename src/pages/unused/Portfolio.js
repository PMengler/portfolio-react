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
    width: '250px',
    height: '250px',
    margin: '50px',
    borderRadius: '25px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 1)',
  },
  projects: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: '20px',
  },
  description: {
    fontWeight: 'bold',
  },
};

export default function Portfolio() {
  return (
    <div style={styles.h1}>
      <h1>Portfolio</h1>
      <p>A collection of my favorite projects.</p>
      <section id="projects">
        <div className="container">
          <div style={styles.projects}>
            {projects.map((project) => (
              <div>
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
                <div style={styles.description}>
                  <p></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
