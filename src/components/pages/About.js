import React from 'react';
import Me from '../../assets/images/Picture.jpeg';

const styles = {
  h1: {
    margin: '20px',
    flexDirection: 'row-wrap',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
  },
  section: {
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column-wrap',
  },
  img: {
    width: '300px',
  },
};

export default function About() {
  return (
    <div style={styles.h1}>
      <h1>About Me</h1>
      <div style={styles.main}>
        <section style={styles.section}>
          <img
            alt="me"
            src={Me}
            style={styles.img}
          />
        </section>
        <section style={styles.section}>
          <p>Civil Engineer and Junior Developer</p>
        </section>
      </div>
    </div>
  );
}
