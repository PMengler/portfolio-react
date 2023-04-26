import React from 'react';
import Me from '../assets/images/Picture.jpeg';
import ImageScroll from '../components/Travel-Pics.js';

const styles = {
  h1: {
    margin: '20px',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  section: {
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'row',
    minWidth: '300px',
    maxWidth: '600px',
  },
  img: {
    maxWidth: '300px',
  },
  p: {
    color: 'white',
    fontFamily: 'Open Sans, sans-serif',
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
          <div style={styles.p}>
            <p>Full Stack Web Developer</p>
            <p>Civil Engineer</p>
            <p>World Traveller</p>
            <p>Always Learning</p>
            <p>
              At age 28, I looked back at where I was in life and then looked as
              far forward on my path as I could imagine. I realized that I
              didn't like where I was going- that I wouldnt find happiness
              there. So I left my position as a civil engineer and decided to
              travel the world during the summer of 2022. Upon my return, I dove
              into programming and enrolled in a Full Stack Web Development
              bootcamp. As they say, the rest is history.
            </p>
            <p>Browse Below for a glimpse at my travels!</p>
          </div>
        </section>
      </div>
      <div>
        <ImageScroll />
      </div>
    </div>
  );
}
