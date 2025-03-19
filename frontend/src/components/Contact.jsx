import React from 'react'
import Footer from './Footer'
import { IoLocation } from "react-icons/io5";
import { FaMobile } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import Navbar from './Navbar';

const Contact = () => {

  return (
    <>
    <Navbar/>
    <div className='contact_pg'>
      <div className='cont_img'></div>
      <div className='sub_contact'>
      <div className='cards_div'>
        <div className='loct_card'>
          <IoLocation />
          <p style={{margin:'0px'}}>__________</p>
          <p>Srikakulam, Andhra Pradesh</p>
        </div>
        <div className='moblie_card'>
          <FaMobile />
          <p style={{margin:'0px'}}>__________</p>
          <p>+91 9999999999</p>
        </div>
        <div className='email_card'>
          <MdEmail />
          <p style={{margin:'0px'}}>__________</p>
          <p>company@gmail.com</p>
        </div>
      </div>
    <div style={{
        width:'900px', 
        height:'600px' , 
        display:'flex', 
        alignItems:'center', 
        justifyContent:'center'}}>
      <div className='message_bd'>
        <input className='cont_name' type='text' placeholder='Enter your name..'/>
        <input className='cont_mail' type='mail' placeholder='Enter your Email Id..'/>
        <input className='cont_sub' type='text' placeholder='Subject...'/>
        <textarea className='cont_mess' type='text' placeholder='Message...'/>
        <button className='send_btn' type='submit' >&nbsp;Send <IoIosSend style={{verticalAlign:'middle'}}/></button>
      </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
