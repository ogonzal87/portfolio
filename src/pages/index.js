import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import ProfileImg from '../assets/images/profile-min.jpg'

const SectionHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

class HomePage extends React.Component {
  render() {
  
    return (
      <div>
        <SectionHero>
          <img src={ProfileImg} />
          Hhelo there
        </SectionHero>
      </div>
    )
  }
}
 export default HomePage