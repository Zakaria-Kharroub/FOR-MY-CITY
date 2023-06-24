import React from 'react'
import '../css/Test.css'
// import { Link,Route,Routes } from "react-router-dom";
// import Sig from './Sig';


const Login = () => {
  return (
    <>
     <div className='all-login'>
      <h1 className='footer-title'>Login</h1>   
      <p className='s-title-contact' style={{fontWeight:'bold'}}>We are happy to hear from you</p>
      <form>
      <div className='input-line-1'>
          <input type='text' placeholder=' CIN... '/><br/>
          <input type='text' placeholder='Password...'/>
        </div>
        <input type='submit' value='Send' className='send-form-login'/> 
      </form>
      {/* <p className='s-title-contact'>Don't have an account? <a href="./Sig.jsx">Sign up</a></p> */}

      
      
    </div>

   
    
    </>
   
  )
}

export default Login
