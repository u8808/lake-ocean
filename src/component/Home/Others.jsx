import './index.less';
import React from 'react';
import { Row, Col } from 'antd';

export default class Others extends React.Component {
  render() {

    return <div className="others">
      <Row>
        <Col xs={{ span: 16, offset: 4}} sm={{ span: 16, offset: 4}} md={{ span: 16, offset: 4}} lg={{ span: 16, offset: 4}}>
          <Row gutter={16}>
            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">
                <span className="title" style={{backgroundColor: "#cc0066"}}>商业合作</span>
                <img width="100%" src={require('../../common/image/index_business.jpg')} />
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">
                <span className="title" style={{backgroundColor: "#003399"}}>志愿者之家</span>
                <img width="100%" src={require('../../common/image/index_volunteer.jpg')} />
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">
                <span className="title" style={{backgroundColor: "#ff6600"}}>新闻中心</span>
                <img width="100%" src={require('../../common/image/index_news.jpg')} />
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    </div>;
  }
}
