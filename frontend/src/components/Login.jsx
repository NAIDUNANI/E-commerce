import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [useremail, setUseremail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ useremail, pass })
      });
  
      const result = await response.json();
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome back!',
          timer: 2000,
          showConfirmButton: false
        });
        localStorage.setItem('isLoggedIn', true);
        navigate('/');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!',
          text: result.error,
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };


  return (
    <div className='login_page'>
      <div className='login_form'>
        <img className='login_img' src='https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg' alt='Login'/>
        
        <form className='log_bd' onSubmit={handleLogin}>
          <h1 style={{marginTop:'10px'}}>User Login</h1>
          <div className='fr_indiv'>
            <input 
              className='user_in' 
              type='text' 
              placeholder='Email'
              value={useremail}
              onChange={(e) => setUseremail(e.target.value)}
            />
          </div>
          <div className='fr_passdiv'>
            <input 
              className='user_pass' 
              type='password' 
              placeholder='Password'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <p style={{marginTop:'-8px',marginLeft:'150px'}}>
            <Link to='/forgot-password'>Forget Password?</Link>
          </p>
          <div>
            <button 
              type='submit'
              style={{width:'100px',height:'30px', borderRadius:'5px', backgroundColor:'#fdb93a', border:'none'}}
            >
              Sign In
            </button>
          </div>
        </form>
        <br />
        <span style={{marginLeft:'90px'}}>Don't have an account? 
          <Link className='login_reg_btn' to='/register'> Register</Link>
        </span>
      </div>
    </div>
  )
}

export default Login;
