import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import logo from './logo.svg';
import './App.css';
// import Tdlist from './Tdlist';
import Todos from './Todos';
import Index from './views/Index/Index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/tdlist" element={<Tdlist/>} /> */}
          <Route path="todos" element={<Todos/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
