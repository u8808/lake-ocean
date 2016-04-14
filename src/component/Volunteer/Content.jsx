import './index.less';
import React from 'react';
import { Row, Col } from 'antd';

import Login from '../Login';
import Item from './Item';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Content';
  }
  render() {

    return <div className="content">
      <Row gutter={32}>
        <Col xs={{ span: 18}} sm={{ span: 18}} md={{ span: 18}} lg={{ span: 18}}>
          <Item />
          <Item />
          <Item />
          <Item />
        </Col>
        <Col xs={{ span: 6}} sm={{ span: 6}} md={{ span: 6}} lg={{ span: 6}}>
          <Login />
        </Col>
      </Row>
    </div>;
  }
}

export default Content;
