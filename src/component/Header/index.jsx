import './index.less';
import React from 'react';
import { Row, Col, Icon } from 'antd';
import SearchInput from './searchInput'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Header';
  }

  handleShare(shareType) {
      // for share Event
      console.log(shareType)
  }

  render() {
    return <header className="header">
      <Row type="flex" justify="start" align="middle">
        <Col xs={{ span: 8, offset: 4 }} sm={{ span: 8, offset: 4 }} md={{ span: 8, offset: 4 }} lg={{ span: 8, offset: 4 }}>
          <div className="search">
            <ul>
              <li>繁</li>
              <li>EN</li>
              <li><SearchInput style={{width: 200}} /></li>
            </ul>
          </div>
        </Col>
        <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }}>
          <div className="share">
            <ul>
              <li>
                <img src={require('../../common/image/share_05.png')} width="24" alt="" onClick={this.handleShare.bind(this, 0)}/>
              </li>
              <li>
                <img src={require('../../common/image/share_04.png')} width="24" alt=""/>
              </li>
              <li>
                <img src={require('../../common/image/share_03.png')} width="24" alt=""/>
              </li>
              <li>
                <img src={require('../../common/image/share_02.png')} width="24" alt=""/>
              </li>
              <li>
                <img src={require('../../common/image/share_01.png')} width="24" alt=""/>
              </li>
              <li>分享至:</li>
            </ul>
          </div>
        </Col>
      </Row>
    </header>;
  }
}

export default Header;
