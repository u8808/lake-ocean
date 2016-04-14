import './index.less';
import React from 'react';
import { Row, Col } from 'antd';

export default class Arrangement extends React.Component {
  render() {

    return <div className="arrangement" id="arrangement">
      <Row gutter={16}>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <div className="image">
            <img src={require('../../common/image/商务合作/活动安排.jpg')} alt=""/>
          </div>
        </Col>

      </Row>
    </div>;
  }
}
