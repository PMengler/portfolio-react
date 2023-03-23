import React from 'react';

const styles = {
  h1: {
    margin: '20px',
  },
};

export default function About() {
  return (
    <div style={styles.h1}>
      <h1>About Me</h1>
      <p>This is about me</p>
      <h2>World Media</h2>
      <p>Photos</p>
    </div>
  );
}
