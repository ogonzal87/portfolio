import React from 'react'
import Link from 'gatsby-link'
import logo2 from '../assets/logos/logo4.svg'
import ResumePDF from '../assets/images/oscar-gonzalez-resume.pdf'

const TopNav = ({ work, about, resume, ...props }) => {

  const WorkLink = work ? <Link to="/#work" className={`ds-overline-text-style (history.getCurrentLocation().pathname === '/#work' ? 'top-nav-link-isActive' : '')`}>
    Work
    </Link> : '';

  const AboutLink = about ? <Link exact to="/about" activeClassName="top-nav-link-isActive" className={`ds-overline-text-style (history.getCurrentLocation().pathname === '/about' ? 'top-nav-link-isActive' : '')`}>
    About
    </Link> : "";

  const ResumeLink = resume ? <a href={ResumePDF} target="_blank" className="ds-overline-text-style">
    Resume
    </a> : "";

  return <nav className="top-nav">
    <Link exact to="/">
      <img src={logo2} className="logo" />
    </Link>
    <ul>
      <li>{WorkLink}</li>
      <li>{AboutLink}</li>
      <li>{ResumeLink}</li>
    </ul>
  </nav>;
}

export default TopNav