import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react'
import './Home.css'
import { Cart, inputValuecontext, radioValuecontext } from '../Context'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  const { cart } = useContext(Cart)
  const { inputvalue, setInputvalue } = useContext(inputValuecontext)
  const {setRadiovaluebutton}=useContext(radioValuecontext)
  const [cardcount, setCardcount] = useState(0)

  const toggleslider= ()=>{
    let sliderdiv=document.getElementById('slider')
    sliderdiv.classList.toggle('toggleslider')
  }
  return (
    <>
      <div className="container-fluid navbar_container">
        <div className="header d-flex">
          <GiHamburgerMenu className='menubar' onClick={toggleslider}/>
          <h1>Products</h1>
          <input type="text" className='inputbox' value={inputvalue} placeholder='Type here for products you want' onChange={(e) => setInputvalue(e.target.value)} />
          <Link to='/'>
            <       FaHome className='carticon' style={{ color: 'white' }} />

          </Link>
          <Link to='/cart'>
            <h2> <FaCartShopping style={{ color: 'white' }} className='carticon' /><span className='itemscount' style={{ color: 'white' }}>{cart.length}</span></h2>

          </Link>
        </div>
        <div id='slider' className="sidebar">
        <div className="radio">
          <label htmlFor="all">All</label>
          <input type="radio" id='all' name='radiobutton' onClick={()=>setRadiovaluebutton('all')} />
          </div>
          <div className="radio">
          <label htmlFor="smartphones">Smartphones</label>
          <input type="radio" id='smartphones' name='radiobutton' onClick={()=>{setRadiovaluebutton('smartphones')}}/>
          </div>
          <div className="radio">
          <label htmlFor="laptops">Laptops</label>
          <input type="radio" id='laptops' name='radiobutton' onClick={()=>setRadiovaluebutton('laptops')}/>
          </div>
          <div className="radio">
          <label htmlFor="fragrances">Fragrances</label>
          <input type="radio" id='fragrances' name='radiobutton' onClick={()=>setRadiovaluebutton('fragrances')}/>
          </div>
          <div className="radio">
          <label htmlFor="skincare">Skincare</label>
          <input type="radio" id='skincare' name='radiobutton' onClick={()=>{setRadiovaluebutton('skincare')}}/>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar