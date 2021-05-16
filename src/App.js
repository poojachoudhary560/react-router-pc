import React from 'react';
import './style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from './Routes';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="hr-break" />
        <Routes />
      </div>
    </Router>
  );
}
