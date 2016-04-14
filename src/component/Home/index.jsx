import './index.less';
import React from 'react';

import Navigation from '../Navigation';
import Hot from './Hot';
import About from './About';
import AboutDetail from './AboutDetail';
import Activity from './Activity';
import ActivityDetail from './ActivityDetail';
import Others from './Others';
import Partners from './Partners';
import Footer from '../Footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Home';
  }

  render() {
    return <div className="home">
      <Navigation backImage = {require('../../common/image/index.jpg')} />
      <Hot />
      <About />
      <AboutDetail />
      <Activity />
      <ActivityDetail />
      <Others />
      <Partners />
      <Footer />
    </div>;
  }
}

export default Home;
