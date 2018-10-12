import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <section className="section section--dark" id="contact">
        <div className="wrap">
          <div className="section-header">
            <h2 className="section-header__heading">Contact</h2>
          </div>

          <div className="text-center">
            <p>If you want to know more about my skillset or are just looking for a friend.</p>
            <p className="contact-email"><a href="mailto:tjdunklee@gmail.com">tjdunklee@gmail.com</a></p>

            <div className="social">
              <a href="http://github.com/tjdunklee" className="social__item" target="_blank">
                <span className="visuallyhidden">Github</span>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="1em" height="1em"><path d="M13.18 11.31c-.718 0-1.3.806-1.3 1.798 0 .994.582 1.8 1.3 1.8s1.3-.806 1.3-1.8c0-.992-.582-1.8-1.3-1.8zm4.526-4.684c.15-.365.155-2.44-.635-4.426 0 0-1.81.2-4.55 2.08-.575-.16-1.548-.238-2.52-.238s-1.944.078-2.52.238C4.74 2.4 2.93 2.2 2.93 2.2c-.79 1.987-.782 4.06-.635 4.426C1.367 7.634.8 8.846.8 10.496c0 7.187 5.963 7.302 7.467 7.302L10 17.8l1.733-.002c1.506 0 7.467-.115 7.467-7.3 0-1.653-.566-2.864-1.494-3.872zm-7.678 10.29h-.056c-3.77 0-6.71-.45-6.71-4.116 0-.88.31-1.693 1.048-2.37 1.227-1.126 3.305-.53 5.662-.53H10.028c2.357 0 4.436-.596 5.664.53.735.677 1.045 1.49 1.045 2.37 0 3.666-2.937 4.115-6.71 4.115zM6.82 11.308c-.717 0-1.3.806-1.3 1.798 0 .994.583 1.8 1.3 1.8.72 0 1.302-.806 1.302-1.8 0-.992-.582-1.8-1.3-1.8z"/></svg>
              </a> 
              <a href="http://www.facebook.com/tdunklee" className="social__item" target="_blank">
                <span className="visuallyhidden">Facebook</span>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="1em" height="1em"><path d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.003v2.605H14.37c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"/></svg>
              </a> 
              <a href="http://instagram.com/tjdunklee" className="social__item" target="_blank">
                <span className="visuallyhidden">Instagram</span>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="1em" height="1em"><path d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM9.984 15.523c3.06 0 5.538-2.48 5.538-5.54 0-.337-.043-.663-.103-.983H17v7.216c0 .382-.31.69-.693.69H3.693c-.383 0-.693-.308-.693-.69V9h1.55c-.062.32-.105.646-.105.984 0 3.06 2.48 5.54 5.54 5.54zm-3.46-5.54c0-1.91 1.55-3.46 3.46-3.46 1.912 0 3.463 1.55 3.463 3.46s-1.55 3.463-3.462 3.463c-1.913 0-3.462-1.55-3.462-3.462zM16.306 6h-1.615C14.31 6 14 5.688 14 5.308V3.69c0-.38.31-.69.69-.69h1.616c.384 0 .694.31.694.69v1.617c0 .38-.31.693-.693.693z"/></svg>
              </a> 
              <a href="http://www.flickr.com/timdunklee" className="social__item" target="_blank">
                <span className="visuallyhidden">Flickr</span>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="1em" height="1em"><path d="M5 14c-2.188 0-3.96-1.79-3.96-4S2.812 6 5 6c2.187 0 3.96 1.79 3.96 4S7.187 14 5 14zM15 14c-2.188 0-3.96-1.79-3.96-4S12.812 6 15 6c2.187 0 3.96 1.79 3.96 4s-1.773 4-3.96 4z"/></svg>
              </a> 
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
