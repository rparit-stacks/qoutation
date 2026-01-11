import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import QuotePage from './components/QuotePage';
import BlankPage from './components/BlankPage';
import CheckpointTracker from './components/CheckpointTracker';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BlankPage />} />
          <Route path="/sara" element={<QuotePage />} />
          <Route path="/sara/plan" element={<CheckpointTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

