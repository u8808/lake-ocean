import './index.less';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Row, Col } from 'antd';

export default class AboutDetail extends React.Component {
  render() {

    return <div className="aboutDetail">
      <Row>
        <Col xs={{ span: 16, offset: 4}} sm={{ span: 16, offset: 4}} md={{ span: 16, offset: 4}} lg={{ span: 16, offset: 4}}>
          <Row gutter={16}>
            <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
              <div className="item">
                <img width="50" src={require("../../common/image/index_about_traffic.png")} alt=""/>
                <p>交通查询</p>
              </div>

              <div className="item">
                <img width="50" src={require("../../common/image/index_about_timer.png")} alt=""/>
                <p>时间安排</p>
              </div>

            </Col>

            <Col xs={{ span: 16}} sm={{ span: 16}} md={{ span: 16}} lg={{ span: 16}}>
              <div className="">
                <embed src="http://player.youku.com/player.php/sid/XMTUzNDMzMDE1Ng==/v.swf" allowFullScreen="true" quality="high" width="100%" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    </div>;
  }
}
