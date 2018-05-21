import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { DSButton } from "oskrhq-design-system";
import viewnLogo from '../../assets/images/viewn/viewn-logo.jpg'
import viewnHeroImg from "../../assets/images/viewn/vn-hero.png";
import viewnShowcaseImg from "../../assets/images/viewn/vn-showcase.jpg";
import LogoOld from "../../assets/images/viewn/logo-old.jpg";
import LogoNew from "../../assets/images/viewn/viewn-logo.jpg";
import LogoSpec from "../../assets/images/viewn/viewn-logo-specs.jpg";
import StyleSheetImg from "../../assets/images/viewn/style-sheet.jpg";
import PersonaImg1 from "../../assets/images/viewn/viewn-persona-exercise1.jpg";
import PersonaImg2 from "../../assets/images/viewn/viewn-user-persona.jpg";
import MarketResearchImg1 from "../../assets/images/viewn/viewn-product-survey1.jpg";
import MarketResearchImg2 from "../../assets/images/viewn/viewn-product-survey2.jpg";
import DefineImg1 from "../../assets/images/viewn/user-journey.jpg";
import DefineImg2 from "../../assets/images/viewn/info-architecture1.jpg";
import DefineImg3 from "../../assets/images/viewn/navigation-concept.jpg";
import InfoArchitectureImg from "../../assets/images/viewn/info-architecture2.jpg";
import NavigationGif from "../../assets/images/viewn/viewn-navigation.gif";
import demo1 from "../../assets/images/viewn/vn-demo1.gif";


import yolkoDisplayImg1 from '../../assets/images/placeholder-display-img.png'
import PortfolioFooter from '../../components/footer'
import number1 from '../../assets/images/hand-brush/01.png'
import number2 from '../../assets/images/hand-brush/02.png'
import number3 from '../../assets/images/hand-brush/03.png'
import number4 from '../../assets/images/hand-brush/04.png'
import number5 from '../../assets/images/hand-brush/05.png'
import number6 from '../../assets/images/hand-brush/06.png'
import TopNav from '../../components/top-nav'

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

class ClientProjectPage extends React.Component {
  render() {
  
    return <div className="project-page">
        <TopNav />

        <div className="hero-container">
          <div className="hero-container__text-container">
            <span className="special-text-styling">Client Work</span>
            <h1 className="ds-display3-text-style hero-container__title">
              VIEWN
            </h1>
            <p className="ds-subheading-text-style hero-container__description">
              Marketing data playground for non-technical marketers based on
              the principles of Customer Data Platforms (CDP-s). The
              challenge was to create a platform where marketers could see,
              manage, and track a unified profile of an individual customer
              so they could not only measure their engagement with the brand
              but also provide them with a tailored marketing experience in
              hopes of creating a closer relationship between that customer
              and the brand.
            </p>
            <span className="special-text-styling">UX Research</span>
            <span className="special-text-styling">Brand Identity</span>
            <p className="special-text-styling">
              Product, Interaction and Experience Design
            </p>
          </div>
          <div className="hero-container__img-container">
            <img src={viewnHeroImg} className="project-viewn-hero" />
          </div>
        </div>

        {/* <h3 className="project-section-title">DOSSIER</h3> */}
        <div className="case-study-dossier-container">
          <div className="dossier__problem-container">
            <p className="special-text-styling">Problem</p>
            <p className="ds-subheading-text-style">
              I was hired to create a product that would help non-technical
              marketers like Rafael, our user persona, and also craft a
              Brand Identity that would resonate with him. Today, Rafael has
              through dig through lots of data to create meaningful and
              effective marketing campaigns for the customers of the brands
              he manages. Many of the efforts are done manually and many
              times he relies on the help of other people like Data Analysts
              who query that data for Rafael.
            </p>
          </div>
          <div className="dossier__users-container">
            <p className="special-text-styling">Users</p>
            <p className="ds-subheading-text-style">
              Non-technical marketers.
            </p>
          </div>
          <div className="dossier__duration-container">
            <p className="special-text-styling">Duration</p>
            <p className="ds-subheading-text-style">July 2017 - Present</p>
          </div>
          <div className="dossier__tools-container">
            <p className="special-text-styling">Tools</p>
            <p className="ds-subheading-text-style">
              Pen, paper, Invision, Maze, Sketch App, Illustrator, and tons
              of sticky notes.
            </p>
          </div>
          <div className="dossier__role-container">
            <p className="special-text-styling">Role</p>
            <p className="ds-subheading-text-style">
              Product Designer, Creative Director, and UX Researcher.
            </p>
          </div>
          <div className="dossier__hypothesis-container">
            <p className="special-text-styling">Solution</p>
            <p className="ds-subheading-text-style">
              A platform that would allow Rafael to aggregate the data
              housed in many sources about a specific customer and create a
              unified customer profile. With this unified customer profile,
              Rafael could measure and track the customer's engagement with
              the brand and provide them with a tailored marketing
              experience. All this to create a closer relationship between
              that customer and the brand.
            </p>
          </div>
          <div className="dossier__constraints-container">
            <p className="special-text-styling">
              Constraints & Considerations
            </p>
            <p className="ds-subheading-text-style">
              VIEWN is a Certified Google Partner so the founders wanted
              their UI to e inspired by Google's.
            </p>
          </div>
          <div className="dossier__platforms-container">
            <p className="special-text-styling">Platforms</p>
            <p className="ds-subheading-text-style">Desktop</p>
          </div>
        </div>

        <img src={viewnShowcaseImg} className="project-showcase-img" />

        {/* <h3 className="project-section-title">the pixels' story</h3> */}

        <div className="design-process__section-container no-top-margin">
          <div className="project-design-process-title-container">
            <img src={number1} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">
              EMPATHIZE
            </h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">
              We started with the very basics. Working very closely with the founders, we crafted a Brand Identity that would resonate with someone like Rafael. To do this, we used one of my favorite techniques - <i
              >
                Humanizing the Product
              </i>. I wrote a whole article about it. You can read it <a href="https://uxdesign.cc/humanizing-interfaces-yep-cheesy-but-it-works-da6c8ca8aee7" target="_blank">
                here
              </a>. VIEWN is part of another company also owned by VIEWN's founders. This company is a Certified Google Partner so for them was very important that the User Interface was heavily influenced by Google's. We decided to follow Material's Design specs and documentation but we were careful not to dilute our brand.
            </p>
          </div>
        </div>

        <div className="project-img-grid">
          <h4>Old Brand Identity</h4>
          <h4>New Brand Identity</h4>
          <img src={LogoOld} alt="" className="grid-img" />
          <img src={LogoNew} alt="" className="grid-img" />
        </div>

        <img src={LogoSpec} className="project-displayfb-img" style={{ width: "40%" }} />
        <img src={StyleSheetImg} className="project-displayfb-img" style={{ width: "60%" }} />

        <div className="design-process__section-container">
          <div />
          <div>
            <p className="ds-subheading-text-style">
              I also managed a workshop with the founders in which we
              created Rafael. Since human actions are driven by emotions,
              through the workshop I looked for cues that I could use
              through the design process so I could feel what Rafael feels,
              what drives or discourages him as a marketer, what are his
              pains and frustrations. If I am able to empathize with his
              feelings, I should be able to create experiences of value to
              him.
            </p>
          </div>
        </div>

        <div className="project-img-grid">
          <img src={PersonaImg2} alt="" className="grid-img" />
          <img src={PersonaImg1} alt="" className="grid-img" />
        </div>

        <div className="design-process__section-container">
          <div />
          <p className="ds-subheading-text-style">
            We also prioritized features based on research. We wanted to
            focus on what Rafael would value the most first so we sent out
            surveys to marketers that most closely resembled Rafael. We even
            included some questions about the new brand identity.
          </p>
        </div>

        <div className="project-img-grid">
          <img src={MarketResearchImg1} alt="" className="" />
          <img src={MarketResearchImg2} alt="" className="" />
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number2} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">
              Define
            </h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">
              We combined our research and began highlighting opportunities for innovation. Rafael values looking at and tracking profiles the most to gauge how engaged that customer is with a brand. Insights and automation were huge as well. Remember, Rafael has to dig through lots of data to find meaningful patterns he could use to target his customers effectively. Furthermore, Rafael thinks he is tech savvy but he is really not, so he would have to rely on other people to query the data. What if we could provide him with a product that felt intuitive, helpful, and human while it also had predictive analytics and insightful KPI's. We wanted Rafael to feel 1)
              <strong>powerful/confident</strong>, 2) in <strong>
                control
              </strong> or <strong>organized</strong> and 3)
              <strong>
                feel good at the end of his workday{" "}
              </strong> after using VIEWN. We wanted him to focus on connecting customers to a brand, and less time digging through data and admin stuff... Who likes that anyway.
            </p>
            <p className="ds-subheading-text-style">
              So the requirements became:
            </p>
            <ol className="ds-subheading-text-style">
              <li>
                Rafael will import data from different sources including
                MailChimp, Marketo, Google Analytics, etc.
              </li>
              <li>
                Rafael will be able to see a unified customer profile with
                very detailed information about them sourced from the apps
                above.
              </li>
              <li>
                Rafael will create segments. These are groups of profiles
                that matched a certain criteria. e.i, Millennials in Miami.
              </li>
              <li>
                Rafael will be able to see metrics on the segments and/or
                individual profiles with predictive analytics to help him
                create meaningful marketing campaigns and tailored
                messaging.
              </li>
              <li>
                Rafael will create and track marketing campaigns through
                VIEWN.
              </li>
              <li>
                VIEWN will not get in the way of Rafael's productivity.
              </li>
            </ol>
          </div>
        </div>

        <div className="project-img-grid">
          <img src={DefineImg1} alt="" className="grid-img" />
          <img src={DefineImg2} alt="" className="grid-img" />
          <img src={DefineImg3} alt="" className="grid-img" />
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number3} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">
              Ideate
            </h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">
              I had somewhat of a crazy idea. What if we could architect the
              app as a story? The requirements themselves told a story for
              me; 1) Rafael imports data, 2) Rafael segments that data, 3)
              Rafael learns from the data, 4) Rafael engages the customers
              through marketing campaigns. Rafael would not always work in
              chronological order but I assumed the information architecture
              would resonate with him.
            </p>
          </div>
        </div>

        <img src={InfoArchitectureImg} className="project-displayfb-img" />
        <img src={NavigationGif} className="project-displayfb-img" />

        {/* <div className="design-process__section-container">
          <div>
          </div>
          <p className="ds-subheading-text-style">
            We were confident that this organization would allow Rafael to move fast through the app and get what he needed. For each section in the app, there needed to be a way to build or add content. 
          </p>
        </div> */}

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number4} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">
              Prototype
            </h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">
              I created a hi-fi prototype that would allow me to test our
              approach to the solution and would also allow VIEWN's founders
              to start showing what we were working on to investors. Rafael
              was the main protagonist every time we showed the prototype.
            </p>
          </div>
        </div>

        <img src={demo1} className="project-displayfb-img" style={{ width: "50%" }} />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number5} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">
              test
            </h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">
              I conducted usability tests guerrilla style with friends and
              family as I soon as I would prototype a task such as [Rafael
              need to import new profiles into VIEWN] or [Rafael needs to
              create a new Campaign and export the list of profiles]. I
              wanted to see how much I could learn from participants that
              were not in marketing, however, the most valuable tests came
              from people that resembled Rafael.
            </p>

            <p className="ds-subheading-text-style">
              Although that tests I did were heavy on usability, I was more
              concerned about how the participant felt at the end of each
              task. More specifically, those participants that matched
              Rafael the most. I gauged the success of the test on that;
              feelings and how much I learned, not whether a participant
              would complete the task successfully. At the end of each task,
              I would ask these questions:
            </p>

            <ol>
              <li className="ds-subheading-text-style">
                How does this make you feel?{" "}
              </li>
              <li className="ds-subheading-text-style">
                How would you like to feel in this scenario?
              </li>
              <li className="ds-subheading-text-style">
                To what extent [1-5] does this make you feel
                [powerful/empowered/confident]?
              </li>
              <li className="ds-subheading-text-style">
                To what extent [1-5] does this make you feel [organized]?
              </li>
              <li className="ds-subheading-text-style">
                To what extent [1-5] does this make you feel [like you did a
                good job at the end of the day]?
              </li>
            </ol>

            <p className="ds-subheading-text-style">
              These were things we wanted Rafael to feel after using VIEWN.
            </p>
          </div>
        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number6} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">
              Implement
            </h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">
              We are still working through some tests before we start
              building. but I look forward to implementing what we learn!
              I'll update this page accordingly. Can't wait to impress
              Rafael.
            </p>
          </div>
        </div>

        {/* <img src={yolkoDisplayImg1} className="project-displayfb-img" /> */}

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <h5 className="design-process__section-title ds-headline-text-style">
              lessons learned
            </h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">
              This project was a class on how to efficiently and lean. I
              really loved working with Roberto and Ayreya, the founders of
              VIEWN. I learned so much from them about managing projects
              efficiently and keeping each other focused. I learned how to
              read good documentation from Material Design
            </p>
          </div>
        </div>

        <PortfolioFooter />
      </div>;
  }
}
 export default ClientProjectPage