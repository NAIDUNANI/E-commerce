import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Registeation = () => {

  

  const [formdata, setFormdata] = useState({
    username:"",
    useremail:"",
    usernumber:"",
    pass:"",
    cpass:""
  })

  const [error, setError] = useState({})

  const submited = (e) =>{
    e.preventDefault()

    let error = {}

    if (formdata.username===''){
      error.username="Username Required!"
    }
    else if(formdata.username.length<3){
      error.username="Username min 3 character required!"
    }

    setError(error)
  }

  const handelchange =(e)=>{
      const {name,value}=e.target
      setFormdata({...formdata,[name]:value});

      
  }

  return (
    <div className='reg_body'>
      <div className='form_div'>
        <h1 style={{display:'inline'}}>Register Form</h1>
        <form className='form_bd' onSubmit={submited}>
        <div className='form_group'>
            <label className='la_name'>User Name</label><br/>
            <input className='in_name' type='text' placeholder='Enter your name...' required name='username' onChange={handelchange} value={formdata.username}/>
            {
              (error.username)&&<p style={{color:'red', marginLeft:'15px',marginTop:'2pX',marginBottom:'0px'}}>{error.username}</p>
            }
          </div>
          <div className='form_group'>
            <label className='la_email'>User Email</label>
            <input className='in_mail' type='email' placeholder='Enter your email...' required  name='useremail'onChange={handelchange} value={formdata.useremail}/>
          </div>
          <div className='form_group'>
            <label className='la_num'>Mobile Number</label>
            <input className='in_num' type='number' placeholder='Enter your number...' required  name='usernumber' onChange={handelchange} value={formdata.usernumber}/>
          </div>
          <div className='form_group'>
            <label className='la_pass'>New Password</label>
            <input className='in_pass' type='password' placeholder='Choose a password...' required  name='pass' onChange={handelchange} value={formdata.pass}/>
          </div>
          <div className='form_group'>
            <label className='la_cpass'>Confirm Password</label>
            <input className='in_cpass' type='password' placeholder='Confirm your password...' required  name='cpass' onChange={handelchange} value={formdata.cpass}/>
          </div>
          <div className='sub_div'>
            <button type='submit' className='submit_btn'>Register</button>
          </div>
          <div style={{marginLeft:'100px',marginTop:'10px'}}>
            <p>Already have account? <Link to='/login' >Singin</Link></p>
          </div>
        </form>
        <div style={{width:'450px', height:'15px', backgroundColor:'#FFA500', marginTop:'17px', borderBottomRightRadius:'10px', borderBottomLeftRadius:'10px'}}></div>
      </div>
    </div>
  )
}

export default Registeation