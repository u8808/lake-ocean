import '../common/lib';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from '../component/App';
import Home from '../component/Home';
import About from '../component/About';
import Activity from '../component/Activity';
import Business from '../component/Business';
import Volunteer from '../component/Volunteer';
import News from '../component/News';

window.react = React;
window['react-dom'] = ReactDOM;

// Enable Google Analytics
if (!location.port) {
  /* eslint-disable */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-72788897-1', 'auto');
  ga('send', 'pageview');

  hashHistory.listen((loc) => {
    ga('send', 'pageview', loc.pathname + loc.search);
  });
  /* eslint-enable */
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" breadcrumbName="首页" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" breadcrumbName="关于海洋季" component={About} />
      <Route path="activity" breadcrumbName="活动一览" component={Activity} />
      <Route path="business" breadcrumbName="商业合作" component={Business} />
      <Route path="volunteer" breadcrumbName="志愿者之家" component={Volunteer} />
      <Route path="news" breadcrumbName="新闻中心" component={News} />
    </Route>
  </Router>,
  document.getElementById('react-content')
);
