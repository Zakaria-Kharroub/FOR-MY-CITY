import React from 'react'
import '../css/Thend.css'


const Sig = () => {
  return (
    <>
     <div>
      <h1 className='footer-title'>Sign <span style={{color:'#5E678B'}}>Up</span></h1>
      <p className='s-title-contact'>We are happy to hear from you</p>
    </div>


    <form>
        <div className='input-line-1'>
          <input type='text' placeholder='Full name... '/>
          {/* <input type='text' placeholder='Last name...'/> */}
        </div>

        <div className='input-line-2'>
        <input type='text' placeholder='Mobile Number Or Email Adress...'/>
        </div>

        <div className='input-line-1'>
          <input type='text' placeholder='Password... '/>
          <input type='text' placeholder='Confirm password...'/>
        </div>

        <div className='input-line-1'>
          <input type='text' placeholder='CIN... '/>
          <input type='date' placeholder='Confirm password...'/>
        </div>

        <div>
        <h2 style={{color:'#5E678B'}}>Select gender</h2>
        <label  for="male"style={{background:'#589195',marginRight:'10px'}}><input type="radio" value="male" name="user_age"/>MALE</label>
        <label for="female"style={{background:'#589195',marginLeft:'10px'}} ><input type="radio"  value="female" name="user_age"/>FEMALE</label>
        </div>
        <input type='submit' value='Sign Up' className='send-form-login' style={{marginTop:'40px',width:'50%'}}/> 
      </form>
    </>
   
    
  )
}

export default Sig
