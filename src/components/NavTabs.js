import React from 'react';

const styles = {
  a: {
    color: '#040404',
  },
  active: {
    backgroundColor: '#666D87',
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          style={styles.a}
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
