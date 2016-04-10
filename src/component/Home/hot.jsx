import './index.less';
import React from 'react';
import { Row, Col } from 'antd';
import Login from '../Login';

export default class Hot extends React.Component {
  render() {

    return <div className="hot">
      <Row>
        <Col xs={{ span: 4}} sm={{ span: 4}} md={{ span: 4}} lg={{ span: 4}}>
          <div className="login">
            <Login />
          </div>
        </Col>

        <Col xs={{ span: 16}} sm={{ span: 16}} md={{ span: 16}} lg={{ span: 16}}>
          <Row gutter={16}>
            <Col xs={{ span: 16}} sm={{ span: 16}} md={{ span: 16}} lg={{ span: 16}}>
              <div className="item">
                热点
              </div>
            </Col>
            
            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">热点</div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">热点</div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">热点</div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">热点</div>
            </Col>


          </Row>
        </Col>
      </Row>
    </div>;
  }
}
