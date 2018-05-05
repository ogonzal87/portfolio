import React from 'react'
import Link from 'gatsby-link'
import { NavLink } from 'react-router-dom'
import { withPrefix } from "gatsby-link"
import logo2 from '../assets/logos/logo2.svg'

const TopNav = () => {
  return (
    <div className="top-nav">
      <NavLink exact to="/">
        <img src={logo2} className="logo" />
      </NavLink>
      <ul>
        {/* <li><NavLink exact to="/" activeClassName="top-nav-link-isActive">Home</NavLink></li>
        <li><NavLink exact to="/home" activeClassName="top-nav-link-isActive">Work</NavLink></li> */}
        {/* <li><NavLink exact to="/about" activeClassName="top-nav-link-isActive">About</NavLink></li> */}
      </ul>
    </div>
  )
}

export default TopNav