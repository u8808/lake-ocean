import './index.less';
import React from 'react';
import App from '../App';
import Navigation from '../Navigation';
import Hot from './Hot';
import About from './About';
import AboutDetail from './AboutDetail';
import Activity from './Activity';
import ActivityDetail from './ActivityDetail';
import Others from './Others';
import Partners from './Partners';

class Home extends React.Component {
  render() {
    return <App>
      <Navigation backImage = {require('../../common/image/index.jpg')} />
      <Hot />
      <About />
      <AboutDetail />
      <Activity />
      <ActivityDetail />
      <Others />
      <Partners />
    </App>;
  }
}

export default Home;
