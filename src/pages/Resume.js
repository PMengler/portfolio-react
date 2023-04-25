import React from 'react';

const styles = {
  h1: {
    margin: '20px',
  },
  a: {
    color: '#040404',
  },
  skills: {
    textAlign: 'center',
  },
};

export default function Resume() {
  return (
    <div style={styles.h1}>
      <h1>Resume</h1>
      <a
        href="https://github.com/PMengler/Weekly-Challenge-2/files/11055615/Resume-.Web.Dev.pdf"
        style={styles.a}
      >
        <p>Download Here</p>
      </a>
      <div style={styles.skills}>
        <h3 style={styles.skills}>Key Skills</h3>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>NodeJS</p>
        <p>Express</p>
        <p>Mongoose</p>
        <p>MongoDB</p>
        <p>MySQL</p>
        <p>Git</p>
      </div>
    </div>
  );
}
