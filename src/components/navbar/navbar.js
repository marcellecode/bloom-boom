import React from 'react'
import "./navbar.scss"

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        BLOOM&BOOM
      </div>
      <div className="links">
        <a href="http://">About us</a>
        <a href="http://">Catalog</a>
        <a href="http://">Delivery</a>
        <a href="http://">Reviews</a>
        <a href="http://">Contacts</a>
      </div>
      <div className="language">ENG</div>
    </div>
  )
}
