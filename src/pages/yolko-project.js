import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { DSCircleButton, DSButton } from '../../node_modules/oskrhq-design-system/build/index.js'
import yolkoAvatar from '../assets/images/yolko-avatar.svg'
import designProcessImg from '../assets/images/design-process.png'

const SectionHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10% 0;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
`

class YolkoProjectPage extends React.Component {
  render() {
  
    return (
      <div>
        <div className="hero-container">
          <div className="hero-container__text-container">
            <h1 className="ds-display3-text-style hero-container__title">Yolko</h1>
            <p className="ds-subheading-text-style hero-container__description">Real time feedback web application for presentations. It quantifies the mood of the audience and displays it with emotions through an avatar called YOLKO. It is a fully responsive web app that uses AngularJS 1.5 Component Architecture for the front-end and Firebase for the backend. </p>
            <p className="special-text-styling">Product, Interaction and Experience Design</p>
            <span className="special-text-styling">UX Research</span>
            <span className="special-text-styling">Development</span>
            <a href="https://imyolko.com/#!/" className="project-btn__cta"><DSButton type="primary" label="Play with yolko" size="medium" /></a>
          </div>
          <div className="hero-container__img-container">
            <img src={yolkoAvatar} className="yolko-avatar"/>
          </div>
        </div>

        <div className="project__video-container">
          <iframe src="https://player.vimeo.com/video/207403309" width="740" height="415" frameBorder="0" allowFullScreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>
        </div>  
        
        <h4 className="section-title ">CASE STUDY DOSSIER</h4>
        <div className="case-study-dossier-container">
          <div className="dossier__problem-container">
            <p className="special-text-styling">Problem</p>
            <p className="ds-subheading-text-style">When presenting, you are running blind since the audience is only able to provide feedback after the presentation. You do not know what were the highs and lows. Furthermore,  through research I found that more than 75% of participants wanted to ask a question or make a point in a social gathering but chose not to because of fear to reveling themselves to their peers and the presenter. Missed opportunities for learning..?</p>
          </div>
          <div className="dossier__users-container">
            <p className="special-text-styling">Users</p>
            <p className="ds-subheading-text-style">Attendees and presenters at social gatherings such as classes or talks. </p>
          </div>
          <div className="dossier__duration-container">
            <p className="special-text-styling">Duration</p>
            <p className="ds-subheading-text-style">Apr 2016 - Nov 2017</p>
          </div>
          <div className="dossier__tools-container">
            <p className="special-text-styling">Tools</p>
            <p className="ds-subheading-text-style">Pen, paper, AngularJS 1.5, Firebase, Sketch App, SASS, Gulp.JS, Node.js, Invision.  </p>
          </div>
          <div className="dossier__role-container">
            <p className="special-text-styling">Role</p>
            <p className="ds-subheading-text-style">Attendees and presentors at social gatherings such as classes or talks. </p>
          </div>
        </div>

        <h4 className="section-title ">Design Process</h4>
        <img src={designProcessImg} className="design-process-img" />
        
        <div className="design-process__section-container">
          <h5 className="design-process__section-title">EMPATHIZE</h5>
          <div>
            <p className="ds-subheading-text-style">I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations. I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations.</p>

            <p className="ds-subheading-text-style">I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations.</p>
          </div>
          
        </div>
      </div>
    )
  }
}
 export default YolkoProjectPage