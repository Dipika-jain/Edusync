import React from 'react'
import navData from './dataNavbar'
//import { Icon } from '@iconify/react';
import "./navbar.css"

import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className='navbar'>
          {navData.map((curElem) => {
            const { id, title ,link} = curElem;
            return (

              <button key={id} className='nav-button'>
                <Link to={link}>
                <div>{title}</div>
                </Link>
                
              </button>

            )
          })}
        </div>
      </nav>
    </>
  )
}

export default Navbar
