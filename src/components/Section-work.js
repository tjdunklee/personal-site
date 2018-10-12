import React from 'react'

import workLSI from '../assets/images/work-lsi.jpg'
import workCambria from '../assets/images/work-cambria.jpg'
import workNike from '../assets/images/work-eybl.jpg'
import workShriners from '../assets/images/work-shriners.jpg'
import workBanner from '../assets/images/work-banner.jpg'
import workBWW from '../assets/images/work-bww.jpg'

class Work extends React.Component {
  render() {
    return (
      <section className="section work" id="work">
        <div className="wrap">
          <div className="section-header">
            <h2 className="section-header__heading">Work</h2>
          </div>

          <div className="grid">
            <div className="grid__item one-whole s-fry-one-half l-fry-one-third work-item">
              <div className="work-item__img">
                <img src={workLSI} alt="LSI" />
              </div>

              <h3>Landscape Structures</h3>
              <a className="work-item__cta" href="http://www.playlsi.com" target="_blank">visit site &rarr;</a>
            </div>

            <div className="grid__item one-whole s-fry-one-half l-fry-one-third work-item">
              <div className="work-item__img">
                <img src={workCambria} alt="Cambria" />
              </div>

              <h3>Cambria</h3>
              <a className="work-item__cta" href="http://www.cambriausa.com" target="_blank">visit site &rarr;</a>
            </div>

            <div className="grid__item one-whole s-fry-one-half l-fry-one-third work-item">
              <div className="work-item__img">
                <img src={workNike} alt="Nike EYBL" />
              </div>

              <h3>Nike EYBL</h3>
              <a className="work-item__cta" href="http://www.nikeeyb.com" target="_blank">visit site &rarr;</a>
            </div>

            <div className="grid__item one-whole s-fry-one-half l-fry-one-third work-item">
              <div className="work-item__img">
                <img src={workShriners} alt="Shriners Hospitals for Children" />
              </div>

              <h3>Shriners Hospitals</h3>
              <a className="work-item__cta" href="http://www.shrinershospitalsforchildren.org" target="_blank">visit site &rarr;</a>
            </div>

            <div className="grid__item one-whole s-fry-one-half l-fry-one-third work-item">
              <div className="work-item__img">
                <img src={workBanner} alt="Banner Engineering" />
              </div>

              <h3>Banner Engineering</h3>
              <a className="work-item__cta" href="http://led.bannerengineering.com" target="_blank">visit site &rarr;</a>
            </div>

            <div className="grid__item one-whole s-fry-one-half l-fry-one-third work-item">
              <div className="work-item__img">
                <img src={workBWW} alt="Buffalo Wild Wings More Excuses" />
              </div>

              <h3>Buffalo Wild Wings</h3>
              <a className="work-item__cta" href="http://www.buffalowildwings.com/moreexcuses" target="_blank">visit site &rarr;</a>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default Work
