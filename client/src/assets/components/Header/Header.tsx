import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='Header'>
        <div className="HeaderMenu">
            {/* <h1>Hus</h1> */}
            <i className="fa-solid fa-house"></i>
            <i className="fa-solid fa-sun"></i>
            <i className="fa-solid fa-utensils"></i>
            <i className="fa-solid fa-calendar-days"></i>
            
        </div>

    </div>
  )
}

export default Header