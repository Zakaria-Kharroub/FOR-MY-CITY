// import React, { useState } from 'react'
import React from 'react'

import '../css/Test.css'

const Contact = () => {


  return (
    <>

    <div className='all-contact'>
      <h1 className='footer-title'>Contact <span style={{color:'#5E678B'}}>Us</span></h1>
      <p className='s-title-contact'>We are happy to hear from you</p>
      <form>
        <div className='input-line-1'>
          <input type='text' placeholder='Full name... '/>
          <input type='text' placeholder='Email...'/>
        </div>
        <div className='input-line-2'>
        <input type='text' placeholder='Message Subject...'/>
        </div>
        <div className='input-line-3'>
        {/* <input type='text' placeholder='your message ...'/> */}
        <textarea placeholder="Describe yourself here..."></textarea>
        </div>
        {/* location in google maps */}
        <div className='container'>
          <h2 style={{color:'#5E678B'}}>Select Location</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5880.
          577166866456!2d-9.234149646266177!3d32.29490153253034!2m3!1f0!2f0!3f0!3m2!
          1i1024!2i768!4f13.1!3m3!1m2!1s0xdac212049843597%3A0x6b618c47dfd85d40!2sSafi
          !5e0!3m2!1sen!2sma!4v1675899418025!5m2!1sen!2sma" 
           width="51%" height="450"
           style={{borderRadius:'20px'}}
           ></iframe>
        </div>
        <div>
          <h2 style={{color:'#5E678B',marginTop:'50px'}}>Upload a picture of the problem</h2>
          <input type='file' id='file' accept='image/*' />
          <label for='file' ><i class="material-icons" >add_photo_alternate</i> Upload a photo </label>
        </div>
        
        
        <input type='submit' value='Send' className='send-form-contact'/> 
        
      </form>
      
      
    </div>


    </>
   
  )
}

export default Contact
