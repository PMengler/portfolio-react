import React from 'react';

const styles = {
  h1: {
    margin: '20px',
  },
  a: {
    color: '#040404',
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
      <img
        src=""
        alt=""
      ></img>
    </div>
  );
}
