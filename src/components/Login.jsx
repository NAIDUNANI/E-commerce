import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login_page'>
      <div className='login_form'>
        <img className='login_img' src='https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg'/>
        <form className='log_bd'>
          <h1 style={{marginTop:'10px'}}>User Login</h1>
          <div className='fr_indiv'>
            <input className='user_in' type='text' placeholder='Username'/>
          </div>
          <div className='fr_passdiv'>
            <input className='user_pass' type='password' placeholder='Password'/>
          </div>
          <p style={{marginTop:'-8px',marginLeft:'150px'}}><Link>Forget Password?</Link></p>
          <div>
            <button style={{width:'100px',height:'30px', borderRadius:'5px', backgroundColor:'#fdb93a', border:'none'}}><Link to='/' className='logpg_btn'>Singin</Link></button>
          </div>
        </form><br/>
        <span style={{marginLeft:'90px',}}>Don't have an account? <Link className='login_reg_btn' to='/register'>Register</Link></span>
      </div>
    </div>
  )
}

export default Login
