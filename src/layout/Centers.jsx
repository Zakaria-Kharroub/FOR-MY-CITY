import React from 'react'
import '../css/Test.css'
import imgCt from '../img/img-centers.png'
const Centers = () => {
  return (
    <>
       <h1 className='footer-title'>Our <span style={{color:'#5E678B'}}>Centers</span></h1>
       <div className='all-ct'>
        <div className='div-ct'>
          <img src={imgCt} alt='' className='img-ctrs'/>
          <div>
            <p className='head-ct'>province </p>
          </div>
          <div>
          </div>
        </div>

        <div className='div-ct'>
          <img src={imgCt} alt='' className='img-ctrs'/>
          <p className='head-ct'>province </p>
        </div>

        <div className='div-ct'>
          <img src={imgCt} alt='' className='img-ctrs'/>
          <p className='head-ct'>province </p>
        </div>
        
       

       </div>
    </>
  )
}

export default Centers
