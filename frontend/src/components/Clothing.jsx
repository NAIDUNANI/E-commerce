import React, { useEffect, useState} from 'react'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { addToCart } from './store'
import { PiCurrencyInrBold } from "react-icons/pi";
import Navbar from './Navbar';

const Clothing = () => {
    const [products, setProducts] = useState([])
    const [userinput, setuserinput] = useState("")
  
    useEffect(()=>{
      fetch('/Cloting_items.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
    },[])
      
  
    const fliteredproducts = products.filter((product)=>{
      if(userinput===""){
        return product;
      }
      else if(product.title.toLowerCase().includes(userinput.toLowerCase())){
        return product;
      }
      
    });
  
      return(
        <>
        <Navbar/>
      <div className='product_main_bd'>
        <input className='input_flied' type="" placeholder="Search your product..." onChange={(e)=>{
          setuserinput(e.target.value)
        }}/>
      <div className='main_parent'>
      
        {
          (fliteredproducts.length>0)?(fliteredproducts.map((product)=>{
            return(
              <div className='product_parent'>
                <img src={product.image} width={150} alt=''/>
                  <h2>{product.title}</h2>
                  <div className='sub_section'>
                    <p>Category : {product.category}</p>
                    <p>Color: {product.color}</p>
                    <p>Brand : {product.brand}</p>
                    
                  </div>
                  
                  <div className='price_cart_btn'>
                    <button className='produ_price'>
                      <PiCurrencyInrBold style={{textAlign:'center', fontSize:'15px',color:'white'}}/><span style={{textAlign:'center', fontSize:'15px',color:'white'}}>{product.price}</span>
                    </button><br/>
                  
                    <button className='cart_btn'>Add To Cart</button>
                  </div>
              </div>
  
            )
          })):(
            <div className='not_found'>
              <h2>Product not found</h2>
              <img src='https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-illustration-download-in-svg-png-gif-file-formats--no-records-list-record-emply-data-user-interface-pack-design-development-illustrations-6430781.png?f=webp' width={250} alt=''/>
            </div>
          )
        }
      </div>
      </div>
      <Footer/>
      </>
        
    )
}

export default Clothing
