import React from 'react'
import TopNav from '../components/top-nav'
import PortfolioFooter from '../components/footer'
import styled from 'styled-components'
import ProfileImg from '../assets/images/profile-pic.jpg'

const SectionHero = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  max-width: 1300px;

  @media (max-width: 767px) {
    max-width: 375px;
  }
`;

const AboutPage = () => {
  return <div>
      <TopNav work about resume/>
      <div className="about-page">
        <SectionHero>
          <img src={ProfileImg} alt="profile picture" className="profile-img" />

          <div className="text-container">
            <p className="ds-subheading-text-style">
              Hi. My name is Oscar and I am addicted to coffee. Although, I blame it on the fact that I was born and raised in Colombia. I am a self-taught designer and developer. I actually went to Business School. Not by choice... 😒 and I hated it. My passion is anything Design and Development related. When I am not creating digital things, I play my uke, ride my bike "La Negra" to get coffee, Latin dance every Wednesday, scuba dive any chance I get and I love nature so much I even trim its bush... Really, I create moss art. Check it out <a href="https://www.instagram.com/musgho/" target="_blank">
                here
              </a>.
            </p>
            <br />
            <br />
            <br />
            <p className="special-text-styling">Current Interests</p>
            <p className="ds-body1-text-style">
              I am really into decentralized autonomous systems, crypto
              assets, machine learning and AR.Currently learning while working
              on a side project coding a DApp, on Ethereum.
            </p>
            <h6 className="taking-clients">
              <i>
                Currently <strong>not</strong> taking on any new projects or clients but willing to meet for a cup of coffee.
              </i>
            </h6>
          </div>
        </SectionHero>
      </div>
      <PortfolioFooter />
    </div>;
}

export default AboutPage