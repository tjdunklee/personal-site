import React from 'react'
import { Link } from 'gatsby'

import ThemeSwitcher from '../components/theme-switcher'

class Header extends React.Component {
  render() {
    const { location } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <header className="header">
          <div className="wrap header__inner">
            <div className="header-content">
              <div className="header-content__inner">
                <h1 className="logo logo--large">Tim <span>Dunklee</span></h1>
                <p className="welcome-paragraph">
                  <span className="js-headline"></span>
                </p>
              </div>
            </div>
            <ThemeSwitcher toggleDarkMode={this.props.toggleDarkMode} darkMode={this.props.darkMode} />
          </div>
        </header>
      )
    } else {
      header = (
        <header className="header-minimal">
          <div className="wrap header__inner">
            <Link to={'/'} className="logo logo--minimal">Tim <span>Dunklee</span></Link>
            <ThemeSwitcher toggleDarkMode={this.props.toggleDarkMode} darkMode={this.props.darkMode} />
          </div>
        </header>
      )
    }

    return (
      header
    )
  }
}

export default Header
