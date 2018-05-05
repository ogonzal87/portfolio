import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { DSCircleButton, DSButton } from '../../../node_modules/oskrhq-design-system/build/index.js'
import yolkoAvatar from '../../assets/images/yolko-avatar.svg'
import yolkoDisplayImg1 from '../../assets/images/placeholder-display-img.png'
import PortfolioFooter from '../../components/footer'
import number1 from '../../assets/images/hand-brush/01.png'
import number2 from '../../assets/images/hand-brush/02.png'
import number3 from '../../assets/images/hand-brush/03.png'
import number4 from '../../assets/images/hand-brush/04.png'
import number5 from '../../assets/images/hand-brush/05.png'
import number6 from '../../assets/images/hand-brush/06.png'
import TopNav from '../../components/top-nav'

class YolkoProjectPage extends React.Component {
  render() {
  
    return (
      <div className="project-page">

        <TopNav />

        <div className="hero-container">
          <div className="hero-container__text-container">
            <span className="special-text-styling">Personal Project</span>
            <h1 className="ds-display3-text-style hero-container__title">Yolko</h1>
            <p className="ds-subheading-text-style hero-container__description">Real time feedback application for presentations. It quantifies the mood of the audience and displays it with emotions through an avatar called YOLKO. It is a fully responsive web app that uses AngularJS 1.5 Component Architecture for the front-end and Firebase for the backend. </p>
            <p className="special-text-styling">Product, Interaction and Experience Design</p>
            <span className="special-text-styling">UX Research</span>
            <span className="special-text-styling">Development</span>
            <span className="special-text-styling">Creative Direction</span>
            <a href="https://imyolko.com/#!/" className="project-btn__cta"><DSButton type="primary" label="Meet Yolko" size="medium" /></a>
          </div>
          <div className="hero-container__img-container">
            <img src={yolkoAvatar} className="project-img"/>
          </div>
        </div>
        
        <h4 className="project-section-title">CASE STUDY DOSSIER</h4>
        <div className="case-study-dossier-container">
          <div className="dossier__problem-container">
            <p className="special-text-styling">Problem</p>
            <p className="ds-subheading-text-style">When presenting, you are running blind since the audience is only able to provide feedback after the presentation. You do not know what were the highs and lows of your message. Furthermore, through research I found that more than 70% of participants wanted to ask questions or make a point in a presentation-type setting  but chose not to because of fear of reveling themselves to their peers and the presenter. Missed opportunities for learning and participation..?</p>
          </div>
          <div className="dossier__users-container">
            <p className="special-text-styling">Users</p>
            <p className="ds-subheading-text-style">Attendees and presenters at social gatherings such as classes or talks. </p>
          </div>
          <div className="dossier__duration-container">
            <p className="special-text-styling">Duration</p>
            <p className="ds-subheading-text-style">Apr 2016 - Nov 2017</p>
          </div>
          <div className="dossier__tools-container">
            <p className="special-text-styling">Tools</p>
            <p className="ds-subheading-text-style">Pen, paper, AngularJS 1.5, Firebase, Sketch App, SASS, Gulp.JS, Node.js, Invision.  </p>
          </div>
          <div className="dossier__role-container">
            <p className="special-text-styling">Role</p>
            <p className="ds-subheading-text-style">Attendees and presenters at social gatherings such as classes or talks. </p>
          </div>
          <div className="dossier__hypothesis-container">
            <p className="special-text-styling">Hypothetical Solution</p>
            <p className="ds-subheading-text-style"><strong><i>If</i></strong> people feel afraid of revealing themselves when asking questions, or expressing their opinions, <strong><i>then</i></strong> aggregating each participant's input while maintaining their privacy will improve their participation and subsequent understanding of the subject being presented.</p>
          </div>
          <div className="dossier__constraints-container">
            <p className="special-text-styling">Constraints & Considerations</p>
            <p className="ds-subheading-text-style">Avoid getting the audience distracted and provide anonymity for the participants.</p>
          </div>
          <div className="dossier__platforms-container">
            <p className="special-text-styling">Platforms</p>
            <p className="ds-subheading-text-style">Mobile and Desktop</p>
          </div>
        </div>

        <div className="project__video-container">
          <iframe src="https://player.vimeo.com/video/207403309" width="1000" height="800" frameBorder="0" allowFullScreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>
        </div>  

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <h4 className="project-section-title">How I got the pixels</h4>  

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number1} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">EMPATHIZE</h5>
          </div> 
          <div>
            <p className="ds-subheading-text-style">I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations. I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations.</p>

            <p className="ds-subheading-text-style">I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations.</p>
          </div>
          
        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number2} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Define</h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">Defining the problem for YOLKO was easier than other projects. I knew something was broken with the way traditional communication in presentations is provided by my experience as a student at General Assembly coding academy. However, I did not know what specifically. I asked my peers and my instructor for general feedback about the class when it ended and one of my peers said something that resonated with me; "it seems that my undestanding depended on that 3% of the class that always asks questions because I was too scare to do so." I had found my problem. The in interaction and subsequent looping feedback is broken.</p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number3} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Ideate</h5>            
          </div>
          <div>
            <p className="ds-subheading-text-style">I began a Divergence Period where I came up with as many ideas as I could to solve the problem and then sketch/whiteboard some potential solutions. My approach to design is purely scientific — get a hypothesis that attempts to solve a problem, then validate through rapid testing. This was my testable hypothesis: "if the feedback and pulse of the class was available in real time, the interaction between presenter and attendee would improve resulting in a deeper understanding of what is being presented plus an engaged audience". YOLKO was born out of my desire to provide the attendee with a way to see the aggregate emotions of an audience to assess if it matched theirs. I also wanted to provide the presenter the ability to ask for feedback in realtime and for the audience to ask him/her questions among other cool features. With these wireframes/sketches, I began a Convergence Period and I start engineering the experiences. Fun fact - YOLKO was first called "Bubble Gum" and it was meant to show the tension of the audience by inflating and deflating.</p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number4} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Prototype</h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">I am very creative but I am careful not to introduce features that are not absolutely necessary. I wanted to create a Minimum Viable Product that I would be simple to use, felt human, and was extensible (coding wise). I divided the product into two experiences: 1) Presenter's, and 2) Attendee's. The presenter would have a Dashboard, where s/he would be able to see all of the data coming in in real time. The Attendee would have a simple interface where they could provide feedback anytime they wanted. I was careful not to distract them from the presentation since I only wanted them to use YOLKO when they felt the need to  something to the presenter. I wired every frame for each experience using pen a paper and then translated those into Sketch App. Before designing, I usually define the characteristics of my UI (color, typography, spacing) and the use of established design patterns on the wild - a process I describe on this post. Below is a snapshot of what my UI elements were when designing the app. After that, I shared some of the early stages of YOLKO via Invision. Below you can also see the first iterations of the app UI and how it progressed with each cycle.</p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number5} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Test</h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">I usually do not start building something in code unless I have made as many design iterations as possible since is more efficient to change a design instead of code. For YOLKO however, I decided to code-prototype. Since this was a side project, I wanted to use it to enhance my coding skills and to be able to build something that was code-extensible in order to make rapid iterations - just like a real start up. Because of this, step 4 and 5 are intertwined. Although I did not conduct formal research studies, I did do A/B testing using Invision. Also used YOLKO for Design Critique sessions, and used it at one of General Assembly's gatherings. I also made a videos to share the idea and gather feedback.</p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number6} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Implement</h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">This is the last step in an iteration or cycle. Therefore, I perform these 5 steps cyclically. Each iteration is usually shorter than the last one and that is what is happening today with YOLKO. I decided to use AngularJS 1.5 with a Component Architecture for my front-end coupled with Bootstrap, and Firebase for my backend since I needed something that was scalable and that provided me with realtime features. I also wrote my own build-task setup using Gulp.js - the source code is available on Github. As of April 2017 I am in my third iteration of changes in code working with the University of Miami. We are testing it in our of their classrooms soon. After testing this iteration in one of their classrooms, I will perform yet another iteration taking in consideration what was learned and weather or not I keep validating my original hypothesis.</p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <h4 className="project-section-title">things i learned</h4>
        <div className="project-things-learned-container">
          <p className="ds-subheading-text-style">I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations. I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations.</p>
        </div>

        <PortfolioFooter/>
        
      </div>
    )
  }
}
 export default YolkoProjectPage