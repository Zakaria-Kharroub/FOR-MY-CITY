import React from 'react'
import '../css/Thend.css'
const Footer = () => {
  return (
    <>
    
    <div className='footer-all'>
        <h1 className='footer-title'>Follow <span style={{color:'#5E678B'}}>Us</span></h1>
        <p className='sbtitle-footer'>Discover the centers collaborating with us</p>
        <input type='text' className='input-footer' placeholder='your email...'/>
        <input type='submit' value='subscribe'  className='btn-footer'/>
    </div>
    <div className='buttom-footer'>
        <p className='p-footer' >CopyRight © ForMyCity</p>
    </div>
    
    </>
  )
}

export default Footer
