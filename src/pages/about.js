import React from "react";
import TopNav from "../components/top-nav";
import PortfolioFooter from "../components/footer";
import styled from "styled-components";
import ProfileImg from "../assets/images/profile-pic.jpg";
import TakingClientsTag from "../assets/images/clients.png";

const SectionHero = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  max-width: 1300px;

  @media (max-width: 767px) {
    max-width: 375px;
  }
`;

const styles = {
  position: "fixed",
  bottom: "0",
  width: "400px",
  right: "0",
  zIndex: "-1"
};

const AboutPage = () => {
  return (
    <div style={{ position: "relative" }}>
      <TopNav work about resume />
      <div className="about-page">
        <SectionHero>
          <div className="img-container">
            <img
              src={ProfileImg}
              alt="profile picture"
              className="profile-img"
            />
          </div>

          <div className="text-container">
            <p className=" ">
              On a more personal note... My name is Oscar and I am a Colombian
              coffee addict (I blame it on my roots). I am also a self-taught
              designer and developer. I actually went to Business School, not by
              choice... 😒. My passion is anything Design-y and Development-y.
              When I am not creating digital things, I play my uke, ride my bike
              "La Negra", Latin dance and scuba dive every chance I get. Also, I
              love nature so much I even trim its bushes... Literally. Creating
              moss art is one of my favorite hobbies. Check it out{" "}
              <a href="https://www.instagram.com/musgho/" target="_blank">
                here
              </a>
              .
            </p>
            <br />
            <br />
            <br />
            <p className="special-text-styling">Current Interests</p>
            <p className="og-text-style-body1">
              I am really into decentralized autonomous systems, crypto assets,
              machine learning, 3D design, AR and VR.
            </p>
          </div>
        </SectionHero>
      </div>
      <PortfolioFooter />

      <img src={TakingClientsTag} style={styles} alt="taking clients tag" />
    </div>
  );
};

export default AboutPage;
