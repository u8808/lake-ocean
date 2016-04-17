import './index.less';
import React from 'react';
import scrollAnim from 'rc-scroll-anim';

import Navigation from '../Navigation';
import Hot from './Hot';
import About from './About';
import AboutDetail from './AboutDetail';
import Activity from './Activity';
import ActivityDetail from './ActivityDetail';
import Others from './Others';
import Partners from './Partners';
import Footer from '../Footer';

var Element = scrollAnim.Element

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Home';
  }

  componentDidMount() {
    // 整屏滚动;
    scrollAnim.scrollScreen.init({docHeight: 4746});
  }

  render() {
    return <div className="home">
        <Element scrollName="page0">
            <Navigation backImage = {require('../../common/image/index.jpg')} />
        </Element>
        <Element scrollName="page1">
            <Hot />
        </Element>
        <Element scrollName="page2">
            <About />
        </Element>
        <Element scrollName="page3">
            <AboutDetail />
        </Element>
        <Element scrollName="page4">
            <Activity />
        </Element>
        <Element scrollName="page5">
            <ActivityDetail />
        </Element>
        <Element scrollName="page6">
            <Others />
        </Element>
        <Element scrollName="page7">
            <Partners />
        </Element>
        <Element scrollName="page8">
            <Footer />
        </Element>
    </div>;
  }
}

export default Home;
