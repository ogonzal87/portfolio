import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import NameLogo from "../assets/logos/logo3.svg";
import number1 from "../assets/images/hand-brush/01.png";
import number2 from "../assets/images/hand-brush/02.png";
import number3 from "../assets/images/hand-brush/03.png";
import number4 from "../assets/images/hand-brush/04.png";
import number5 from "../assets/images/hand-brush/05.png";
import number6 from "../assets/images/hand-brush/06.png";
import processImg from "../assets/images/hand-brush/process.png";
import studioLetteringImg from "../assets/images/hand-brush/studio.png";
import codeLetteringImg from "../assets/images/hand-brush/code.png";
import thoughtsImg from "../assets/images/hand-brush/thoughts.png";
import profilePic from "../assets/images/profile-pic1.jpg";
import mediumPost1Img from "../assets/images/duotone1.jpg";
import mediumPost2Img from "../assets/images/duotone2.jpg";
import mediumPost3Img from "../assets/images/duotone3.jpg";
import mediumPost4Img from "../assets/images/walle-min.png";
import mediumPost5Img from "../assets/images/oskrhq-ds-min.jpg";
import PortfolioFooter from "../components/footer";
import DesignProcessCard from "../components/design-process-card";
import CreativeLabMosque from "../components/creative-lab-mosque";
import viewnLogo from "../assets/images/viewn/viewn-logo.jpg";
import SkillshareClassImg from "../assets/images/skillshare-class1.jpg";
import classHandLetteringImg from "../assets/images/hand-brush/classes.png";
import yolkoThumbnail from "../assets/images/yolko/thumbnail-duotone.jpg";
import designProcessPath1 from "../assets/images/design-process/path1.svg";
import designProcessPath2 from "../assets/images/design-process/path2.svg";
import designProcessPath3 from "../assets/images/design-process/path3.svg";
import designProcessPath4 from "../assets/images/design-process/path4.svg";
import TopNav from "../components/top-nav";

import codeProjectsResoponseArray from "../assets/code-projects";

import CodeProjectCard from "../components/code-card";

const SectionHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
`;

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
`;

const ProjectCard = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 1px 1px 1px rgba(10, 16, 34, 0.08);
  transition: all 200ms ease-in-out;
  min-height: 500px;
  padding: 50px;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 767px) {
    padding: 8px;
    min-height: 200px;
    margin: 0 -20px;
  }

  &:hover {
    box-shadow: 0 15px 45px -5px rgba(10, 16, 34, 0.3);
  }

  &.card-1 {
    background-image: url(${mediumPost2Img});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;

    @media (max-width: 767px) {
      background-size: cover;
      background-attachment: initial;
    }
  }
  &.card-2 {
    background-image: url(${yolkoThumbnail});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;

    @media (max-width: 767px) {
      background-size: cover;
      background-attachment: initial;
    }
  }
  &.card-3 {
    background-image: url(${viewnLogo});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;

    @media (max-width: 767px) {
      background-size: cover;
      background-attachment: initial;
    }
  }
`;

const StudioSection = styled.div``;

const CodeSection = styled.div``;

const StrikethroughText = styled.span`
  text-decoration: line-through;
`;

const ClassCard = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 1px 1px 1px rgba(10, 16, 34, 0.08);
  transition: all 200ms ease-in-out;
  min-height: 500px;
  padding: 50px;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 767px) {
    padding: 8px;
    min-height: 200px;
  }

  &:hover {
    box-shadow: 0 15px 45px -5px rgba(10, 16, 34, 0.3);
  }

  &.class-card {
    background-image: url(${SkillshareClassImg});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;

    @media (max-width: 767px) {
      background-size: cover;
      background-attachment: initial;
    }
  }
`;

class HomePage extends React.Component {
  state = {
    codeProjectsData: codeProjectsResoponseArray
  };

  render() {
    return (
      <div className="home-wrapper">
        <TopNav />
        <SectionHero>
          <h1 className="ds-overline-text-style hero-button-text-style">
            Hola! 👋🏼 mi nombre es
          </h1>

          <Link to="/about">
            <img className="portfolio-logo-img" src={NameLogo} />
          </Link>

          <i>
            <h5 className="hero-subheading-text">
              I’m a{" "}
              <a
                href="https://uxplanet.org/ux-engineers-what-we-are-2b0c4d10b3a6"
                target="_blank"
                className="hightlighted-offset"
              >
                UX Engineer
              </a>{" "}
              and Product Designer. By day I design and {"<code />"} digital
              products specializing in multi-platform{" "}
              <a
                href="https://codesandbox.io/embed/oskrhq-playground-app-x7mhz?fontsize=14&theme=dark&view=preview"
                target="_blank"
                className="hightlighted-offset"
              >
                Design Systems
              </a>{" "}
              for large enterprises. By night I enjoy making art with code,
              making moss art and doing illustrations.
            </h5>
          </i>

          <p className="home-contact-links">
            <Link to="/about">About</Link> ·{" "}
            <a
              href="mailto:someone@example.com?Subject=Hello%20again"
              target="_top"
            >
              oscar@oskrhq.com
            </a>{" "}
            ·{" "}
            <a href="https://github.com/ogonzal87" target="_blank">
              Github
            </a>{" "}
            ·{" "}
            <a href="https://codepen.io/ogonzal87/" target="_blank">
              Codepen
            </a>{" "}
            ·{" "}
            <a
              href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf"
              target="_blank"
            >
              Medium
            </a>{" "}
            ·{" "}
            <a href="https://dribbble.com/ogonzal87" target="_blank">
              Dribbble
            </a>{" "}
            ·{" "}
            <a href="https://www.instagram.com/oskrhq/" target="_blank">
              Instagram
            </a>
          </p>
        </SectionHero>

        <SectionProject className="ds-col-container" id="work">
          <Link to="/projects/design-system/" className="project-link">
            <ProjectCard className="card-1">
              <img className="number" src={number1} />
              <div className="project-card-title-container">
                <span className="ds-overline-text-style">
                  Company work + Personal Project
                </span>
                <h3 className="project-title">OSKRHQ Design System</h3>
                <span className="ds-overline-text-style project-card__footer-text">
                  DESIGN SYSTEMS | DEVELOPMENT | CREATIVE DIRECTION AND
                  MULTIDISCIPLINARY DESIGN | RESEARCH | SALES
                </span>
              </div>
            </ProjectCard>
          </Link>
        </SectionProject>

        <SectionProject className="ds-col-container">
          <Link to="/projects/client/" className="project-link">
            <ProjectCard className="card-3">
              <img className="number" src={number2} />
              <div className="project-card-title-container">
                <span className="ds-overline-text-style ">Client Work</span>
                <h3 className="project-title">VIEWN</h3>
                <span className="ds-overline-text-style project-card__footer-text">
                  BRAND IDENTITY | CREATIVE DIRECTION AND MULTIDISCIPLINARY
                  DESIGN | UX RESEARCH
                </span>
              </div>
            </ProjectCard>
          </Link>
        </SectionProject>

        <SectionProject className="ds-col-container">
          <Link to="/projects/yolko/" className="project-link">
            <ProjectCard className="card-2">
              <img className="number" src={number3} />
              <div className="project-card-title-container">
                <span className="ds-overline-text-style">Personal Project</span>
                <h3 className="project-title">YOLKO</h3>
                <span className="ds-overline-text-style project-card__footer-text">
                  PRODUCT, INTERACTION AND EXPERIENCE DESIGN | DEVELOPMENT | UX
                  RESEARCH
                </span>
              </div>
            </ProjectCard>
          </Link>
        </SectionProject>

        <StudioSection className="studio-section">
          <div className="section-title-container">
            <img
              src={studioLetteringImg}
              alt=""
              className="home-brush-lettering studio"
            />
          </div>

          <div className="text-container">
            <p className="studio-section-paragraph">
              I was born and raised in Colombia but now I live in San Francisco
              working at{" "}
              <a
                src="https://www.linkedin.com/"
                target="_blank"
                className="hightlighted-offset"
              >
                LinkedIn
              </a>
              . I’ve been working as a interdisciplinary Designer for over a
              decade. My current focus is building multi-platform{" "}
              <span className="hightlighted-offset">Design Systems</span> for
              large enterprises with a strong foundation in{" "}
              <span className="hightlighted-offset">accessibility</span> and{" "}
              <span className="hightlighted-offset">inclusivity</span>.
            </p>

            <div className="columns">
              <div>
                <h4 className="ds-overline-text-style">Design</h4>
                <ul className="column">
                  <li>Product Design</li>
                  <li>User Interface</li>
                  <li>Illustration</li>
                  <li>User Experience</li>
                  <li>Webflow designer</li>
                </ul>
              </div>

              <div>
                <h4 className="ds-overline-text-style">Code</h4>
                <ul className="column">
                  <li>React web developer</li>
                  <li>Face filters for Social Media</li>
                  <li>Code prototyping</li>
                  <li>Code prototyping</li>
                  <li>Web Development</li>
                </ul>
              </div>
            </div>
          </div>

          <img className="studio-profile-picture" src={profilePic} alt="" />
        </StudioSection>

        <CodeSection className="code-section">
          <div className="section-title-container">
            <img
              src={codeLetteringImg}
              alt=""
              className="home-brush-lettering code"
            />
          </div>

          <ul className="code-cards-list">
            {this.state.codeProjectsData.map((item, key) => {
              return (
                <CodeProjectCard
                  key={key}
                  title={item.title}
                  description={item.description}
                  codeImg={item.codeImg}
                  buttonName={item.buttonName}
                  linkTo={item.linkTo}
                />
              );
            })}
          </ul>
        </CodeSection>

        <div className="home-page-section thoughts-section">
          <div className="section-title-container">
            <img
              src={thoughtsImg}
              alt=""
              className="home-brush-lettering thoughts"
            />
          </div>
          <div className="home-posts-container">
            <a
              href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf"
              className="home-post-card"
              target="_blank"
            >
              <img src={mediumPost1Img} alt="" className="img-thumbnail" />
              <div className="post-text-container">
                <h6>The Anatomy of All Digital Interfaces</h6>
                <span className="ds-overlay-text-style">MEDIUM, MUZ.LI</span>
              </div>
            </a>
            <a
              href="https://medium.muz.li/crafting-a-new-visual-language-912d3ac8df43"
              className="home-post-card"
              target="_blank"
            >
              <img src={mediumPost3Img} alt="" className="img-thumbnail" />
              <div className="post-text-container">
                <h6>Crafting a New Visual Language</h6>
                <span className="ds-overlay-text-style">MEDIUM, MUZ.LI</span>
              </div>
            </a>
            <a
              href="https://blog.prototypr.io/a-dictionary-for-a-design-language-3afae1579586"
              className="home-post-card"
              target="_blank"
            >
              <img src={mediumPost2Img} alt="" className="img-thumbnail" />
              <div className="post-text-container">
                <h6>A Dictionary for a Design Language</h6>
                <span className="ds-overlay-text-style">MEDIUM, PROTOTYPR</span>
              </div>
            </a>
            <a
              href="https://uxdesign.cc/humanizing-interfaces-yep-cheesy-but-it-works-da6c8ca8aee7"
              className="home-post-card"
              target="_blank"
            >
              <img src={mediumPost4Img} alt="" className="img-thumbnail" />
              <div className="post-text-container">
                <h6>Homosapien-ing Interfaces</h6>
                <span className="ds-overlay-text-style">
                  MEDIUM, UX Collective
                </span>
              </div>
            </a>
            <a
              href="https://medium.com/@ogonzal87/how-i-made-a-themeable-design-system-for-my-professional-brand-oskrhq-ds-1c10f5b87587"
              className="home-post-card"
              target="_blank"
            >
              <img src={mediumPost5Img} alt="" className="img-thumbnail" />
              <div className="post-text-container">
                <h6>
                  How I made a themeable Design System for my Professional Brand
                </h6>
                <span className="ds-overlay-text-style">MEDIUM</span>
              </div>
            </a>
          </div>
        </div>

        <a
          href="https://skl.sh/2yhdemt"
          target="_blank"
          className="class-section home-page-section"
        >
          <div className="section-title-container">
            <img
              src={classHandLetteringImg}
              alt=""
              className="home-brush-lettering class"
            />
          </div>
          <ClassCard className="class-card">
            <div className="project-card-title-container">
              <span className="ds-overline-text-style">SkillShare class</span>
              <h3 className="project-title">Should Designers Code?</h3>
              <span className="ds-overline-text-style project-card__footer-text">
                A HUMBLE ATTEMPT TO BUILD EMPATHY BETWEEN DESIGNERS AND
                DEVELOPERS
              </span>
            </div>
          </ClassCard>
        </a>

        <CreativeLabMosque />

        <PortfolioFooter />
      </div>
    );
  }
}
export default HomePage;
