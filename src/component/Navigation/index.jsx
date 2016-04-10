import './index.less'
import React from 'react';
import { Row, Col } from 'antd';
import Item from './Item';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Navigation';
  }

  render() {
    return <div className="navigation" style={{background: ' url(" '+ this.props.backImage +' ") no-repeat center / cover'}} >
      <Row type="flex" align="bottom" style={{height: "100%"}}>
        <Col xs={{ span: 6, offset: 12 }} sm={{ span: 6, offset: 12 }} md={{ span: 6, offset: 12 }} lg={{ span: 6, offset: 12 }}>
          <img src={require('../../common/image/index_logo.png')} alt=""/>
        </Col>
        <Col xs={{ span: 16, offset: 4 }} sm={{ span: 16, offset: 4 }} md={{ span: 16, offset: 4 }} lg={{ span: 16, offset: 4 }}>

          <Row type="flex">
            <Item key="about" name="关于海洋季" bgColor="339933" />
            <Item key="activity" name="活动一览" bgColor="0066cc" />
            <Item key="business" name="商业合作" bgColor="cc0066" />
            <Item key="volunteer" name="志愿者之家" bgColor="003399" />
            <Item key="news" name="新闻中心" bgColor="ff6600" />
          </Row>

        </Col>
      </Row>
    </div>;
  }
}

export default Navigation;