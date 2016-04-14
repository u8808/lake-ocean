import './index.less';
import React from 'react';
import { Row, Col, Button } from 'antd';

export default class About extends React.Component {
  render() {

    return <div className="about">
      <Row type="flex" align="middle" style={{height: "100%"}}>
        <Col xs={{ span: 6, offset: 14}} sm={{ span: 6, offset: 14}} md={{ span: 6, offset: 14}} lg={{ span: 6, offset: 14}}>
          <div>
            <img src={require('../../common/image/index_logo_white.png')} alt=""/>
          </div>
          <div style={{paddingTop: 10}}>
            <Button type="primary" size="large" style={{backgroundColor: "#339933", border: "none", fontSize: "2em"}}>关于海洋季</Button>
          </div>
        </Col>
      </Row>
    </div>;
  }
}
