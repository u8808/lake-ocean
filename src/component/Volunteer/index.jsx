import './index.less';
import React from 'react';

import Navigation from '../Navigation';
import Layout from '../Layout';
import Content from './Content';

class Volunteer extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Volunteer';
  }
  render() {
    return <div className="volunteer">
      <Navigation backImage = {require('../../common/image/volunteer.jpg')} />
      <Layout {...this.props} login={false}>
        <Content />
      </Layout>
    </div>;
  }
}

export default Volunteer;
