import './index.less';
import React from 'react';
import { Row, Col } from 'antd';

export default class Contact extends React.Component {
  render() {

    return <div className="contact" id="contact">
      <Row gutter={16}>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <div className="">
            <p>联系人：金小姐</p>
            <p>联系电话135 2462 5525</p>
            <div>
              <img src={require('../../common/image/wechat_02.jpg')} width="150" alt=""/>
              <p style={{width: 150, textAlign: "center"}}>临港海洋高新订阅号</p>
            </div>
          </div>
        </Col>

      </Row>
    </div>;
  }
}
