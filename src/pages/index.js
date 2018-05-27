import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Logo1 from '../assets/logos/logo1.png'
import dsImgBrowser from '../assets/images/ds-img-browser.png'
import yolkoImgProject from '../assets/images/yolko-project-img.png'
import yolkoImgProject2 from '../assets/images/yolko-project-img2.png'
import workLettering from '../assets/images/portfolio-work.png'
import number1 from '../assets/images/hand-brush/01.png'
import number2 from '../assets/images/hand-brush/02.png'
import number3 from '../assets/images/hand-brush/03.png'
import number4 from '../assets/images/hand-brush/04.png'
import number5 from '../assets/images/hand-brush/05.png'
import number6 from '../assets/images/hand-brush/06.png'
import processImg from '../assets/images/hand-brush/process.png'
import thoughtsImg from '../assets/images/hand-brush/thoughts.png'
import mediumPost1Img from '../assets/images/duotone1.jpg'
import mediumPost2Img from '../assets/images/duotone2.jpg'
import mediumPost3Img from '../assets/images/duotone3.jpg'
import { DSButton } from "oskrhq-design-system";
import PortfolioFooter from '../components/footer'
import DesignProcessCard from '../components/design-process-card'
import CreativeLabMosque from '../components/creative-lab-mosque'
import viewnLogo from '../assets/images/viewn/viewn-logo.jpg'
import yolkoThumbnail from '../assets/images/yolko/thumbnail-duotone.jpg'
import designProcessPath1 from '../assets/images/design-process/path1.svg'
import designProcessPath2 from '../assets/images/design-process/path2.svg'
import designProcessPath3 from '../assets/images/design-process/path3.svg'
import designProcessPath4 from '../assets/images/design-process/path4.svg'
import designProcessPath5 from '../assets/images/design-process/path1.svg'
import designProcessPath6 from '../assets/images/design-process/path2.svg'

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
  box-shadow: 0 1px 1px 1px rgba(10,16,34,.08);
  transition: all 200ms ease-in-out;
  min-height: 500px;
  padding: 50px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: rgba(255, 0, 0, 0.25);
    box-shadow: 0 15px 45px -5px rgba(10, 16, 34, .3);
  }

  &.card-1 {
    background-image: url(${mediumPost2Img});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;
  }
  &.card-2 {
    background-image: url(${yolkoThumbnail});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;
  }
  &.card-3 {
    background-image: url(${viewnLogo});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;
  }
`

const DesignProcessCardGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: 
    "design-process-title design-process-title"
    "design-process-card1 design-process-path1"
    "design-process-path2 design-process-card2"
    "design-process-card3 design-process-path3"
    "design-process-path4 design-process-card4"
    "design-process-card5 design-process-path5"
    ". design-process-card6";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    max-width: 1400px;
    margin: 0 auto;
    grid-column-gap: 3%;
    grid-row-gap: 20px;

    .design-process-title {
      grid-area: design-process-title;
    }
`

const StrikethroughText = styled.span`
  text-decoration: line-through;
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

        </SectionHero>

        <SectionProject className="ds-col-container">
          <Link to="/projects/design-system/" className="project-link">
            <ProjectCard className="card-1">
              <img className="number" src={number1} />
              <div className="project-card-title-container">
                <span className="special-text-styling">Company work + Personal Project</span>
                <h5 className="ds-display2-text-style">OSKRHQ Design System</h5>
                <span className="special-text-styling project-card__footer-text">DESIGN SYSTEMS | DEVELOPMENT | CREATIVE DIRECTION AND MULTIDISCIPLINARY DESIGN | UX RESEARCH</span>
              </div>
            </ProjectCard>
          </Link> 
        </SectionProject>

        <SectionProject className="ds-col-container">
          <Link to="/projects/client/" className="project-link">
            <ProjectCard className="card-3">
              <img className="number" src={number2} />
              <div className="project-card-title-container">
                <span className="special-text-styling ">Client Work</span>
                <h5 className="ds-display2-text-style">VIEWN</h5>
                <span className="special-text-styling project-card__footer-text">BRAND IDENTITY | CREATIVE DIRECTION AND MULTIDISCIPLINARY DESIGN | UX RESEARCH</span>
              </div>
            </ProjectCard>
          </Link>
        </SectionProject>   

        <SectionProject className="ds-col-container">
          <Link to="/projects/yolko/" className="project-link">
            <ProjectCard className="card-2">
              <img className="number" src={number3} />
              <div className="project-card-title-container">
                <span className="special-text-styling">Personal Project</span>
                <h5 className="ds-display2-text-style">YOLKO</h5>
                <span className="special-text-styling project-card__footer-text">PRODUCT, INTERACTION AND EXPERIENCE DESIGN | DEVELOPMENT | UX RESEARCH</span>
              </div>
            </ProjectCard>
          </Link>
        </SectionProject> 
        

        <DesignProcessCardGrid>
          <div className="section-title-container design-process-title">
            <img src={processImg} alt="" className="home-brush-lettering process"/>
          </div>
          <DesignProcessCard
            numberImg={number1}
            title="Empathize"
            gridAreaName="design-process-card1"
            badgeType="tertiary"
            badgeText="Understand">
            <strong>It's not me. It's you.</strong> Begin by understanding what motivates and discourages the user. Like my mom used to say when I was a kid; "do not <span className="strikethrough-text"><i>judge a man</i></span> [design for a user] until you've walked a mile in <span className="strikethrough-text"><i>his</i></span> [his/her] shoes."`
          </DesignProcessCard>
          <img src={designProcessPath1} alt="" className="design-process-path1"/>
          <DesignProcessCard 
            numberImg={number2} 
            title="Define" 
            gridAreaName="design-process-card2"
            badgeType="tertiary"
            badgeText="Understand" >
            <strong>What's the problem?</strong> Combine all the research and observations from Step uno and begin to highlight opportunities for innovation.
          </DesignProcessCard>
          <img src={designProcessPath2} alt="" className="design-process-path2" />
          <DesignProcessCard 
            numberImg={number3} 
            title="Ideate"
            gridAreaName="design-process-card3"
            badgeType="warning"
            badgeText="Explore"> 
            <strong>What's the solution?</strong> Come up with as many crazy ideas as possible to solve the problem, choose a solution, and formulate a testable hypothesis then validate through rapid testing.
          </DesignProcessCard>
          <img src={designProcessPath3} alt="" className="design-process-path3" />
          <DesignProcessCard 
            numberImg={number4}   
            title="Prototype" 
            gridAreaName="design-process-card4"
            badgeType="warning"
            badgeText="Explore">
            <strong>How does the solution feel like?</strong> The goal in this step is to create an experience for the solution that delivers the least Cognitive Dissonance and most positive feelings.
          </DesignProcessCard>
          <img src={designProcessPath4} alt="" className="design-process-path4" />
          <DesignProcessCard 
            numberImg={number5}  
            title="Test" 
            gridAreaName="design-process-card5"
            badgeType="success"
            badgeText="Materialize">
            <strong>What can be learned?</strong> This is not just usability testing, it is mostly about learning new things and validating assumptions and hypothesis created trough earlier steps.
          </DesignProcessCard>
          <img src={designProcessPath1} alt="" className="design-process-path5" />
          <DesignProcessCard 
            numberImg={number6} 
            title="Implement"
            gridAreaName="design-process-card6"
            badgeType="success"
            badgeText="Materialize">
            <strong>Next problem or go again?</strong> Depends of the results of your tests. Prepare for another run through earlier steps or if the hypothesis was proven right, implement the solution.
          </DesignProcessCard>
        </DesignProcessCardGrid>









        <div>
          <div className="section-title-container">
            <img src={thoughtsImg} alt="" className="home-brush-lettering thoughts"/>
          </div>
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


        <CreativeLabMosque />

        <PortfolioFooter />

      </div>
    )
  }
}
export default HomePage