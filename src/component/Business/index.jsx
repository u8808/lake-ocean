import './index.less';
import React from 'react';

import Navigation from '../Navigation';
import Layout from '../Layout';
import Content from './Content';

class Business extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Business';
  }
  render() {
    return <div className="business">
      <Navigation backImage = {require('../../common/image/business.jpg')} />
      <Layout {...this.props} login={true}>
        <Content />
      </Layout>
    </div>;
  }
}

export default Business;
