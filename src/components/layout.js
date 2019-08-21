import React from 'react'
import Helmet from 'react-helmet'
import Typewriter from 't-writer.js'

import Header from '../components/header'
import Contact from '../components/Section-contact'

import '../assets/scss/application.scss'

import favicon16 from '../assets/images/favicon-16x16.png'
import favicon32 from '../assets/images/favicon-32x32.png'
import appleTouchIcon from '../assets/images/apple-touch-icon.png'
import safariPinnedTab from '../assets/images/safari-pinned-tab.svg'

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    };
  }

  componentDidMount() {
    this.updateStateFromLocalStorage();
    this.startTypewriter();
  }

  updateStateFromLocalStorage() {
    let isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    this.setState({darkMode: isDarkMode});
  }
  
  startTypewriter() {
    const typewriterText = document.querySelector('.js-headline')
    const typewriterOptions = {
      loop: true,
      typeColor: 'inherit',
      cursorColor: 'inherit'
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

  toggleDarkMode() {
    const newDarkModeBoolean = !this.state.darkMode;
    this.setState({darkMode: newDarkModeBoolean});
    localStorage.setItem('darkMode', JSON.stringify(newDarkModeBoolean));
  }

  render() {
    const { location, children } = this.props

    const footer = (
      <footer>
        <div className="wrap">
          <p>
            Made by Tim with a <a href="https://www.flickr.com/photos/timdunklee/6894884410/">large dog</a> on his&nbsp;lap. &copy;2019
          </p>
        </div>
      </footer>
    )

    return (
      <div>
        <Helmet 
          link={[
            { rel: 'icon', type:'image/png', sizes: '16x16', href: `${favicon16}` },
            { rel: 'icon', type:'image/png', sizes: '32x32', href: `${favicon32}` },
            { rel: 'apple-touch-icon', sizes: '180x180', href: `${appleTouchIcon}` },
            { rel: 'mask-icon', href: `${safariPinnedTab}`, color: '#333333' },
          ]}
          defaultTitle={`Tim Dunklee - Front End Web Developer - Minneapolis MN`}
          titleTemplate={`%s | Tim Dunklee`}
        >
          <meta name="description" content="The personal portfolio of front-end web developer and boardsports enthusiast Tim Dunklee." />
          <meta name="msapplication-TileColor" content="#333333" />
          <html lang="en" class={ this.state.darkMode ? 'dark-mode' : '' } />
        </Helmet>
        <Header location={location} toggleDarkMode={this.toggleDarkMode.bind(this)} darkMode={this.state.darkMode} />
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
