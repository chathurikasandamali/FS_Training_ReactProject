import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import HelloWorld from './HelloWorld';

function AppContent() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>REACT</h1>
      <p>Welcome to the React app.</p>
      <div style={{ margin: '1rem 0' }}>
        <button onClick={() => navigate('/helloworld')}>Go to HelloWorld</button>
        <Link to="/" style={{ marginLeft: '1rem' }}>
          Home
        </Link>
        <Link to="/helloworld" style={{ marginLeft: '1rem' }}>
          HelloWorld
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/helloworld" element={<HelloWorld />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
