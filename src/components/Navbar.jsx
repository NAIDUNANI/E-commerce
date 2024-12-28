import { useState, useEffect } from 'react';
import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { MdLogin } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import { TbLogout2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

  const [isLogedin, setisLogedin] = useState(true);
  const navigate = useNavigate();
  const [dropOpen, setDropOpen] = useState(false);
  const location = useLocation();

  const handlelogout = () =>{
    setisLogedin(false);
    navigate('/login')
  }

  const toggleDropdown = () => {
    setDropOpen(!dropOpen); // Toggle the dropdown menu visibility
  };

  useEffect(() => {
    setDropOpen(false);
  }, [location.pathname]);

  return (
    <nav className='nav_bar'>
      <div className='logo'>
        <img className='logo' src='https://www.logodesign.net/logo/dollar-sign-incorporated-with-shopping-cart-5403ld.png?nwm=1&nws=1&industry=ecommerce&sf=&txt_keyword=All'/>
      </div>
      <ul className='nav_menu'>
        <li><NavLink className='links' to='/' >Home</NavLink></li>
        <li>
          <NavLink style={{verticalAlign:'middle'}} className='links' to='/products'>Products </NavLink>
          <IoIosArrowDown className='dropdown' onClick={toggleDropdown}/>
          {
            dropOpen&&(
              <div className='dropdown_menu'>
                <div className='cloth_link'><Link className='drop_link' to='/clothing'>Clothing</Link></div>
                <div className='electro_link'><Link className='drop_link' to='/electronic'>Electronics</Link></div>
              </div>
            )
          }
        </li>
        <li><NavLink className='links' to='/about' >About</NavLink></li>
        <li><NavLink className='links' to='/contact'>Contact</NavLink></li>
        {
          (isLogedin)?(<div className='buttons'>
            <button onClick={handlelogout} className='regi_but'><Link className='links1' to='/logout'><TbLogout2 style={{verticalAlign:'middle'}}/>&nbsp; Logout</Link></button>
          </div>):(<div className='buttons'>
            <button onClick={()=>{
              setisLogedin(false)
            }} className='log_but'><Link className='links1' to='/login'><MdLogin style={{verticalAlign:'middle'}}/>&nbsp; Login</Link></button>
            <button className='regi_but'><Link className='links1' to='/register'><GiArchiveRegister style={{verticalAlign:'middle'}}/>&nbsp; Register</Link></button>
          </div>)
        }

        
      </ul>

    </nav>
  );
};

export default Navbar;
