import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import Footer from './Footer';
import { PiCurrencyInrBold } from "react-icons/pi";
import Navbar from './Navbar';

const Cart = () => {
    return (
        <>
        <Navbar/>
            <div className='cart_bd'>
                <div className='cart_head'>
                    <h2>Your Cart</h2>
                </div><br />
                <div>
                    <div className='cart_item'>
                        <img className='item_img' src='https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691075831385-iPhone%2014%20pro%20max.jpg' width={150} height={150}></img>
                        <div >
                            <p className='item_title'>Apple iPhone 14 Pro Max (256 GB) - Deep Purple</p>
                            <span className='item_color'><span style={{ fontWeight: 'Bold', fontSize: '20px' }}>Color :</span> Deep Purple</span><br />
                            <span className='item_brand'><span style={{ fontWeight: 'Bold', fontSize: '20px' }}>Brand :</span> apple</span>
                        </div>
                        <span className='item_price'><PiCurrencyInrBold />75,999/-</span>
                        <button className='del_btn'><MdDeleteForever /></button>
                    </div>
                    <div className="total_price">
                        <div style={{ margin: '10px',paddingBottom:'5px' , borderBottom:'1px solid' }}>
                            <span style={{ fontSize: '20px', marginLeft: '10px' }}>Items Price's :</span>
                            <span className="pri_display">1520/-</span><br />

                            <span style={{ fontSize: '20px', marginLeft: '10px' }}>Delivery Fee :</span>
                            <span className="pri_display">0</span><br />

                            <span style={{ fontSize: '20px', marginLeft: '10px' }}>Platform Fee :</span>
                            <span className="pri_display">0</span><br />


                        </div>
                        <span style={{ fontSize: '20px', marginLeft: '20px' }}>Total Price:</span>
                        <span className="pri_display" style={{marginRight:'10px'}}>1520/-</span>
                    </div>

                </div>
            </div>
            <Footer />
        </>

    )
}

export default Cart
