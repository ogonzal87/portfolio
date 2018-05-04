import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Logo1 from '../assets/logos/logo1.png'
import dsImgBrowser from '../assets/images/ds-img-browser.png'
import yolkoImgProject from '../assets/images/yolko-project-img.png'
import yolkoImgProject2 from '../assets/images/yolko-project-img2.png'
import workLettering from '../assets/images/portfolio-work.png'
import number1 from '../assets/images/portfolio-numbers1.png'
import number2 from '../assets/images/portfolio-numbers2.png'
import number3 from '../assets/images/portfolio-numbers3.png'
import mediumPost1Img from '../assets/images/duotone1.png'
import mediumPost2Img from '../assets/images/duotone2.png'
import mediumPost3Img from '../assets/images/duotone3.png'
import { DSCircleButton, DSButton } from '../../node_modules/oskrhq-design-system/build/index.js'
import PortfolioFooter from '../components/footer'
import viewnLogo from '../assets/images/viewn/viewn-logo.png'
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

  @media(max-width: 500px) {
    .ds-headline-text-style {
      font-size: 14px;
    }
  }
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
  box-sizing: border-box;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 1;

  @media(max-width: 1000px) {
    flex-direction: column;
    & > .ds-col-5, .ds-col-7 {
      width: 70%;;
    }
  }

  @media(max-width: 500px) {
    flex-direction: column;
    & > .ds-col-5, .ds-col-7 {
      width: 85%;
    }
    .ds-video-container {
      box-shadow: none;
    }
  }
`

const ProjectCard = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 5px 15px -2px rgba(10, 16, 34, .4);
  transition: all 200ms ease;
  min-height: 500px;
  padding: 50px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    box-shadow: 0 15px 45px -5px rgba(10, 16, 34, .3);
  }

  &.card-1 {
    background: url(${mediumPost2Img});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
  background-attachment: fixed;
  }
  &.card-2 {
    background: url(${mediumPost1Img});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;
  }
  &.card-3 {
    background: url(${viewnLogo});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;
  }
`

class HomePage extends React.Component {
  render() {

    return (
      <div className="home-wrapper">
        <SectionHero>
          <h1 className="ds-button-text-style hero-button-text-style">Hola!  👋🏼 mi nombre es</h1>

          <img className="portfolio-logo-img" src={Logo1} />

          <i><p className="ds-headline-text-style hero-subheading-text">I’m a <a href="https://blog.prototypr.io/your-ux-team-needs-a-design-technologist-heres-why-3426be8f78a" target="_blank">Design Technologist</a> and User Experience Designer. By day I design + {'<code />'} digital products and also craft <a href="https://oskrhq-ds.surge.sh/" target="_blank">Design Systems</a>. By night I enjoy hand lettering, making moss art and doing illustrations.</p></i>

          <p className="ds-subheading-text-style">
            <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">oscar@oskrhq.com</a> / <a href="https://github.com/ogonzal87" target="_blank">Github</a> / <a href="https://codepen.io/ogonzal87/" target="_blank">Codepen</a> / <a href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf" target="_blank">Medium</a> / <a href="https://dribbble.com/ogonzal87" target="_blank">Dribbble</a> / <a href="https://www.instagram.com/oskrhq/" target="_blank">Instagram</a></p>

          <HeroScrollDownBtn>
            <DSCircleButton icon="keyboard_arrow_down" type="ghost" />
          </HeroScrollDownBtn>
        </SectionHero>

        <SectionProject className="ds-col-container">
          <Link to="/projects/design-system/" className="project-link">
            <ProjectCard className="card-1">
              <img className="number2" src={number1} />
              <h5 className="ds-display2-text-style project-card-title ">OSKRHQ Design System</h5>
            </ProjectCard>
          </Link> 
        </SectionProject>

        <SectionProject className="ds-col-container">
          <Link to="/projects/yolko/" className="project-link">
            <ProjectCard className="card-2">
              <img className="number2" src={number2} />
              <h5 className="ds-display2-text-style project-card-title ">YOLKO</h5>
            </ProjectCard>
          </Link>
        </SectionProject>

        <SectionProject className="ds-col-container">
          <Link to="/projects/client/" className="project-link">
            <ProjectCard className="card-3">
              <img className="number2" src={number3} />
              <h5 className="ds-display2-text-style project-card-title ">VIEWN</h5>
            </ProjectCard>
          </Link>
        </SectionProject>

        <img src={designProcessImg} className="design-process-img2"/>        
        

        <div>
          <h4 className="section-title">Recent thoughts</h4>
          <div className="home-posts-container">
            <a href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf" className="home-post-card" target="_blank">
              <img src={mediumPost1Img} alt="" className="img-thumbnail" />
              <div className="post-text-container">
                <p className="ds-subheading-text-style">The Anatomy of All Digital Interfaces</p>
                <span className="ds-caption-text-style">MEDIUM, MIZ.LI</span>
              </div>
            </a>
            <a href="https://medium.muz.li/crafting-a-new-visual-language-912d3ac8df43" className="home-post-card" target="_blank">
              <img src={mediumPost3Img} alt="" className="img-thumbnail" />
              <div className="post-text-container">
                <p className="ds-subheading-text-style">Crafting a New Visual Language</p>
                <span className="ds-caption-text-style">MEDIUM, MIZ.LI</span>
              </div>
            </a>
            <a href="https://blog.prototypr.io/a-dictionary-for-a-design-language-3afae1579586" className="home-post-card" target="_blank">
              <img src={mediumPost2Img} alt="" className="img-thumbnail" />
              <div className="post-text-container">
                <p className="ds-subheading-text-style">A Dictionary for a Design Language</p>
                <span className="ds-caption-text-style">MEDIUM, PROTOTYPR</span>
              </div>
            </a>
          </div>
        </div>

        <PortfolioFooter />

      </div>
    )
  }
}
export default HomePage