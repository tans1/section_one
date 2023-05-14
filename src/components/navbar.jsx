import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Chronicle logo (1).svg"


const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" class="logo" />
      
      <Link>
        <button>Join</button>
      </Link>
    </nav>
  )
}

export default Navbar
