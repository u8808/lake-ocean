import './index.less';
import React from 'react';
import { Row, Col } from 'antd';

export default class Others extends React.Component {
  render() {

    return <div className="others">
      <Row>
        <Col xs={{ span: 16, offset: 4}} sm={{ span: 16, offset: 4}} md={{ span: 16, offset: 4}} lg={{ span: 16, offset: 4}}>
          <Row>
            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="list">
                <div className="item" style={{borderBottom: "solid #cc0066 5px", borderTop: "solid #cc0066 5px"}} >
                  <span className="title cop" >商业合作</span>
                  <img width="100%" src={require('../../common/image/index_business.jpg')} />
                </div>
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="list">
                <div className="item" style={{borderBottom: "solid #003399 5px", borderTop: "solid #003399 5px"}} >
                  <span className="title vol" >志愿者之家</span>
                  <img width="100%" src={require('../../common/image/index_volunteer.jpg')} />
                </div>
              </div>
            </Col>

            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="list">
                <div className="item" style={{borderBottom: "solid #ff6600 5px", borderTop: "solid #ff6600 5px"}} >
                  <span className="title new" >新闻中心</span>
                  <img width="100%" src={require('../../common/image/index_news.jpg')} />
                </div>
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    </div>;
  }
}
