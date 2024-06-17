import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Details from './routes/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
