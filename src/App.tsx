// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import ProductList from './components/ProductList'; 
import UserList from './components/UserList'; 
import CatFacts from './components/CatFacts'; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/user" element={<UserList />}/>
        <Route path="/cat" element={<CatFacts/>} />
      </Routes>
    </Router>
  );
}

export default App;

