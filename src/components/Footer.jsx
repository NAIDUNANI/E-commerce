import React from 'react';
import { FiPhoneCall  } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaArrowCircleRight, FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram , FaLinkedin, FaSquareXTwitter, FaMapLocationDot } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
    <div className='foot'>
      <div className='sub_foot'>
        <img className='foot_logo' src="https://www.logodesign.net/logo/dollar-sign-incorporated-with-shopping-cart-5403ld.png?nwm=1&nws=1&industry=ecommerce&sf=&txt_keyword=All" alt=''/>
      </div>

      <div className='fmenu_bar'>
      <h2 style={{color:'whitesmoke',marginLeft:'2rem'}}>Quick Links</h2>
      <ul className='fmenu'>
        <li style={{listStyle:'none'}}><FaArrowCircleRight className='ficon' /><Link className='foot_links' to='/'> Home</Link></li>
        <li style={{listStyle:'none'}}><FaArrowCircleRight className='ficon'/><Link className='foot_links' to='/about'> About</Link></li>
        <li style={{listStyle:'none'}}><FaArrowCircleRight className='ficon'/><Link className='foot_links' to='/contact'> Contact</Link></li>
        <li style={{listStyle:'none'}}><FaArrowCircleRight className='ficon'/><Link className='foot_links' to='/product'> Products</Link></li>
      </ul>
      </div>
      <div className='address_sec'>
          <span className='add'><span style={{color:'white'}}><FaMapLocationDot style={{verticalAlign:'middle', color:'white', fontSize:'25px'}}/></span> Srikakulam,&nbsp;Andhra Pradesh</span><br/><br/>
          <span className='ph'><FiPhoneCall style={{verticalAlign:'middle', color:'white'}}/> +91 9999999999</span><br/><br/>
          <span className='mail'><MdEmail style={{verticalAlign:'middle', color:'white' }}/> company@gmail.com</span>
        </div>
    </div>
    <div className='profile_li'>
      <FaSquareInstagram  className='picon'/>
      <FaFacebookSquare className='picon'/>
      <FaLinkedin className='picon'/>
      <RiWhatsappFill className='picon'/>
      <FaSquareXTwitter className='picon'/>

    </div>
    </>
  );
};

export default Footer;
