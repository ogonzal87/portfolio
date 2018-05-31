import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { DSButton } from "oskrhq-design-system";
import dsLogo from '../../assets/images/ds-logo.svg'
import vnHeroImg from "../../assets/images/DS/ds-hero.png";
import ShowcaseImg from "../../assets/images/DS/ds-showcase.jpg";
import yolkoDisplayImg1 from '../../assets/images/placeholder-display-img.png'
import PortfolioFooter from '../../components/footer'
import number1 from '../../assets/images/hand-brush/01.png'
import number2 from '../../assets/images/hand-brush/02.png'
import number3 from '../../assets/images/hand-brush/03.png'
import number4 from '../../assets/images/hand-brush/04.png'
import number5 from '../../assets/images/hand-brush/05.png'
import number6 from '../../assets/images/hand-brush/06.png'
import TopNav from '../../components/top-nav'
import stripPrefix from '../../../.cache/strip-prefix';

import UltimateProposalImg from "../../assets/images/DS/ulti-uikit-demo.gif";
import DSStyleSheet from "../../assets/images/DS/style-sheet.jpg";
import DSUIElements from "../../assets/images/DS/ui-kit-elements.jpg";
import DSBreakdown from "../../assets/images/DS/part-of-design-system.jpg";
import DSButtonsDemo from "../../assets/images/DS/buttons-demo.gif";
import DSButtonsCode from "../../assets/images/DS/buttons-code.jpg";
import DSPackageJSON from "../../assets/images/DS/package-json.jpg";
import DSDefineImg1 from "../../assets/images/DS/ds-explanation.jpg";
import DSDefineImg2 from "../../assets/images/DS/ds-architecture1.jpg";
import DSImplement2 from "../../assets/images/DS/dimsum-storybook.gif";
import DSImplement3 from "../../assets/images/DS/em-uikit-show.gif";

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

class DSProjectPage extends React.Component {
  render() {
  
    return (
      <div className="project-page design-system-page">
        <TopNav />
        <div className="hero-container">
          <div className="hero-container__text-container">
            <span className="special-text-styling">Company Work + Personal Project</span>
            <h1 className="ds-display3-text-style hero-container__title">OSKRHQ.DS</h1>
            <p className="ds-subheading-text-style">OSKRHQ.DS a Design System I created for my personal brand to achieve a harmonious identity throughout various media outputs and to showcase the process of creation and maintanance. <strong>In fact, this website, along with every Design material I produce, consumes the system.</strong> More specifically, it is a Design Guide <strong>*and*</strong> Component Library written in ReactJS with a unique SASS architecture. It is also an open-sourced project you can download <a href="https://github.com/ogonzal87/oskrhq-design-system" target="_blank">here</a>, and has an accompanying UI Kit built in Sketch App with Smart symbols you can find <a href="https://github.com/ogonzal87/oskrhq-uikit" target="_blank">here</a>.</p>

            <p className="special-text-styling">Creative Direction and Multidisciplinary Design </p>
            <span className="special-text-styling">Design Systems</span>
            <span className="special-text-styling">Development</span>
            <span className="special-text-styling">UX Research</span>
            <a href="https://oskrhq-ds.surge.sh/" className="project-btn__cta" target="_blank"><DSButton type="primary" size="medium">View the Site</DSButton></a>
          </div>
          <div className="hero-container__img-container">
            <img src={vnHeroImg} className="project-ds-hero" /> 
          </div>
        </div>

  
        <div className="case-study-dossier-container">
          <div className="dossier__problem-container">
            <p className="special-text-styling">Problem</p>
            <p className="ds-subheading-text-style">As a designer or developer, you are your own brand. The products and services you produce become an extension of that brand. However, as you create artifacts overtime, your identity tends to get diluted since you are typically building these artifacts in isolation, or end up building the artifacts from scratch. This creates fragmented experiences for your audience as they move from one artifact to the next. This holds true for an individual or any company.</p>
          </div>
          <div className="dossier__users-container">
            <p className="special-text-styling">Primary Users</p>
            <p className="ds-subheading-text-style">Freelancers, Designers and Developers.</p>
          </div>
          <div className="dossier__duration-container">
            <p className="special-text-styling">Duration</p>
            <p className="ds-subheading-text-style">May 2017 - Present</p>
          </div>
          <div className="dossier__tools-container">
            <p className="special-text-styling">Tools</p>
            <p className="ds-subheading-text-style">Pen, paper, ReactJS, Sketch App, SASS.</p>
          </div>
          <div className="dossier__role-container">
            <p className="special-text-styling">Role</p>
            <p className="ds-subheading-text-style">Creative director, Designer and Developer</p>
          </div>
          <div className="dossier__hypothesis-container">
            <p className="special-text-styling">Hypothetical Solution</p>
            <p className="ds-subheading-text-style"><strong><i>If</i></strong> inconsistent artifacts of design and code dilutes a brand and its extensions, <strong><i>then</i></strong> implementing a full Design System should create a harmonious identity felt by a targeted  audience.</p>
          </div>
          <div className="dossier__constraints-container">
            <p className="special-text-styling">Constraints & Considerations</p>
            <p className="ds-subheading-text-style">Provide solutions for both Designers AND developers and make adoption easy for anyone.</p>
          </div>
          <div className="dossier__platforms-container">
            <p className="special-text-styling">Platforms</p>
            <p className="ds-subheading-text-style">Mobile and Desktop</p>
          </div>
        </div>

        <div className="project__video-container">
          <iframe src="https://player.vimeo.com/video/265949113" width="1000" height="800" frameBorder="0" allowFullScreen></iframe>
        </div>

        <img src={ShowcaseImg} className="project-showcase-img" />


        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
          </div>
          <div>
            <p className="crafted-quote ">A really cool story of how we built a Design System through collaboration between design and development without business, product or management support...</p>
          </div>
        </div>

        

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number1} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Empathize</h5>
          </div> 
          <div>
            <p className="ds-subheading-text-style">Although I am ultimately a designer, I also code and have worked as a UI developer. This has allowed me to be right in between design and development and has given me a front row seat to each user’s pains and frustrations. It is actually funny to me how very much alike these problems are.</p>

            <p className="ds-subheading-text-style">My obsession with systematizing design begins in Q2 2017 while working for Ultimate Software. I went to grab lunch with a coworker one day and we found ourselves sharing our frustration with not being able to stay in sync with the design team. A problem causing inconsistencies in our interfaces. At Ultimate, I also had the opportunity to work as a dev and I noticed devs too had the same problem. However, by then the industry had come up with clever ways of solving these as well as other problems like versioning and continuous deployment. I began to wonder if these solutions were only available for Development and how I could extend these to Design? 
            </p>
          </div>
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number2} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Define</h5>
          </div> 
          <div>
            <p className="ds-subheading-text-style">It does not matter if you are on a design team or development team, it all boils down to speed, being in sync, and visibility. A designer does not want to redesign a Button and a Developer does not want to re-code the button because doing so means adding time and frustration, and also impacts negatively the end user by creating fragmented experiences.</p>

            <p className="ds-subheading-text-style">Front-end Development came up with the notion of building User Interfaces using Component Architecture. Although an overly simplified definition, a Component Architecture essentially means that you can code one button and the whole development team can use an instance of that button and not have to recode it from scratch. Furthermore, you can update that button and the whole team would get the updates. This holds true for more complex elements as well with deeply nested components. On top of that, Devs also use Git to stay in sync and account for how these elements change over time through versioning. So, I became really interested in taking these principles and applying them to Design.</p>

            <p className="ds-subheading-text-style">At the time, Sketch App had just come up with Sketch Symbols which are essentially reusable pieces of Design just like components are in code. While at Ultimate, I created a UI Kit for my design team and used Brand.ai (a tool for syncing symbols) so we could all be in sync. I even constructed the Symbols so they would match 1-to-1 with the components in code - even matching the overrides of the Symbols with the API's of the components (Component Attributes). That way, there would not be any confusion or ambiguity when handing over the designs to devs.</p>
          </div>

        </div>


        <img src={UltimateProposalImg} className="project-displayfb-img" />



        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
          </div>
          <div>
            <p className="ds-subheading-text-style">I switched jobs in Q4 of 2018 and moved to the Bay Area to build a Design System for Ellie Mae. Unfortunately, the company did not consider building or maintaining a Design System a priority. Talking to developers and designers and seeing how fragmented our experiences were in our 20+ products, I felt very strongly that we desperately needed one, so the issue became a very high priority on my personal agenda.</p>

            <p className="ds-subheading-text-style">I think the best way of selling an initiative is showing it so I decided to create a Design System for myself first and use it to show the benefits and the concept. A sort of Minimum Viable Product I could also use for my personal brand. My requirements became:</p>

            <ol className="ds-subheading-text-style">
              <li>
                Benefit Development and Design equally.
              </li>
              <li>
                Be based on my Anatomy of the UI Principles. I write about this here.
              </li>
              <li>
                Flexible enough for Design to make changes with zero to no dev involvement.
              </li>
              <li>
                Have a Component Library built in ReactJs.
              </li>
              <li>
                Support all the design artifacts or products I make in the future including apps, websites, presentations, medium posts, etc.
              </li>
            </ol>
          </div>

        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number3} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Ideate & Prototype</h5>
          </div> 
          <div>
            <p className="ds-subheading-text-style">The first thing I did was a Style Sheet for my system based on the personality I wanted to convey.  I write about this process on my series of Medium Posts. </p>
          </div>
        </div>

        <img src={DSStyleSheet} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
          </div>
          <div>
            <p className="ds-subheading-text-style">From that, I created a UI Kit in Sketch with smart Symbols for the system. This allowed me to fine tune my colors, typography, space, depth, and iconography in design before I started coding the components and the SASS architecture supporting them. </p>
          </div>
        </div>

        <img src={DSUIElements} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
          </div>
          <div>
            <p className="ds-subheading-text-style">After designing a couple of Symbols in Sketch, I focused on architecture. I created sass mixins and functions that allowed me to compose UI elements with the same sub-atomic parts. What are sub-atomic parts? You see, every UI element you interact with in digital interfaces is composed of something I call the anatomy of UI; Color, Typography, Space, Motion, Depth, and Iconography. If you architect a framework for these and connect them using CSS preprocessors like LESS or SASS, it is easy to make products that feel cohesive since every element is composed out of the same “DNA” or sub-atomic parts. You should read my Medium post series about this if this really interests you. 🤓</p>
          </div>
        </div>

        <img src={DSBreakdown} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
          </div>
          <div>
            <p className="ds-subheading-text-style">The point of a robust sass architecture is to hard-code CSS values the least possible. All the buttons you see below for example, where coded with the SASS architecture I put together. Below you can also see the code for the Primary button as an example. If you notice, each CSS declaration is connected to the system and nothing is hardcoded. Furthermore, each sub-atomic definition, follow predictable scales. If you want to know more about this, check out the System's website. I explain this in detail there.</p>
          </div>
        </div>

        <img src={DSButtonsDemo} className="project-displayfb-img" />

        <div className="design-process__section-container" style={{ marginTop: '0' }}>
          <div className="project-design-process-title-container">
          </div>
          <div>
            <img src={DSButtonsCode} className="project-displayfb-img"/>
          </div>
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number4} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Test</h5>
          </div> 
          <div>
            <p className="ds-subheading-text-style">As soon as I had a few components constructed, I published the design system as a Node package. This way I could import it as a dependency for every project I create and also other people could consume it or fork it. The first “product” consuming the system was the website that explains the system itself. The second “product” consuming the system was my portfolio, which is this website. If I make any updates to Color, Typography, Space, Motion, Depth or Iconography in my system, the updates will be reflected on all the products consuming the system. Although most of the time I would want to update all of the products to the latest version of the system, the system follows semantic versioning so I don't have to update if don't want to. If you would like to install it and play with the code just run:</p>

            <pre><code>npm i --save oskrhq-design-system</code></pre>

            <img src={DSPackageJSON} className="" style={{marginTop: '200px', maxWidth: '624px'}}/>

          </div>

        </div>



        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
          </div>
          <div>
            <p className="ds-subheading-text-style">After I felt confident I had a solid MVP, I showed it to a couple of developers, as well as our UI Architect and 2 designers. They joined me to build the same thing for the company. Soon thereafter we had a team of 8 people coding and designing on their own time since we still did not have support from management at that time. Below is the result of a whiteboard session where I explained what the system was and how it bridged the gap between Design and Code.</p>
          </div>
        </div>


        <div className="project-img-grid">
          <img src={DSDefineImg1} alt="" className="grid-img" />
          <img src={DSDefineImg2} alt="" className="grid-img" />
        </div>



        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number5} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Implement</h5>
          </div> 
          <div>
            <p className="ds-subheading-text-style">We started building the system in May 2018. We used Storybook for our construction environment, ReactJS for our UI framework and a very robust SASS architecture with utility mixins, functions and classes. We took a User Centered design approach to this since the design system is meant to be used by both Designers and Developers so we focused heavily on documentation, testing, and adoption. We even have an Adoption plan for all of our products based on Nathan Curtis article about Design System's adoption. We took time to compose the core components and to use them so that we could get a feel for how was to use the system as a consumer and user. We tweaked it has we learned. </p>
          </div>

        </div>
        
        
        <img src={DSImplement2} className="project-displayfb-img" />
        

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
          </div>
          <div>
            <p className="ds-subheading-text-style">The Design System also has a UI Kit I constructed and maintain for designers and we are currently playing with tools like <a href="https://github.com/brainly/html-sketchapp" target="_blank">html-sketchapp</a>, <a href="https://compositor.io/lab/" target="_blank">compositior.io</a>, and <a href="http://airbnb.io/react-sketchapp/" target="_blank">react-sketchapp</a> to see if we can get development and design even closer.</p>
          </div>
        </div>


        <img src={DSImplement3} className="project-displayfb-img" />



        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
          </div>
          <div>
            <p className="ds-subheading-text-style">We are even making Accessibility a priority by constructing and testing every component with that in mind. It is still very early for the system although 4 other products are beginning to consume it as-is. I am confident the system is well on its way to becoming the way we build our interfaces at Ellie Mae.  All of this, without being a mandate from management. </p>
          </div>
        </div>






        

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <h5 className="design-process__section-title ds-headline-text-style">
              lessons learned
            </h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">
              The most notable thing is that this project was born and materialized from the needs of the users of the product (developers and designers), which I think is a beautiful thing. This was not mandated or prioritized by management. Sometimes a small POC like what OSKRHQ.DS was, is enough to start something bigger. It is just like David said in the Prometheus movie...
            </p>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DCdQkgSwNoU" frameBorder="0" allow="autoplay; encrypted-media" allowFullscreen style={{margin: '50px 0'}}></iframe>
            
            <p className="ds-subheading-text-style">
              This project taught me that sometimes “going rogue” means delivering value to the whole business even when management wants you to focus on other things. It also taught me that collaboration and having a purpose are amazing motivators for people. Everyone wants to belong to something that delivers value. That is why we have so many open-sources projects out there in including my design system.   
            </p>
            <p className="ds-subheading-text-style">
              Finally, the project taught me how similar the problems of Design and Development are. This actually excites me the most because there is a lot of room for innovation when it comes to bridging the gap between design and implementation.
            </p>
          </div>
        </div>

        <PortfolioFooter/>

      </div>
    )
  }
}
 export default DSProjectPage