import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import QuotePage from './components/QuotePage';
import BlankPage from './components/BlankPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BlankPage />} />
          <Route path="/sara" element={<QuotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

