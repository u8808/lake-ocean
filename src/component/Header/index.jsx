import './index.less';
import React from 'react';
import { Row, Col, Icon } from 'antd';
import SearchInput from './searchInput'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Header';
  }
  render() {
    return <header className="header">
      <Row type="flex" justify="start" align="middle">
        <Col xs={{ span: 8, offset: 4 }} sm={{ span: 8, offset: 4 }} md={{ span: 8, offset: 4 }} lg={{ span: 8, offset: 4 }}>
          <div className="search">
            <ul>
              <li>繁</li>
              <li>EN</li>
              <li style={{paddingTop: 11}}><SearchInput style={{width: 200}} /></li>
            </ul>
          </div>
        </Col>
        <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }}>
          <div className="share">
            <ul>
              <li><i className="icon iconfont">&#xe602;</i></li>
              <li><i className="icon iconfont">&#xe603;</i></li>
              <li><i className="icon iconfont">&#xe600;</i></li>
              <li><i className="icon iconfont">&#xe601;</i></li>
              <li><i className="icon iconfont">&#xe604;</i></li>
              <li style={{fontSize: 1.125}}>分享至:</li>
            </ul>
          </div>
        </Col>
      </Row>
    </header>;
  }
}

export default Header;
