import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    backgroundAttachment: 'fixed',
    width: '80vw',
    minHeight: '150vh',
    marginLeft: '10%',
  },
};

const App = () => {
  return (
    <Router>
      <div style={styles.body}>
        <div style={styles.container}>
          <Routes>
            <Route
              path="/portfolio-react"
              element={<PortfolioContainer />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
