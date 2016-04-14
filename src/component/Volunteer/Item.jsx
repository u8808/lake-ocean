import './index.less';
import React from 'react';
import { Row, Col, Card, Icon } from 'antd';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Item';
  }
  render() {
    return <div className="item">
      <Card style={{ width: "100%" }} bodyStyle={{ padding: 10 }} >
        <Row type="flex" align="top" gutter={24}>
          <Col xs={{ span: 3}} sm={{ span: 3}} md={{ span: 3}} lg={{ span: 3}}>
            <div className="avatar">
              <img src={require('../../common/image/index_news.jpg')} width="100%"/>
            </div>
          </Col>
          <Col xs={{ span: 21}} sm={{ span: 21}} md={{ span: 21}} lg={{ span: 21}}>
            <div className="itemContent">
              <div className="title">
                <h3>永远的皇后</h3>
              </div>
              <div className="body">
                <p>周末去滴水湖玩了，空气比市区好多了！</p>
                <p>
                  <img src={require('../../common/image/index_volunteer.jpg')} width="30%" alt=""/>
                  <img src={require('../../common/image/index_business.jpg')} width="30%" alt=""/>
                </p>
                <p>
                  <span>转发</span>
                  <span>评论(2)</span>
                  <span><Icon type="like" /></span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </div>;
  }
}

export default Item;
