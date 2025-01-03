import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import Footer from './Footer';
import { PiCurrencyInrBold } from "react-icons/pi";

const Cart = () => {
    return (
        <>
            <div className='cart_bd'>
                <div className='cart_head'>
                    <h2>Your Cart</h2>
                </div><br/>
                <div className='cart_item'>
                    <img className='item_img' src='https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075831385-iPhone%2014%20pro%20max.jpg' width={150} height={150}></img>
                    <div >
                        <p className='item_title'>Apple iPhone 14 Pro Max (256 GB) - Deep Purple</p>
                        <span className='item_color'><span style={{fontWeight:'Bold',fontSize:'20px'}}>Color :</span> Deep Purple</span><br/>
                        <span className='item_brand'><span style={{fontWeight:'Bold',fontSize:'20px'}}>Brand :</span> apple</span>
                    </div>
                    <span className='item_price'><PiCurrencyInrBold />75,999/-</span>
                    <button className='del_btn'><MdDeleteForever /></button>
                </div>
            </div>
        <Footer/>
        </>
        
    )
}

export default Cart
