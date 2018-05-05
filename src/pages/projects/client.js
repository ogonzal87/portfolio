import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { DSCircleButton, DSButton } from '../../../node_modules/oskrhq-design-system/build/index.js'
import viewnLogo from '../../assets/images/viewn/viewn-logo.png'
import designProcessImg from '../../assets/images/design-process.png'
import yolkoDisplayImg1 from '../../assets/images/placeholder-display-img.png'
import PortfolioFooter from '../../components/footer'

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
  
    return (
      <div className="project-page">
        <div className="hero-container">
          <div className="hero-container__text-container">
            <span className="special-text-styling">Client Work</span>
            <h1 className="ds-display3-text-style hero-container__title">VIEWN</h1>
            <p className="ds-subheading-text-style hero-container__description">Marketing data playground for non-technical marketers based on the principles of Customer Data Platforms (CDP-s). The platform allows marketers to manage on a single location all customer data, making it easier for marketers to do effective marketing campaigns and connect with customers.</p>
            <span className="special-text-styling">UX Research</span>
            <span className="special-text-styling">Brand Identity</span>
            <p className="special-text-styling">Product, Interaction and Experience Design</p>
          </div>
          <div className="hero-container__img-container">
            <img src={viewnLogo} className="project-img" />
          </div>
        </div>

        <h4 className="project-section-title">Project DOSSIER</h4>
        <div className="case-study-dossier-container">
          <div className="dossier__problem-container">
            <p className="special-text-styling">Problem</p>
            <p className="ds-subheading-text-style">In order to create meaningful and effective marketing campaigns, marketers have to dig through many sources of data to find commonalities that make their marketing efforts more meaningful for customers. Today, many of the efforts are done manually with the help of Data Analysts by querying data.</p>

            <p className="ds-subheading-text-style">Furthermore, VIEWN's original Brand Identity did not effectively align with the image the founders wanted to portray with their audience.</p>
          </div>
          <div className="dossier__users-container">
            <p className="special-text-styling">Users</p>
            <p className="ds-subheading-text-style">Non-technical marketers.</p>
          </div>
          <div className="dossier__duration-container">
            <p className="special-text-styling">Duration</p>
            <p className="ds-subheading-text-style">June 2017 - Present</p>
          </div>
          <div className="dossier__tools-container">
            <p className="special-text-styling">Tools</p>
            <p className="ds-subheading-text-style">Pen, paper, Invision, Sketch App, Illustrator, whiteboard, and sticky notes.</p>
          </div>
          <div className="dossier__role-container">
            <p className="special-text-styling">Role</p>
            <p className="ds-subheading-text-style">Product Designer, Creative Director, and UX Researcher.</p>
          </div>
          <div className="dossier__hypothesis-container">
            <p className="special-text-styling">Hypothetical Solution</p>
            <p className="ds-subheading-text-style"><strong><i>If</i></strong> in order to create effective marketing campaigns, non-technical marketers have to rely on other people or deal with highly technical tools to source and interpret data from various sources, <strong><i>then</i></strong> by creating a platform that aggregates and presents this data in an intuitive non-technical way, brands could create more effective marketing campaigns.</p>
          </div>
          <div className="dossier__constraints-container">
            <p className="special-text-styling">Constraints & Considerations</p>
            <p className="ds-subheading-text-style">VIEWN is a Certified Google Partner so the founders wanted their UI to e inspired by Google's.</p>
          </div>
          <div className="dossier__platforms-container">
            <p className="special-text-styling">Platforms</p>
            <p className="ds-subheading-text-style">Desktop</p>
          </div>
        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <h4 className="project-section-title">How I got to the pixels</h4>

        <div className="design-process__section-container">
          <h5 className="design-process__section-title">EMPATHIZE</h5>
          <div>
            <p className="ds-subheading-text-style">We started from the very basics. Working very closely with the founders, we establish a brand identity that would resonate with their audience. To do this, we used one of my favorite techniques - <i>Humanizing the Product</i>. I wrote a whole article about it so you can read it <a href="https://uxdesign.cc/humanizing-interfaces-yep-cheesy-but-it-works-da6c8ca8aee7" target="_blank">here</a>. This technique allows me to extract the core essence of the brand which makes my job way easier when it comes to generating a brand identity.</p> 

            <blockquote className="crafted-quote"><i>&ldquo; Don't <span className="strikethrough">judge</span> design for a man/woman until you have walked a mile in his/her shoes &rdquo;.</i></blockquote>

            <p className="ds-subheading-text-style">We had a workshop with the founders in which we created a Primary User Persona for VIEWN. We named him Rafael. Since human actions are driven by emotions, through the exercise I looked for cues that I could use through the design process to feel what Rafael feels, what drives or discourages him as a marketer, what are his pains and frustrations. If I am able to empathize with his feelings, I should be able to create more meaningful experiences. </p>

            <p className="ds-subheading-text-style">We also realized that feature prioritization and subsequent design should come from asking the users what they valued the most first. Leveraging Google Surveys we were able to capture to define Rafael's most urgent pains. </p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <h5 className="design-process__section-title">Define</h5>
          <div>
            <p className="ds-subheading-text-style">We combined of our research and began highlighting opportunities for innovation. We realized that Rafael would have to dig through many sets of data to find meaningful patterns he could use to target his customers effectively. Furthermore, Rafael is not a technical person, so he would have to rely on other people or pay for existing antiquated solutions that felt too descriptive instead of predictive. I set out to design a product that felt intuitive, helpful, and human having predictive analytics and insightful KPI's as a major differentiator from our competitors in the market. </p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <h5 className="design-process__section-title">Ideate</h5>
          <div>
            <p className="ds-subheading-text-style">I began a Divergence Period where I came up with as many ideas as I could to solve the problem and then sketch/whiteboard some potential solutions. My approach to design is purely scientific — get a hypothesis that attempts to solve a problem, then validate through rapid testing. This was my testable hypothesis: "if the feedback and pulse of the class was available in real time, the interaction between presenter and attendee would improve resulting in a deeper understanding of what is being presented plus an engaged audience". YOLKO was born out of my desire to provide the attendee with a way to see the aggregate emotions of an audience to assess if it matched theirs. I also wanted to provide the presenter the ability to ask for feedback in realtime and for the audience to ask him/her questions among other cool features. With these wireframes/sketches, I began a Convergence Period and I start engineering the experiences. Fun fact - YOLKO was first called "Bubble Gum" and it was meant to show the tension of the audience by inflating and deflating.</p>
          </div>

        </div>  

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <h5 className="design-process__section-title">Prototype</h5>
          <div>
            <p className="ds-subheading-text-style">I am very creative but I am careful not to introduce features that are not absolutely necessary. I wanted to create a Minimum Viable Product that I would be simple to use, felt human, and was extensible (coding wise). I divided the product into two experiences: 1) Presenter's, and 2) Attendee's. The presenter would have a Dashboard, where s/he would be able to see all of the data coming in in real time. The Attendee would have a simple interface where they could provide feedback anytime they wanted. I was careful not to distract them from the presentation since I only wanted them to use YOLKO when they felt the need to  something to the presenter. I wired every frame for each experience using pen a paper and then translated those into Sketch App. Before designing, I usually define the characteristics of my UI (color, typography, spacing) and the use of established design patterns on the wild - a process I describe on this post. Below is a snapshot of what my UI elements were when designing the app. After that, I shared some of the early stages of YOLKO via Invision. Below you can also see the first iterations of the app UI and how it progressed with each cycle.</p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <h5 className="design-process__section-title">Test</h5>
          <div>
            <p className="ds-subheading-text-style">I usually do not start building something in code unless I have made as many design iterations as possible since is more efficient to change a design instead of code. For YOLKO however, I decided to code-prototype. Since this was a side project, I wanted to use it to enhance my coding skills and to be able to build something that was code-extensible in order to make rapid iterations - just like a real start up. Because of this, step 4 and 5 are intertwined. Although I did not conduct formal research studies, I did do A/B testing using Invision. Also used YOLKO for Design Critique sessions, and used it at one of General Assembly's gatherings. I also made a videos to share the idea and gather feedback.</p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <h5 className="design-process__section-title">Implement</h5>
          <div>
            <p className="ds-subheading-text-style">This is the last step in an iteration or cycle. Therefore, I perform these 5 steps cyclically. Each iteration is usually shorter than the last one and that is what is happening today with YOLKO. I decided to use AngularJS 1.5 with a Component Architecture for my front-end coupled with Bootstrap, and Firebase for my backend since I needed something that was scalable and that provided me with realtime features. I also wrote my own build-task setup using Gulp.js - the source code is available on Github. As of April 2017 I am in my third iteration of changes in code working with the University of Miami. We are testing it in our of their classrooms soon. After testing this iteration in one of their classrooms, I will perform yet another iteration taking in consideration what was learned and weather or not I keep validating my original hypothesis.</p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <h4 className="project-section-title">Things I learned</h4>
        <div className="project-things-learned-container">
          <p className="ds-subheading-text-style">I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations. I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations.</p>
        </div>

        {/* <PortfolioFooter /> */}

      </div>
    )
  }
}
 export default ClientProjectPage