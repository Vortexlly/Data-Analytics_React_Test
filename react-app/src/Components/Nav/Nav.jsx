import React from 'react'
import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
        <h2 className="nav__title">React.</h2>
        <div className="nav__wrapper">
            <a href="/#" className="nav__link">Home</a>
            <a href="/#" className="nav__link">Company</a>
            <a href="/#" className="nav__link">Resources</a>
            <a href="/#" className="nav__link">About</a>
            <a href="/#" className="nav__link">Contact</a>
        </div>
    </nav>
  )
}

export default Nav