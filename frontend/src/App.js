import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Registeation from './components/Registeation';
import Login from './components/Login';
import Electronics from './components/Electronics'
import Contact from './components/Contact';
import Clothing from './components/Clothing';
import Allproducts from './components/Allproducts';
import Cart from './components/Cart';

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>}/>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Registeation/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='electronic' element={<Electronics/>}/>
        <Route path='clothing' element={<Clothing/>}/>
        <Route path='products' element={<Allproducts/>}/>
      </Routes>
    </div>
  );
}

export default App;
