import './index.less';
import React from 'react';

import Navigation from '../Navigation';
import Layout from '../Layout';
import Content from './Content';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'News';
  }
  render() {
    return <div className="news">
      <Navigation backImage = {require('../../common/image/news.jpg')} />
      <Layout {...this.props} login={true}>
        <Content />
      </Layout>
    </div>;
  }
}

export default News;
