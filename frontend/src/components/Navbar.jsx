import { useState, useEffect } from 'react';
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MdLogin } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import { TbLogout2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaLuggageCart } from "react-icons/fa";
import Swal from 'sweetalert2';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropOpen, setDropOpen] = useState(false);
  const [isLogedin, setisLogedin] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setisLogedin(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setisLogedin(false);
    Swal.fire({
      icon: 'success',
      title: 'Logged Out!',
      text: 'You have been successfully logged out.',
      timer: 2000,
      showConfirmButton: false
    });
  };

  const toggleDropdown = () => {
    setDropOpen(!dropOpen);
  };

  return (
    <nav className='nav_bar'>
      <div className='logo'>
        <img className='logo' src='https://www.logodesign.net/logo/dollar-sign-incorporated-with-shopping-cart-5403ld.png?nwm=1&nws=1&industry=ecommerce&sf=&txt_keyword=All'/>
      </div>
      <ul className='nav_menu'>
        <li><NavLink className='links' to='/'>Home</NavLink></li>
        <li>
          <NavLink className='links' to='/products'>Products </NavLink>
          <IoIosArrowDown className='dropdown' onClick={toggleDropdown}/>
          {dropOpen && (
            <div className='dropdown_menu'>
              <div><Link className='drop_link' to='/clothing'>Clothing</Link></div>
              <div><Link className='drop_link' to='/electronic'>Electronics</Link></div>
            </div>
          )}
        </li>
        <li><NavLink className='links' to='/about'>About</NavLink></li>
        <li><NavLink className='links' to='/contact'>Contact</NavLink></li>
        <li><NavLink className='links' to='/cart'><FaLuggageCart /></NavLink></li>

        {isLogedin ? (
          <button onClick={handleLogout} className='regi_but'>
            <TbLogout2 style={{ verticalAlign: 'middle' }} /> Logout
          </button>
        ) : (
          <div className='buttons'>
            <button className='log_but'>
              <Link className='links1' to='/login'><MdLogin style={{ verticalAlign: 'middle' }} /> Login</Link>
            </button>
            <button className='regi_but'>
              <Link className='links1' to='/register'><GiArchiveRegister style={{ verticalAlign: 'middle' }} /> Register</Link>
            </button>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
