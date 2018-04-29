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
import {DSCircleButton, DSButton} from '../../node_modules/oskrhq-design-system/build/index.js'
import Carousel from 'nuka-carousel';

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
  max-width: 1600px;
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

class HomePage extends React.Component {
  render() {
  
    return (
      <div className="home-wrapper">
        <SectionHero>
          <h1 className="ds-button-text-style hero-button-text-style">Hola!  👋🏼 mi nombre es</h1>

          <img className="portfolio-logo-img" src={Logo1} />

          <i><p className="ds-headline-text-style hero-subheading-text">I’m a <a href="https://blog.prototypr.io/your-ux-team-needs-a-design-technologist-heres-why-3426be8f78a" target="_blank">Design Technologist</a> and User Experience Designer based in San Francisco. By day I design + {'<code />'} digital products and also craft <a href="https://www.invisionapp.com/blog/guide-to-design-systems/" target="_blank">Design Systems</a>. By night I enjoy hand lettering, making moss art and doing illustrations.</p></i>

          <p className="ds-subheading-text-style">
            <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">oscar@oskrhq.com</a> / <a href="https://github.com/ogonzal87" target="_blank">Github</a> / <a href="https://codepen.io/ogonzal87/" target="_blank">Codepen</a> / <a href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf" target="_blank">Medium</a> / <a href="https://dribbble.com/ogonzal87" target="_blank">Dribbble</a> / <a href="https://www.instagram.com/oskrhq/" target="_blank">Instagram</a></p>

          <HeroScrollDownBtn>
            <DSCircleButton icon="keyboard_arrow_down" type="ghost" />
          </HeroScrollDownBtn>
        </SectionHero>

        {/* <img className="work-lettering" src={workLettering} />     */}
        
        <SectionProject className="ds-col-container">

          <img className="number" src={number1} />

          <div className="project-text-container ds-col-5">
            <h5>OSKRHQ Design System</h5>
            <p className="ds-subheading-text-style">OSKRHQ.DS a Design System I created for my personal brand to achieve a harmonious identity throughout various media outputs. In fact, this website, along with every Design material I produce, consumes the system. More specifically, it is a Design Guide <strong>*and*</strong> Component Library written in ReactJS with a unique SASS architecture crafted from scratch. It is also an open-sourced project you can download <a href="https://github.com/ogonzal87/oskrhq-design-system" target="_blank">here</a>, and has an accompanying UI Kit built in Sketch App with Smart symbols you can find <a href="https://github.com/ogonzal87/oskrhq-uikit" target="_blank">here</a>.</p>
            
            <p className="ds-subheading-text-style">💡 The system is based on something I call <i>"The Anatomy of UI"</i>. Check out <a href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf" target="_blank">my Medium series</a> to learn more.</p>
            <div className="project-button-container">
              <a href="https://oskrhq-ds.surge.sh/" target="_blank" className="project-btn__cta"><DSButton type="primary" label="view the site" /></a>
              <Link to="/ds-project/" className="project-btn__cta"><DSButton type="ghost" label="Design Process" /></Link>
            </div>      
          </div>
          <div className="ds-video-container ds-col-7">
            <iframe src="https://player.vimeo.com/video/265949113" width="780" height="571" frameBorder="0" allowFullScreen></iframe>
          </div>
        </SectionProject>

        <SectionProject className="ds-col-container">

          <img className="number" src={number2} />          

          <div className="project-text-container ds-col-5">
            <h5>YOLKO</h5>
            <p className="ds-subheading-text-style">YOLKO is a real time web app for feedback. It quantifies the mood of the audience and displays it with emotions through an avatar called YOLKO. It also allows the presenter to send pop questions to the audience and they in return can ask anonymous questions. It is a fully responsive web app that uses AngularJS 1.5 Component Architecture for the front-end and Firebase for the backend.</p> 
            
            <p className="ds-subheading-text-style">💡 <i>"YOLKO"</i> comes from the word "yolk" since an emoji looks like a yolk. 😜</p>
            <div className="project-button-container">
              <a href="https://imyolko.com/#!/" target="_blank" className="project-btn__cta"><DSButton type="primary" label="play with yolko" /></a>
              <Link to="/yolko-project/" className="project-btn__cta"><DSButton type="ghost" label="Design Process" /></Link>
            </div>      
          </div>
          <div className="ds-col-7 project-image-container">
            
            <Carousel
              cellAlign="center"
              slideHeight="2000px"
              renderCenterLeftControls={({ previousSlide }) => (
                <button onClick={previousSlide} className="carousel-slide-btn" >
                  <i className="material-icons ds-icon-large">chevron_left</i>      
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button onClick={nextSlide} className="carousel-slide-btn">
                  <i className="material-icons ds-icon-large">chevron_right</i> 
                </button>
              )}
            >
              <div className="project-image-container">
                <img src={yolkoImgProject} className="yolko-img-project project-image-container " />
              </div>  
              <div className="project-image-container">
                <img src={yolkoImgProject2} className="yolko-img-project2 project-image-container " />
              </div>  
              <div className="video-container">
                <iframe src="https://player.vimeo.com/video/207403309" width="740" height="415" frameBorder="0" allowFullScreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>
              </div>
              
            </Carousel>

          </div>
        </SectionProject>

        <SectionProject className="ds-col-container">

          <img className="number" src={number3} />

          <div className="project-text-container ds-col-5">
            <h5>OSKRHQ Design System</h5>
            <p className="ds-subheading-text-style">OSKRHQ.DS a Design System I created for my personal brand to achieve a harmonious identity throughout various media outputs. In fact, this website, along with every Design material I produce, consumes the system. More specifically, it is a Design Guide <strong>*and*</strong> Component Library written in ReactJS with a unique SASS architecture crafted from scratch. It is also an open-sourced project you can download <a href="https://github.com/ogonzal87/oskrhq-design-system" target="_blank">here</a>, and has an accompanying UI Kit built in Sketch App with Smart symbols you can find <a href="https://github.com/ogonzal87/oskrhq-uikit" target="_blank">here</a>.</p>
            
            <p className="ds-subheading-text-style">💡 The system is based on something I call <i>"The Anatomy of UI"</i>. Check out <a href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf" target="_blank">my Medium series</a> to learn more.</p>
            <div className="project-button-container">
              <Link to="/client-project/" className="project-btn__cta"><DSButton type="primary" size="medium" label="Design Process" /></Link>
            </div>      
          </div>
          <div className="ds-video-container ds-col-7">
            <iframe src="https://player.vimeo.com/video/265949113" width="780" height="571" frameBorder="0" allowFullScreen></iframe>
          </div>
        </SectionProject>

      </div>
    )
  }
}
 export default HomePage