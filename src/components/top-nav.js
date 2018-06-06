import React from 'react'
import Link from 'gatsby-link'
import { NavLink } from 'react-router-dom'
import { withPrefix } from "gatsby-link"
import logo2 from '../assets/logos/logo2.svg'
import ResumePDF from '../assets/images/oscar-gonzalez-resume.pdf'



const TopNav = ({ work, about, resume, ...props }) => {
  
  const WorkLink = work ? <NavLink exact to="/#work" activeClassName="top-nav-link-isActive" className="special-text-styling">
    Work
    </NavLink> : '';
  
  const AboutLink = about ? <NavLink exact to="/about" activeClassName="top-nav-link-isActive" className="special-text-styling">
      About
    </NavLink> : '';
  
  const ResumeLink = resume ? <a href={ResumePDF} target="_blank" className="special-text-styling">
      Resume
    </a> : "";

  return <div className="top-nav">
      <NavLink exact to="/">
        <img src={logo2} className="logo" />
      </NavLink>
      <ul>
        <li>{WorkLink}</li>
        <li>{AboutLink}</li>
        <li>{ResumeLink}</li>
      </ul>
    </div>;
}

export default TopNav