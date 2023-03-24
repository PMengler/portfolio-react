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
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width: '80vw',
    minHeight: '100vh',
    marginLeft: '10%',
  },
};

const App = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <PortfolioContainer />
      </div>
      <Footer />
    </div>
  );
};

export default App;
