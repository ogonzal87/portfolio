import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Logo1 from '../assets/logos/logo1.png'
import {DSCircleButton} from '../../node_modules/oskrhq-design-system/build/index.js';

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

class HomePage extends React.Component {
  render() {
  
    return (
      <div>
        <SectionHero>
          <h1 className="ds-button-text-style hero-button-text-style">Hola! mi nombre es</h1>
          <img src={Logo1} />

          <i><p className="ds-headline-text-style hero-subheading-text">I’m a <a href="https://blog.prototypr.io/your-ux-team-needs-a-design-technologist-heres-why-3426be8f78a" target="_blank">Design Technologist</a> and User Experience Designer based in San Francisco. By day I design + {'<code />'} digital products and also craft <a href="https://www.invisionapp.com/blog/guide-to-design-systems/" target="_blank">Design Systems</a>. By night I enjoy hand lettering, making moss art and doing illustrations.</p></i>

          <HeroScrollDownBtn>
            <DSCircleButton icon="keyboard_arrow_down" type="ghost" />
          </HeroScrollDownBtn>
        
          
        </SectionHero>
      </div>
    )
  }
}
 export default HomePage