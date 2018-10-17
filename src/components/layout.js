import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Typewriter from 't-writer.js'

import Header from '../components/header'
import Contact from '../components/Section-contact'

import '../assets/scss/application.scss'

class Template extends React.Component {
  componentDidMount() {
    const typewriterText = document.querySelector('.js-headline')
    const typewriterOptions = {
      loop: true
    }

    if (typewriterText) {
      const typewriter = new Typewriter(typewriterText, typewriterOptions)
      typewriter
        .strings(
          200,
          "developer",
          "father", 
          "snowboarder",
          "photographer"
        )
        .start()
    }
  }

  render() {
    const { location, children } = this.props

    const footer = (
      <footer>
        <div className="wrap">
          <p>
            Made by Tim with a <a href="https://www.flickr.com/photos/timdunklee/6894884410/">large dog</a> on his&nbsp;lap. &copy;2018
          </p>
        </div>
      </footer>
    )

    return (
      <div>
        <Helmet defaultTitle={`Tim Dunklee - Front End Web Developer - Minneapolis MN`} titleTemplate={`%s | Tim Dunklee`}>
          <meta name="description" content="The personal portfolio of front-end web developer and boardsports enthusiast Tim Dunklee." />
          <html lang="en" class="theme-winter" />
        </Helmet>
        <Header location={location}/>
        <main className="main-content">
          {children}
          <Contact/>
        </main>
        {footer}
      </div>
    )
  }
}

export default Template
