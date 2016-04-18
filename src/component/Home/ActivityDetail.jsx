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
              <div className="item" color={{backgroundColor: "#FA0D1B"}}>
                <img width="100%" src={require('../../common/image/index_activity_01.jpg')} />
                <div className="title"><p>庆典</p></div>
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item" color={{backgroundColor: "#C8996A"}}>
                <img width="100%" src={require('../../common/image/index_activity_02.jpg')} />
                <div className="title"><p>会议</p></div>
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item" color={{backgroundColor: "#2073CE"}}>
                <img width="100%" src={require('../../common/image/index_activity_03.jpg')} />
                <div className="title"><p>展览</p></div>
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item" color={{backgroundColor: "#FC9827"}}>
                <img width="100%" src={require('../../common/image/index_activity_04.jpg')} />
                <div className="title"><p>科普</p></div>
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item" color={{backgroundColor: "#CA0F66"}}>
                <img width="100%" src={require('../../common/image/index_activity_05.jpg')} />
                <div className="title"><p>竞赛</p></div>
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item" color={{backgroundColor: "#98C941"}}>
                <img width="100%" src={require('../../common/image/index_activity_06.jpg')} />
                <div className="title"><p>娱乐</p></div>
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    </div>;
  }
}
