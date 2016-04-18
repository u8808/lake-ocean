import './index.less';
import React from 'react';
import scrollAnim from 'rc-scroll-anim';

import Hot from './Hot';
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
        <Hot />
      </Element>
      <Element scrollName="page1">
        <Activity />
        <ActivityDetail />
      </Element>
      <Element scrollName="page2">
        <Others />
        <Partners />
      </Element>
      <Element scrollName="page3">
        <Footer />
      </Element>
    </div>;
  }
}

export default Home;
