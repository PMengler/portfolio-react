import React from 'react';

const styles = {
  footer: {
    position: 'relative',
    width: '100%',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px 0px',
    margin: 'auto 0',
    backgroundColor: '#040404',
  },
  a: {
    color: '#A15C46',
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
        <div>
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
        </div>
      </footer>
    </div>
  );
}

export default Footer;
