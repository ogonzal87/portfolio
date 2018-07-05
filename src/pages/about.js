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
    <TopNav work about resume />
    <div className="about-page">
      <SectionHero>

        <div className="img-container">
          <h6 className="taking-clients">
            <i>Currently I am <strong>not</strong> taking on any new projects or clients, but willing to meet for a cup of coffee.</i>
          </h6>
          <img src={ProfileImg} alt="profile picture" className="profile-img" />
        </div>

        <div className="text-container">
          <p className=" ">
            Hi. My name is Oscar and I am a Colombian coffee addict (I blame it on my roots). I am also a self-taught designer and developer. I actually went to Business School, not by choice... 😒 and hated it. My passion is anything Design and Development related. When I am not creating digital products, I play my uke, ride my bike "La Negra", Latin dance and scuba dive every chance I get. I love nature so much I even trim its bushes... Literally. Creating moss art is one of my favorite hobbies. Check it out <a href="https://www.instagram.com/musgho/" target="_blank">
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
            on a side project coding a DApp using Ethereum.
            </p>
        </div>

      </SectionHero>
    </div>
    <PortfolioFooter />
  </div>;
}

export default AboutPage