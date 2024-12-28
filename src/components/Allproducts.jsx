import React, { useEffect, useState} from 'react'
import Footer from './Footer'

const Allproducts = () => {
    const [products, setProducts] = useState([])
    const [userinput, setuserinput] = useState("")
  
    useEffect(()=>{
      fetch('/all_products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
    },[])
      
  
    const fliteredproducts = products.filter((product)=>{
      if(userinput===""){
        return products;
      }
      else if(product.title.toLowerCase().includes(userinput.toLowerCase())){
        return products;
      }
    })
  
      return(
        < >
      <div style={{paddingTop:'1rem'}}>
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
                    <p >Color: {product.color}</p>
                    <p >Brand : {product.brand}</p>
                    
                  </div>
                  <button className='produ_price'>
                    <svg style={{textAlign:'center'}} xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                    </svg><span style={{textAlign:'center', fontSize:'15px'}}>{product.price}</span>
                  </button>
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

export default Allproducts
