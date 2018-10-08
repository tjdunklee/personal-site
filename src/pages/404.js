import React from 'react'
import Layout from '../components/layout'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="not-found">
          <div className="wrap wrap--narrow">
            <h1 className="not-found__title">404</h1>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
