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

            <Col xs={{ span: 6}} sm={{ span: 6}} md={{ span: 6}} lg={{ span: 6}}>
              <div className="item">
                <img width="100%" src={require('../../common/image/index_hot_01.jpg')} alt=""/>
              </div>

              <div className="item">
                <img width="100%" src={require('../../common/image/index_hot_02.png')} alt=""/>
              </div>
            </Col>

            <Col xs={{ span: 18}} sm={{ span: 18}} md={{ span: 18}} lg={{ span: 18}}>
              <div className="item">
                <img width="100%" src={require('../../common/image/index_hot_detail.jpg')} alt=""/>
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    </div>;
  }
}
