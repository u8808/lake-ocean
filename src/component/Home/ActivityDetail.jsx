import './index.less';
import React from 'react';
import { Row, Col } from 'antd';

export default class ActivityDetail extends React.Component {
  render() {

    return <div className="activityDetail">
      <Row>
        <Col xs={{ span: 16, offset: 4}} sm={{ span: 16, offset: 4}} md={{ span: 16, offset: 4}} lg={{ span: 16, offset: 4}}>
          <Row gutter={16}>
            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">
                <img width="100%" src={require('../../common/image/index_activity_01.jpg')} />
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">
                <img width="100%" src={require('../../common/image/index_activity_02.jpg')} />
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">
                <img width="100%" src={require('../../common/image/index_activity_03.jpg')} />
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">
                <img width="100%" src={require('../../common/image/index_activity_04.jpg')} />
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">
                <img width="100%" src={require('../../common/image/index_activity_05.jpg')} />
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">
                <img width="100%" src={require('../../common/image/index_activity_06.jpg')} />
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    </div>;
  }
}
