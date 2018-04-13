import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Logo1 from '../assets/logos/logo1.png'
import dsImgBrowser from '../assets/images/ds-img-browser.png'
import yolkoImgProject from '../assets/images/yolko-project-img.png'
import {DSCircleButton, DSButton} from '../../node_modules/oskrhq-design-system/build/index.js'

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

const HeroScrollDownBtn = styled.div`
  position: absolute;
  bottom: 10px;
`

const SectionProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10% 0;
  box-sizing: border-box;
  position: relative;
  max-width: 1067px;
  margin: 0 auto;
`

class HomePage extends React.Component {
  render() {
  
    return (
      <div>
        <SectionHero>
          <h1 className="ds-button-text-style hero-button-text-style">Hola!  👋🏼 mi nombre es</h1>

          <img className="portfolio-logo-img" src={Logo1} />

          <i><p className="ds-headline-text-style hero-subheading-text">I’m a <a href="https://blog.prototypr.io/your-ux-team-needs-a-design-technologist-heres-why-3426be8f78a" target="_blank">Design Technologist</a> and User Experience Designer based in San Francisco. By day I design + {'<code />'} digital products and also craft <a href="https://www.invisionapp.com/blog/guide-to-design-systems/" target="_blank">Design Systems</a>. By night I enjoy hand lettering, making moss art and doing illustrations.</p></i>

          <p className="ds-subheading-text-style"><a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">oscar@oskrhq.com</a> / <a href="https://github.com/ogonzal87" target="_blank">Github</a> / <a href="https://www.linkedin.com/in/ogonzalez87/" target="_blank">Linkedin</a> / <a href="https://dribbble.com/ogonzal87" target="_blank">Dribbble</a> / <a href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf" target="_blank">Medium</a> / <a href="https://www.instagram.com/oskrhq/" target="_blank">Instagram</a></p>

          <HeroScrollDownBtn>
            <DSCircleButton icon="keyboard_arrow_down" type="ghost" />
          </HeroScrollDownBtn>
        </SectionHero>

        <SectionProject className="ds-col-container">
          <div className="project-text-container ds-col-6">
            <h5>OSKRHQ Design System</h5>
            <p className="ds-subheading-text-style">OSKRHQ.DS is a Styleguide + SCSS Architecture + Component Library written in React. Although I initially created it for my personal brand, it is an open-sourced project anyone can download <a href="https://github.com/ogonzal87/oskrhq-design-system" target="_blank">here</a>. In fact, this website, along with every Design material I produce, consume the system.</p>
            
            <p className="ds-subheading-text-style">The system is based on something I call <i>The Anatomy of UI</i>. Check out <a href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf" target="_blank">these Medium series</a> to learn more.</p>
            <div className="project-button-container">
              <a href="https://oskrhq-ds.surge.sh/" target="_blank"><DSButton type="primary" size="medium" label="view the site" /></a>
            </div>      
          </div>
          <div className="project-image-container ds-col-6">
            <img src={dsImgBrowser} className="ds-img-browser" />
          </div>
        </SectionProject>

        <SectionProject className="ds-col-container">
          <div className="project-text-container ds-col-6">
            <h5>YOLKO</h5>
            <p className="ds-subheading-text-style">YOLKO is a real time web app for  feedback. It quantifies the mood of the audience and displays it with emotions through an avatar called YOLKO. It also allows you to send pop questions to the audience and they in return can ask anonymous questions. It is a fully responsive web app that uses AngularJS 1.5 Component Architecture for the front-end and Firebase for the backend.</p> 
            
            <p className="ds-subheading-text-style">💡 "YOLKO" comes from the word "yolk" since an emoji looks like a yolk. Get it..?</p>
            <div className="project-button-container">
              <a href="https://imyolko.com/#!/" target="_blank"><DSButton type="primary" size="medium" label="play with yolko" /></a>
            </div>      
          </div>
          <div className="project-image-container ds-col-6">
            <img src={yolkoImgProject} className="yolko-img-project" />
          </div>
        </SectionProject>
      </div>
    )
  }
}
 export default HomePage