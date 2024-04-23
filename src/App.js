import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Videos from './Videos';
import SecondPage from './SecondPage.js';
import Paintings from './Paintings.js';
import Illustrations from './Illustrations.js';
import About from './About.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/about-contact" element={<About />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;
