import React from 'react';
import Me from '../assets/images/Picture.jpeg';
import { projects } from '../assets/projectData/projects';
import Contact from './Contact';
import styles from '../assets/styles/styles';

export default function About() {
  return (
    <div>
      <div style={styles.h1}>
        <h1>Patrick Mengler</h1>
        <div style={styles.main}>
          <section style={styles.section}>
            <img
              alt="me"
              src={Me}
              style={styles.img}
            />
          </section>
          <section style={styles.section}>
            <div style={styles.p}>
              <p>
                Full Stack Web Developer
                <br />
                Civil Engineer
                <br />
                World Traveller
                <br />
                Always Learning
              </p>
              <p>
                At age 28, I looked back at where I was in life and then looked
                as far forward on my path as I could imagine. I realized that I
                didn't like where I was going- that I wouldnt find happiness
                there. So I left my position as a civil engineer and decided to
                travel the world during the summer of 2022. Upon my return, I
                dove into programming and enrolled in a Full Stack Web
                Development bootcamp. As they say, the rest is history.
              </p>
              <div style={styles.p}>
                <p>
                  Key Skills:
                  <br />
                  Git, HTML & CSS, JavaScript, React, Node, Express,
                  <br />
                  Python, Flask, sqlAlchemy, MongoDB, MySQL, GraphQL
                </p>
              </div>
              <a
                href="https://github.com/PMengler/Weekly-Challenge-2/files/11055615/Resume-.Web.Dev.pdf"
                style={styles.p}
              >
                <p>Download my resume here</p>
              </a>
            </div>
          </section>
        </div>
      </div>
      <div style={styles.h1}>
        <h1>Projects</h1>
        <section id="projects">
          <div className="container">
            <div style={styles.projects}>
              {projects.map((project) => (
                <div key={project.id}>
                  <a
                    href={project.link}
                    key={project.img}
                  >
                    <img
                      alt="gallery"
                      src={project.image}
                      style={styles.imgProj}
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
      <div>
        <Contact />
      </div>
    </div>
  );
}
