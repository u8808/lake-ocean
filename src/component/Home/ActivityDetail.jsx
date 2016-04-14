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
              <div className="item" style={{backgroundColor: "#FA0D1B"}}>
                <img width="100%" src={require('../../common/image/index_activity_01.png')} />
                <div className="title">庆典</div>
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item" style={{backgroundColor: "#C8996A"}}>
                <img width="100%" src={require('../../common/image/index_activity_02.png')} />
                <div className="title">会议</div>
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item" style={{backgroundColor: "#2073CE"}}>
                <img width="100%" src={require('../../common/image/index_activity_03.png')} />
                <div className="title">展览</div>
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item" style={{backgroundColor: "#FC9827"}}>
                <img width="100%" src={require('../../common/image/index_activity_04.png')} />
                <div className="title">科普</div>
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item" style={{backgroundColor: "#CA0F66"}}>
                <img width="100%" src={require('../../common/image/index_activity_05.png')} />
                <div className="title">竞赛</div>
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item" style={{backgroundColor: "#98C941"}}>
                <img width="100%" src={require('../../common/image/index_activity_06.png')} />
                <div className="title">娱乐</div>
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    </div>;
  }
}
