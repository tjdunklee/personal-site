import React from 'react'
import { Link } from 'gatsby'

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
            <div className="theme-switcher">
              <button className="theme-switcher__button js-theme-switcher-button" title="Switch Theme">
                <svg className="theme-icon theme-icon--summer" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                  <title>Summer Icon</title>
                  <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/>
                </svg>
                <svg className="theme-icon theme-icon--winter" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                  <title>Winter Icon</title>
                  <path d="M23.464 12.698l-5.45 1.522-3.966-2.22 3.966-2.219 5.449 1.521.537-1.927-3.523-.982 3.125-1.762-.983-1.742-3.125 1.761.983-3.523-1.926-.537-1.52 5.449-4.031 2.256v-3.881l4-4-1.414-1.414-2.586 2.586v-3.586h-2v3.586l-2.586-2.586-1.414 1.414 4 4v3.881l-4.031-2.256-1.52-5.449-1.926.537.982 3.523-3.124-1.761-.982 1.742 3.124 1.762-3.523.982.537 1.927 5.449-1.521 3.966 2.219-3.966 2.22-5.45-1.522-.536 1.927 3.523.982-3.125 1.763.983 1.741 3.125-1.761-.984 3.523 1.927.536 1.521-5.448 4.03-2.255v3.88l-4 4 1.414 1.414 2.586-2.586v3.586h2v-3.586l2.586 2.586 1.414-1.414-4-4v-3.88l4.03 2.255 1.521 5.448 1.927-.536-.984-3.523 3.125 1.761.983-1.741-3.125-1.763 3.523-.982z"/>
                </svg>
              </button>
            </div>
          </div>
        </header>
      )
    } else {
      header = (
        <header className="header-minimal">
          <div className="wrap header__inner">
            <div className="logo logo--minimal">
              <Link to={'/'} className="logo logo--minimal">Tim <span>Dunklee</span></Link>
            </div>
            <div className="theme-switcher">
              <button className="theme-switcher__button js-theme-switcher-button" title="Switch Theme">
                <svg className="theme-icon theme-icon--summer" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                  <title>Summer Icon</title>
                  <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/>
                </svg>
                <svg className="theme-icon theme-icon--winter" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                  <title>Winter Icon</title>
                  <path d="M23.464 12.698l-5.45 1.522-3.966-2.22 3.966-2.219 5.449 1.521.537-1.927-3.523-.982 3.125-1.762-.983-1.742-3.125 1.761.983-3.523-1.926-.537-1.52 5.449-4.031 2.256v-3.881l4-4-1.414-1.414-2.586 2.586v-3.586h-2v3.586l-2.586-2.586-1.414 1.414 4 4v3.881l-4.031-2.256-1.52-5.449-1.926.537.982 3.523-3.124-1.761-.982 1.742 3.124 1.762-3.523.982.537 1.927 5.449-1.521 3.966 2.219-3.966 2.22-5.45-1.522-.536 1.927 3.523.982-3.125 1.763.983 1.741 3.125-1.761-.984 3.523 1.927.536 1.521-5.448 4.03-2.255v3.88l-4 4 1.414 1.414 2.586-2.586v3.586h2v-3.586l2.586 2.586 1.414-1.414-4-4v-3.88l4.03 2.255 1.521 5.448 1.927-.536-.984-3.523 3.125 1.761.983-1.741-3.125-1.763 3.523-.982z"/>
                </svg>
              </button>
            </div>
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
