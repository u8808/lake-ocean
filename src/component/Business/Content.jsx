import './index.less';
import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Menu, Affix } from 'antd';

import Advantage from './Advantage';
import Arrangement from './Arrangement';
import Cooperation from './Cooperation';
import Contact from './Contact';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Content';
  }
  render() {
    return <div className="content">
      <Row gutter={16}>
        <Col xs={{ span: 4}} sm={{ span: 4}} md={{ span: 4}} lg={{ span: 4}}>
          <ul>
            <li><a href="#advantage">活动优势</a></li>
            <li><a href="#arrangement">活动安排</a></li>
            <li><a href="#cooperation">合作方式</a></li>
            <li><a href="#contact">联系我们</a></li>
          </ul>
        </Col>
        <Col xs={{ span: 20}} sm={{ span: 20}} md={{ span: 20}} lg={{ span: 20}}>
          <Advantage />
          <Arrangement />
          <Cooperation />
          <Contact />
        </Col>
      </Row>
    </div>;
  }
}

export default Content;
