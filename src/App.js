import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Login } from './pages/login';
import { Home } from './pages/home';
import { Products } from './pages/products';
import { Card } from './pages/card';
import { Profile } from './pages/profile';
import { Contact } from './pages/contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Home/>}>
        <Route index element={<Products/>} />
      </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/card" element={<Card />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
}

export default App;
