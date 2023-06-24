import React from 'react'
import '../css/Thend.css'
import img1 from '../img/img-1.jpg'
import img2 from '../img/img-2.jpg'
import img3 from '../img/img-3.jpg'

// import colab img
import clb1 from '../img/hit.png'
import clb2 from '../img/plc.png'
import clb3 from '../img/prv.png'
import clb4 from '../img/rds.png'
import clb5 from '../img/eau.png'
// import all from '../img/all.PNG'


const Home = () => {
  return (
    <>
      <div className='div-home'>
        <div className='home-dv1'>
            <span className='title-home'>For<span style={{color:'#5E678B'}}>My</span>City</span>
            <h2  className='home-s-title'>Moderne way to urbenize</h2>
            <p className='home-p1'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
        </div>
        <div className='home-dv-pic'>
            <img src={img1} alt="" className='himg-1'/>
        </div>
      </div>




      <div className='div-home'>
        <div className='home-dv-pic'>
            <img src={img2} alt="" className='img-2'/>
        </div>
        <div className='home-dv2'>
            <span className='title-home'><span className='dx-t'>Our </span>  <span style={{color:'#5E678B'}}>Goal</span></span>
            <h2  className='home-s-title'>Moderne way to urbenize</h2>
            <p className='home-p1'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
        </div>
      </div>
      <div className='div-home'>
        <div className='home-dv1'>
            <span className='title-home'><span className='dx-t'>Our </span> <span style={{color:'#5E678B'}} >Focus</span></span>
            <h2  className='home-s-title'>Moderne way to urbenize</h2>
            <p className='home-p1'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
        </div>
        <div className='home-dv-pic'>
            <img src={img3} alt="" className='himg-3'/>
        </div>
      </div>


      <div className='div-home'>
        <div className='home-dv1'>
            <span className='title-home' style={{fontSize:'90px'}}><span className='dx-t'>Our </span><span style={{color:'#5E678B'}}>Colborators</span></span>
        </div>
      </div>
      <div>
              <img src={clb1} alt='clb' className='clb-img'/>
              <img src={clb2} alt='clb' className='clb-img'/>
              <img src={clb3} alt='clb' className='clb-img'/>
              <img src={clb4} alt='clb' className='clb-img'/>
              <img src={clb5} alt='clb' className='clb-img'/>
      </div>
    </>
  )
}

export default Home
