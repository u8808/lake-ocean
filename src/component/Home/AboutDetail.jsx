import './index.less';
import React from 'react';
import { Row, Col } from 'antd';

export default class AboutDetail extends React.Component {
  render() {

    return <div className="aboutDetail">
      <Row>
        <Col xs={{ span: 16, offset: 4}} sm={{ span: 16, offset: 4}} md={{ span: 16, offset: 4}} lg={{ span: 16, offset: 4}}>
          <Row gutter={16}>
            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">交通查询</div>
            </Col>

            <Col xs={{ span: 16}} sm={{ span: 16}} md={{ span: 16}} lg={{ span: 16}}>
              <div className="item">
                ....
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">时间安排</div>
            </Col>

            <Col xs={{ span: 16}} sm={{ span: 16}} md={{ span: 16}} lg={{ span: 16}}>
              <div className="item">
                ....
              </div>
            </Col>


          </Row>
        </Col>
      </Row>
    </div>;
  }
}
