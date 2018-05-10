import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { DSCircleButton, DSButton } from '../../../node_modules/oskrhq-design-system/build/index.js'
import yolkoAvatar from '../../assets/images/yolko-avatar.svg'
import empathizeImg1 from '../../assets/images/yolko/ga-people.jpg'
import empathizeImg2 from '../../assets/images/yolko/ga-presentation.jpg'
import empathizeImg3 from '../../assets/images/yolko/presentation.jpg'
import defineImg1 from '../../assets/images/yolko/survey.png'
import ideateImg1 from '../../assets/images/yolko/yolko-journeymap.jpg'
import ideateImg2 from '../../assets/images/yolko/bubble-gum-concept.jpg'
import ideateImg3 from '../../assets/images/yolko/yolko-wireframing1.jpg'
import ideateImg4 from '../../assets/images/yolko/yolko-sketching.jpg'
import yolkoDisplayImg2 from '../../assets/images/yolko/thumbnail.png'
import prototypeImg1 from '../../assets/images/yolko/yolko-early.png'
import prototypeImg2 from '../../assets/images/yolko/yolko-early2.png'
import prototypeImg3 from '../../assets/images/yolko/yolko-early-ui.png'
import prototypeImg4 from '../../assets/images/yolko/yolko-early-ui2.png'
import testImg1 from '../../assets/images/yolko/yolko-testing.gif'
import implementImg1 from '../../assets/images/yolko/yolko-wireframing.jpg'
import implementImg2 from '../../assets/images/yolko/yolko-implement2.jpg'
import implementImg3 from '../../assets/images/yolko/yolko-implement.jpg'
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
            <h1 className="ds-display3-text-style hero-container__title">YOLKO</h1>
            <p className="ds-subheading-text-style hero-container__description">Real time feedback application for presentations. It quantifies the mood of the audience and displays it with emotions through an avatar called YOLKO. It is a fully responsive web app that uses AngularJS 1.5 Component Architecture for the front-end and Firebase for the backend. </p>
            <p className="special-text-styling">Product, Interaction and Experience Design</p>
            <span className="special-text-styling">UX Research</span>
            <span className="special-text-styling">Development</span>
            <span className="special-text-styling">Creative Direction</span>
            <a href="https://imyolko.com/#!/" className="project-btn__cta"><DSButton type="primary" label="Meet YOLKO" size="medium" /></a>
          </div>
          <div className="hero-container__img-container">
            <img src={yolkoAvatar} className="project-img"/>
          </div>
        </div>
        
        <h4 className="project-section-title">CASE STUDY DOSSIER</h4>
        <div className="case-study-dossier-container">
          <div className="dossier__problem-container">
            <p className="special-text-styling">Problem</p>
            <p className="ds-subheading-text-style">As a presenter, you are running blind while in front of an audience since they are only able to provide feedback after the presentation. As an attendee, I found that 7 out of 10 people found themselves restraining themselves from asking a question out of fear of revealing themselves to their peers and the presenter. I see these as missed opportunities for learning and participation.</p>
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
            <p className="ds-subheading-text-style">I created, designed, tested and developed YOLKO.</p>
          </div>
          <div className="dossier__hypothesis-container">
            <p className="special-text-styling">Hypothetical Solution</p>
            <p className="ds-subheading-text-style">
            <strong><i>If</i></strong> people feel afraid of revealing themselves when asking questions, or expressing their opinions at social settings, <strong><i>then</i></strong> aggregating each participant's input while maintaining their privacy will improve their participation and subsequent understanding of the subject being presented, and the presenter could use this data to adjust to the needs of the audience in real time if s/he chooses to.</p>
          </div>
          <div className="dossier__constraints-container">
            <p className="special-text-styling">Constraints & Considerations</p>
            <p className="ds-subheading-text-style">Avoid getting the audience distracted and provide anonymity for them.</p>
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

        <h4 className="project-section-title">the pixels' story</h4>  

        <div className="design-process__section-container no-top-margin ">
          <div className="project-design-process-title-container">
            <img src={number1} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">EMPATHIZE</h5>
          </div> 
          <div>
            <p className="ds-subheading-text-style">The story on this one begins back in 2015 when I attended General Assembly to learn how to code. While taking the class, I realized that very few people would ask questions. Personally, I did not ask questions because I didn't want to sound dumb or hold up the class. But since no one was asking questions, I thought I was the only one not getting it... It wasn't until the last day of school when all my classmates when out to grab dinner that we all realized we were feeling the same way - We were afraid of asking questions because we didn't want to hold up the class or afraid of asking "dumb" questions.</p>

            <p className="ds-subheading-text-style">Social anxiety is a natural emotion especially when you are trying to convey the way you think or our lack of knowledge. Everyone has experienced this in one way.</p>
          </div>
          
        </div>

        <div className="project-img-grid">
          <img src={empathizeImg1} alt="" className="grid-img"/>
          <img src={empathizeImg2} alt="" className="grid-img"/>
          <img src={empathizeImg3} alt="" className="grid-img"/>
        </div>

        
        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number2} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Define</h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">So people feel uncomfortable asking questions or participating in social settings because when they do, they reveal not only who they are but also their vulnerabilities to the whole group.</p>

            <p className="ds-subheading-text-style">On the presenter's side, the presenter does not receive feedback in time to adjust the delivery of his/her message. In the context of classes, for example, the teacher only gets true feedback after the fact usually though exams to gauge whether or not people are understanding the material. This is broken.</p>

            <p className="ds-subheading-text-style">At this point, these problems were just assumptions backed by some nodes and a few agreements over dinner. Let's do some guerrilla research just to make sure...</p>
          </div>
        </div>


        <div className="project-img-grid">
          <img src={defineImg1} alt="" className="grid-img" />
          <p className="ds-subheading-text-style">Cool. I have data backing up my assumptions. My testable hypothesis then became: <strong><i>If</i></strong> people feel afraid of revealing themselves when asking questions, or expressing their opinions at social settings, <strong><i>then</i></strong> aggregating each participant's input while maintaining their privacy will improve their participation and subsequent understanding of the subject being presented, and the presenter could use this data to adjust to the needs of the audience.</p>
        </div>



        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number3} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Ideate</h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">I was designing two solutions for two separate users; the audience and the presenter. My original requirements were: </p>
            <ol>
              <li className="ds-subheading-text-style">The audience can provide feedback to the Presenter in real time</li>
              <li className="ds-subheading-text-style">The audience can see how everyone is feeling in real time all the time</li>
              <li className="ds-subheading-text-style">The presenter can see how the audience is feeling as a whole in real time</li>
              <li className="ds-subheading-text-style">The presenter can ask questions to the audience and see the results in real time</li>
            </ol>

            <p className="ds-subheading-text-style">I divided the product into two separate experiences; one for the Presenter, and the other for the Attendees. The presenter would have a Dashboard, where s/he would be able to see all of the data coming in in real time. The Attendee would have a simple interface where they could provide feedback. However, both interfaces have to be united by an artifact of emotion so that the presenter and the audience could see the aggregate input of everyone.</p>
          </div>
        </div>


        <div className="project-img-grid">
          <img src={ideateImg1} alt="" className="grid-img" />
          <img src={ideateImg2} alt="" className="grid-img" />
          <img src={ideateImg3} alt="" className="grid-img" />
          <img src={ideateImg4} alt="" className="grid-img" />
        </div>


        <div className="design-process__section-container">
          <div>
          </div>
          <div>
            <p className="ds-subheading-text-style">The original ideas that came to me were to create a bubble gum that would grow as the tension in the class increased. The goal of the presenter was then to not let the bubble gum to get too big but after getting feedback from my Teacher and a few classmates, I realized that I need to show emotion while making the app more human. What better way than to use the universal language for emotions; emojis. YOLKO was born as the face of the audience.</p>
          </div>
        </div>        


        <img src={yolkoDisplayImg2} className="project-displayfb-img" />
      

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number4} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Prototype</h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">My approach here was to learn as fast as I could through rapid testing. Below you can also see the first iterations of the app UI and how it progressed with each cycle.</p>
          </div>

        </div>

        <div className="project-img-grid">
          <img src={prototypeImg1} alt="" className="grid-img" />
          <img src={prototypeImg2} alt="" className="grid-img" />
          <img src={prototypeImg3} alt="" className="grid-img" />
          <img src={prototypeImg4} alt="" className="grid-img" />
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number5} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Test</h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">I conducted several tests with my classmates and my teacher. However, testing for Y was a bit weird because you need the other party's involvement since both the presenter and the audience are supposed to be communicating in real time. So I had to fake some of my tasks which didn't give me really definitive data. This was one of my mistakes with Y. I touch on this later on. However. through testing, I did validate my original hypothesis.</p>
          </div>

        </div>

        <img src={testImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number6} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Implement</h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">I decided to use AngularJS 1.5 with a Component Architecture for my front-end coupled with Bootstrap, and Firebase for my backend since I needed something that was scalable and that provided me with real-time features. I also wrote my own build-task setup using Gulp.js - the source code is available on Github.</p>
          </div>

        </div>

        <div className="project-img-grid">
          <img src={implementImg1} alt="" className="grid-img" />
          <img src={implementImg2} alt="" className="grid-img" />
          <img src={implementImg3} alt="" className="grid-img" />
        </div>


        <div className="design-process__section-container no-top-margin">
          <div>
          </div>
          <div>
            <p className="ds-subheading-text-style">After building it in code, and testing it at Design Critiques at my job and some meetups, I realized that people were getting too distracted from the actual presentation and were more focused on interacting with YOLKO. I even went and presented YOLKO at the University of Miami but the faculty agreed that, although it was a useful tool cool, it could be too distracting for students. Based on that feedback, I added a few features that would allow the presenter to only activate YOLKO when needed as well as other useful features. The majority of the time, YOLKO would be “sleeping”.</p>
          </div>
        </div>


        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <h5 className="design-process__section-title ds-headline-text-style">lessons learned</h5>
          </div>
          <div>
            <p className="ds-subheading-text-style">Because YOLKO was very interaction heavy with the other party's participation required, I should have built a small coded prototype earlier in the process and test the app in a real setting. I got too hung up on making YOLKO too easy to use and forgot to keep track of my constraints. In all, it was an amazing project to work on. I learned so much in both design and code because of him and sometimes use him at Design Critiques were I work at when I want true honest feedback on my designs... Maybe that would be iteration number 21,234. 🤪</p>
          </div>

        </div>

        <PortfolioFooter/>
        
      </div>
    )
  }
}
 export default YolkoProjectPage