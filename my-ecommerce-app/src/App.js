import React from 'react';
import Homepage from './component/Homepage.js'; 
import ProductPage from './component/Productpage.js'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Homepage includes Header and Footer */}
        <Route path="/product" element={<ProductPage />} /> {/* Add the ProductPage route */}
      </Routes>
    </Router>

  );
}

export default App;

