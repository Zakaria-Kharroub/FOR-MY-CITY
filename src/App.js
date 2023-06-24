
// import Thend from "./Thend";

import './css/Thend.css'
import Footer from './layout/Footer'
import { Link,Route,Routes } from "react-router-dom";

//============= pages============
import Home from "./layout/Home";
import Login from './layout/Login'
import Sig from './layout/Sig';
import Contact from './layout/Contact'
import Centers from './layout/Centers.jsx'

function App() {
  return (
    < >
    <div>
    <nav>
			<h2 class="logo" style={{color:'#3A415C',fontSize:'3rem'}}>For<span style={{color:'#5E678B'}}>My</span>City</h2>
			<ul>
				<li style={{fontWeight:'bold'}}><Link to="/" className='link-nav'>Home</Link></li>
				<li>
          <Link to='/contact' className='link-nav'>Contact</Link>
        </li>
				<li>
          <Link to="/centers" className='link-nav'>Centers</Link>
        </li>

			</ul>
      <div>
      <Link to='/login' class="btn"> Login <i class="material-icons" style={{position:'absolute'}}> login</i> </Link>
      <Link to='/sign' class="btn"> Sign Up <i class="material-icons" style={{position:'absolute'}}> person</i> </Link>
      </div>
			
	    </nav>
    {/* <Thend/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign" element={<Sig/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/centers" element={<Centers/>}/>



    </Routes>

    {/* <Home/> */}
    <Footer/>

    </div>
    
    
    </>
  );
}

export default App;
