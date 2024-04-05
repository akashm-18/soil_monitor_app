import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
          <a className="list-item" href="/">Navbar</a>
          <div>
            <ul className='list'>
              <li><a className='list-item' href="/">Home</a></li>
              <li><a className='list-item' href="/contents">Contents</a></li>
              <li><a className='list-item' href="/history">History</a></li>
              <li><a className='list-item-logout' href="/logout">Logout</a></li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default NavBar
