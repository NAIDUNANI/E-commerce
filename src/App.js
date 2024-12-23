import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Registeation from './components/Registeation';
import Login from './components/Login';
import Electronics from './components/Electronics'
import Contact from './components/Contact';
import Clothing from './components/Clothing';
import Allproducts from './components/Allproducts';

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/register','/login'];


  return (
    <div>
      {
        !hideNavbarRoutes.includes(location.pathname) && <Navbar />
      }
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>}/>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Registeation/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='electronic' element={<Electronics/>}/>
        <Route path='clothing' element={<Clothing/>}/>
        <Route path='products' element={<Allproducts/>}/>
      </Routes>
    </div>
  );
}

export default App;
