import './index.less';
import React from 'react';
import { Row, Col, Button } from 'antd';

export default class Activity extends React.Component {
  render() {

    return <div className="activity">
      <Row type="flex" justify="center" align="bottom" style={{height: "100%"}}>
        <Col xs={{ span: 4}} sm={{ span: 4}} md={{ span: 4}} lg={{ span: 4}}>
          <div>
            <img src={require('../../common/image/index_logo.png')} alt=""/>
          </div>
          <div style={{paddingTop: 10, marginBottom: 50}}>
            <Button type="primary" size="large" style={{backgroundColor: "#0066cc", border: "none", fontSize: "2em"}}>
              活动一览
            </Button>
          </div>
        </Col>
      </Row>
    </div>;
  }
}
