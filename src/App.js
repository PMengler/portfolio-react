import React from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import Venice from './assets/images/Venice.jpeg';
import Footer from './components/Footer';

const styles = {
  body: {
    backgroundColor: '#040404',
  },
  container: {
    backgroundImage: `url(${Venice})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '80vw',
    height: '100vh',
    marginLeft: '10%',
  },
};

const App = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <container>
          <PortfolioContainer />
        </container>
      </div>
      <Footer />
    </div>
  );
};

export default App;
