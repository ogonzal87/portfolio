import React from 'react'
import Link from 'gatsby-link'
import { NavLink } from 'react-router-dom'
import { withPrefix } from "gatsby-link"
import logo2 from '../assets/logos/logo2.svg'



const TopNav = ({ ...props }) => {
  
  const WorkLink = props.work ? <NavLink exact to="/#work" activeClassName="top-nav-link-isActive" className="special-text-styling">
    Work
    </NavLink> : '';
  
  const AboutLink = props.about ? <NavLink exact to="/about" activeClassName="top-nav-link-isActive" className="special-text-styling">
      About
    </NavLink> : '';

  return <div className="top-nav">
      <NavLink exact to="/">
        <img src={logo2} className="logo" />
      </NavLink>
      <ul>
        <li>{WorkLink}</li>
        <li>{AboutLink}</li>
      </ul>
    </div>;
}

export default TopNav