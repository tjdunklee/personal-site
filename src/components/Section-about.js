import React from 'react'

import aboutPic from '../assets/images/tim-dunklee-with-son.png'

class About extends React.Component {
  render() {
    return (
      <div>
        <img src={aboutPic} alt={`Tim Dunklee with his son`} />
        <p>
          Written by <strong>Kyle Mathews</strong> who lives and works in San
          Francisco building useful things.{' '}
          <a href="https://twitter.com/kylemathews">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default About
