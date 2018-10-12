import React from 'react'

import aboutPic from '../assets/images/tim-dunklee-with-son.png'

class About extends React.Component {
  render() {
    return (
      <section className="section section--dark" id="about">
        <div className="wrap">
          <div className="section-header">
            <h2 className="section-header__heading">About</h2>
          </div>
      
          <div className="grid">
            <div className="grid__item one-whole l-fry-one-third">
              <div className="about__headshot">
                <img src={aboutPic} alt={`Tim Dunklee with his son`} />
              </div>
            </div>
      
            <div className="grid__item one-whole l-fry-two-thirds">
              <p>I am a senior front end web developer in Minneapolis, Minnesota. I've worked for several agencies in the Twin Cities area and always enjoy getting involved with a new project or client. I love the ever-changing industry I work in and never stop thinking about it even though my wife thinks I'm slightly obsessed. <a href="mailto:tjdunklee@gmail.com">Contact me</a> to find out more about my work experience and what I'm obsessing over at the moment (currently CSS Grid, Flexbox, and CSS Custom Properties).</p>
              <p>In my spare time I like to spend as much time outdoors as possible and snap some <a href="http://www.flickr.com/timdunklee">photos</a> while I'm at it. Snowboarding has always been a passion in my life, but lately kiteboarding is taking over. I call the Twin Cities area (Minneapolis/Saint Paul) home with my beautiful wife Kate, our hilarious son Jake, and our two furry animals.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
