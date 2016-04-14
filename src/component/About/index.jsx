import './index.less';
import React from 'react';

import Navigation from '../Navigation';
import Layout from '../Layout';
import Content from './Content';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'About';
  }
  render() {
    return <div className="aboutUs">
      <Navigation backImage = {require('../../common/image/about.jpg')} />
      <Layout {...this.props} login={true}>
        <Content />
      </Layout>
    </div>;
  }
}

export default About;
