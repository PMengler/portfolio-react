import React from 'react';

const styles = {
  footer: {
    position: 'sticky',
    bottom: '120px',
    display: 'block',
    width: '100%',
    textAlign: 'center',
    color: '#F6BC7D',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px 0px',
  },
  a: {
    color: '#040404',
    textDecoration: 'none',
  },
};

function Footer() {
  return (
    <div
      className="footer"
      style={styles.footer}
    >
      <footer>
        <a
          href="https://github.com/PMengler"
          style={styles.a}
        >
          <p>Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/patrick-mengler-28788116b/"
          style={styles.a}
        >
          <p>LinkedIn</p>
        </a>
        <a
          href="https://stackoverflow.com/users/21476447/pmengler"
          style={styles.a}
        >
          <p>Stack Overflow</p>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
