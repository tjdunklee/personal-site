import React from 'react'
import { Link } from 'gatsby'

import '../assets/scss/application.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link to={'/'}>
            Tim Dunklee
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={'/'}>
            Tim Dunklee
          </Link>
        </h3>
      )
    }
    return (
      <div>
        {header}
        {children}
      </div>
    )
  }
}

export default Template
