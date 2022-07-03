import React from 'react'

import './navbar.css'


export default function NavBar() {
  return (
    <nav>
    <ul>
        <li className="nav-link"><a href="index.html">Home</a></li>
        <li className="nav-link"><a href="about.html">About</a></li>
        <li className="nav-link"><a href="contact.html">Contact</a></li>
    </ul>
</nav>
  )
}
