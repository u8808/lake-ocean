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
          <ul className="childNav">

            <li>
              <Link to={{ pathname: this.props.location.pathname, query: { scrollTo: 'advantage' } }}>
                活动优势
              </Link>
            </li>

            <li>
              <Link to={{ pathname: this.props.location.pathname, query: { scrollTo: 'arrangement' } }}>
                活动安排
              </Link>
            </li>

            <li>
              <Link to={{ pathname: this.props.location.pathname, query: { scrollTo: 'cooperation' } }}>
                合作方式
              </Link>
            </li>

            <li>
              <Link to={{ pathname: this.props.location.pathname, query: { scrollTo: 'contact' } }}>
                联系我们
              </Link>
            </li>

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
