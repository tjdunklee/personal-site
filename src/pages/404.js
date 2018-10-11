import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet
          title={`Not Found - 404 Error`}
        />
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
