import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Offer from "../pic/top-offer.png"
import moblies from "../pic/mobiles.png"
import Tv from "../pic/tv.png"
import Electronic from "../pic/electronic.png"
import Fashion from "../pic/fashion.png"
import Beauty from "../pic/beauty.png"
import Home1 from "../pic/home.png"
import Furniture from "../pic/furniture.png"
import Travel from "../pic/travel.png"
import Grocery from "../pic/grocery.png"
import Mob1 from "../pic/realme.png"
import Mob2 from "../pic/vivo.png"
import Mob3 from "../pic/poco.png"
import Mob4 from "../pic/redmi.png"
import Mob5 from "../pic/moto.png"
import Mob6 from "../pic/realme pro.jpg"
import Tv1 from "../pic/Acer_Tv.jpg"
import Tv2 from "../pic/Samsung_Tv.jpg"
import Tv3 from "../pic/Sony_Tv.png"
import Tv4 from "../pic/Redmi_Tv.jpg"
import Tv5 from "../pic/LG_Tv.png"
import Tv6 from "../pic/MI_Tv.jpg"
import Tv7 from "../pic/Tcl_Tv.jpg"
import { Link } from 'react-router-dom';
import Footer from './Footer';


function Home() {
  return (
    <>
    <div className='home_bd'>
      <section id="section1">
        <div class="div1">
            <figure class="top" style={{marginleft: '120px'}}>
                <img src={Offer} width="60" height="60" style={{marginLeft: "7px"}}/>
                <figcaption class="top_names">Top Offers</figcaption>
            </figure>
            <figure class="top">
                <img src={moblies} width="60" height="60" style={{marginLeft: "28px"}}/>
                <figcaption class="top_names">Mobiles & Tablets</figcaption>
            </figure>
            <figure class="top">
                <img src={Tv} width="60" height="60" style={{marginLeft: "28px"}}/>
                <figcaption class="top_names">TVs & Applictions</figcaption>
            </figure>
            <figure class="top">
                <img src={Electronic} width="60" height="60" style={{marginLeft: "6px"}}/>
                <figcaption class="top_names">Electronics</figcaption>
            </figure>
            <figure class="top">
                <img src={Fashion} width="60" height="60" style={{marginLeft: "-5px"}}/>
                <figcaption class="top_names">Fashion</figcaption>
            </figure>
            <figure class="top">
                <img src={Beauty} width="60" height="60" style={{marginLeft: "-5px"}}/>
                <figcaption class="top_names">Beauty</figcaption>
            </figure>
            <figure class="top">
                <img src={Home1} width="60" height="60" style={{marginLeft: "23px"}}/>
                <figcaption class="top_names">Home & Kitchen</figcaption>
            </figure>
            <figure class="top">
                <img src={Furniture} width="60" height="60"/>
                <figcaption class="top_names">Furniture</figcaption>
            </figure>
            <figure class="top">
                <img src={Travel} width="60" height="60" style={{marginLeft: "-5px"}}/>
                <figcaption class="top_names">Travel</figcaption>
            </figure>
            <figure class="top">
                <img src={Grocery} width="60" height="60" style={{marginLeft: "-5px"}}/>
                <figcaption class="top_names">Grocery</figcaption>
            </figure>
        </div>
    </section>

    <Carousel className='section2'>
      <Carousel.Item interval={1100} >
        <img 
          style={{marginLeft:'25rem'}}
          src='https://media.wired.com/photos/632119a7f1e5c40d2b1bc647/3:2/w_2400,h_1600,c_limit/iPhone-14-Pro-Review-Gear.jpg'  
          width={650} 
          height={435}
          text="First slide" />
        <Carousel.Caption>
          <h3 
            style={{
              color:'black',
              marginTop:'-385px',
              marginLeft:'-40px'
            }}>iphone 15 Pro max</h3>
          <p 
            style={{
              color:'black',
              marginLeft:'-40px',
              marginTop:'5px'

            }}>Experience the future of smartphones with the all-new iPhone 15 Pro Max</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1100} >
          <img
            style={{marginLeft:'15rem'}}
            src='https://techarc.net/wp-content/uploads/2023/06/Samsung-Odyssey-G9-OLED-Gaming-Monitor-techarc.jpg'  
            width={1000} 
            height={435} 
            text="Second slide" />
        <Carousel.Caption style={{color:'black'}}>
          <h3>Samsung 49-Inch CHG90 Curved Gaming Monitor</h3>
          <p>Immerse yourself in gaming like never before with Samsung's ultimate ultra-wide curved monitor.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1100}>
      <h3
          style={{
            color:'black',
            position:'absolute',
            top:"20px",
            left:'520px'
          }}>Men's Cotton Jacket</h3>
          <img
            style={{marginLeft:'32rem'}}
            src='https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-lu8l1v18jv5fde'  
            width={500} 
            height={435} 
            text="Third slide" />
        <Carousel.Caption >
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1100}>
          <img
            style={{marginLeft:'15rem'}}
            src='https://www.sony-asia.com/image/cee14c179dfe1451ff9fc70f69ed9bef?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9'  
            width={1050} 
            height={435} 
            text="Third slide" />
        <Carousel.Caption >
          <h3
          style={{
            fontSize:'50px',
            color:'black',
            position:'absolute',
            marginLeft:'50px',
            fontFamily:'monospace',
            marginTop:'-300px'
          }}>Sony Headset</h3>
          <p
          style={{
            color:'black',
            fontFamily:'monospace',
            }}>
          Elevate your audio experience with the unmatched clarity of Sony headsets.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1100}>
          <img
            style={{marginLeft:'25rem'}}
            src='https://images-cdn.ubuy.co.in/641983f6cf058e04772fa13f-playstation-ps5-video-game-console.jpg'  
            width={650}
            height={435}   
            text="Third slide" />
        <Carousel.Caption>
          <h3
          style={{
            fontSize:'25px',
            color:'black',
            position:'absolute',
            marginLeft:'190px',
            fontFamily:'monospace',
            marginTop:'-380px'
          }}>Sony PS5 PlayStation Console+God<br/> Of War Ragnarok</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <section class="section3">
        <p style={{fontSize:'x-large', fontWeight:'bold', margin:'20px', display:'inline-block' }}>Best Deals on Smartphones</p>
        <div class="mobiles">
        <div class="mobile1">
            <figure class="fig1">
                <img class="mobile_pic" src={Mob1} />
                <figcaption class="mobile_names">Realme P1 5g</figcaption>
                <figcaption class="mobile_cost">From ₹14,999</figcaption>
            </figure>
        </div>
        <div class="mobile1">
            <figure class="fig1">
                <img class="mobile_pic" src={Mob2} />
                <figcaption class="mobile_names">vivo T2 Pro 5g</figcaption>
                <figcaption class="mobile_cost">From ₹20,999*</figcaption>
            </figure>
        </div>
        <div class="mobile1">
            <figure class="fig1">
                <img class="mobile_pic" src={Mob3} />
                <figcaption class="mobile_names">Poco M6 Pro 5G</figcaption>
                <figcaption class="mobile_cost">From ₹9,249*</figcaption>
            </figure>
        </div>
        <div class="mobile1">
            <figure class="fig1">
                <img class="mobile_pic" src={Mob4}/>
                <figcaption class="mobile_names">Redmi 12 5G</figcaption>
                <figcaption class="mobile_cost">From ₹9,999*</figcaption>
            </figure>
        </div>
        <div class="mobile1">
            <figure class="fig1">
                <img class="mobile_pic" src={Mob5}/>
                <figcaption class="mobile_names">Moto Edge 50 Fusion</figcaption>
                <figcaption class="mobile_cost">From ₹20,999*</figcaption>
            </figure>
        </div>
        <div class="mobile1">
            <figure class="fig1">
                <img class="mobile_pic" src={Mob6} />
                <figcaption class="mobile_names">Realme P1 Pro 5G</figcaption>
                <figcaption class="mobile_cost">From ₹20,999</figcaption>
            </figure>
        </div>
        </div>
    </section>

    <section className='section4'>
    <p style={{fontSize:'x-large', fontWeight:'bold', margin:'20px', display:'inline-block' }}>Best Deals on Smart Tv's</p>
    <div class="Tv_s">
        <div class="tv1" >
            <figure class="Tv_fig1">
                <img class="Tv_pic" src={Tv1} width={330} height={230} />
                <figcaption class="Tv_names">Acer 139 cm (55 inches) Advanced I Series 4K<br/> Ultra HD Smart LED Google TV</figcaption>
                <figcaption class="Tv_cost">From ₹24,999</figcaption>
            </figure>
        </div>
        <div class="tv1">
            <figure class="Tv_fig1">
                <img class="Tv_pic" src={Tv2} width={340} height={250}/>
                <figcaption class="Tv_names">SAMSUNG 43-Inch 4K UHD Smart TV with HDR</figcaption>
                <figcaption class="Tv_cost">From ₹23,999*</figcaption>
            </figure>
        </div>
        <div class="tv1">
            <figure class="Tv_fig1">
                <img class="Tv_pic" src={Tv3} width={310} height={230}/>
                <figcaption class="Tv_names">SONY Bravia 189 cm (75 inch) Ultra HD<br/> (4K) LED Smart Google TV</figcaption>
                <figcaption class="Tv_cost">From ₹39,999*</figcaption>
            </figure>
        </div>
        <div class="tv1">
            <figure class="Tv_fig1">
                <img class="Tv_pic" src={Tv4} width={270} height={230}/>
                <figcaption class="Tv_names">Redmi Smart TV 32 - HD-Ready Smart TV</figcaption>
                <figcaption class="Tv_cost">From ₹19,999*</figcaption>
            </figure>
        </div>
        <div class="tv1">
            <figure class="Tv_fig1">
                <img class="Tv_pic" src={Tv5} width={330} height={230}/>
                <figcaption class="Tv_names">LG 81.28 cm 32 inch 32LQ635BPSA<br/> WebOS Smart LED HD TV</figcaption>
                <figcaption class="Tv_cost">From ₹25,999*</figcaption>
            </figure>
        </div>
        <div class="tv1">
            <figure class="Tv_fig1">
                <img class="Tv_pic" src={Tv6} width={280} height={230}/>
                <figcaption class="Tv_names">Xiaomi A Series 108 cm (43 inch) Full<br/> HD LED Smart Google TV with Dolby Audio </figcaption>
                <figcaption class="Tv_cost">From ₹20,999</figcaption>
            </figure>
        </div>
        <div class="tv1">
            <figure class="Tv_fig1">
                <img class="Tv_pic" src={Tv7} width={300} height={230}/>
                <figcaption class="Tv_names">TCL 43S435 43-inch 4K UHD Smart LED TV</figcaption>
                <figcaption class="Tv_cost">From ₹14,999</figcaption>
            </figure>
        </div>
        </div>
    </section>

    <div className='contact_home'>
      <p style={{
        fontSize:'25px',
        color:'black'
      }}>Have any questions? Feel free to reach out to us.</p>
      <button className='home_cont_btn'><Link style={{textDecoration:'none', color:'white'}} to='/contact'>Touch with us</Link></button>
    </div>
    </div>

    <Footer/>
    </>
  );
}

export default Home;