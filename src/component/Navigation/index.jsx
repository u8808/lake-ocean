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

        <Col xs={{ span: 16, offset: 4 }} sm={{ span: 16, offset: 4 }} md={{ span: 16, offset: 4 }} lg={{ span: 16, offset: 4 }}>

          <Row type="flex">
            <Item route="about" name="关于海洋季" bgColor="9C3" />
            <Item route="activity" name="活动一览" bgColor="39C" />
            <Item route="business" name="商业合作" bgColor="F06" />
            <Item route="volunteer" name="志愿者之家" bgColor="06C" />
            <Item route="news" name="新闻中心" bgColor="F90" />
          </Row>

        </Col>
      </Row>
    </div>;
  }
}

export default Navigation;


// <Col xs={{ span: 6, offset: 12 }} sm={{ span: 6, offset: 12 }} md={{ span: 6, offset: 12 }} lg={{ span: 6, offset: 12 }}>
//   <img src={require('../../common/image/index_logo.png')} alt=""/>
// </Col>
