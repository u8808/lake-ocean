import './index.less';
import React from 'react';
import { Row, Col, Card } from 'antd';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Footer';
  }

  render() {
    return <footer className="footer">
      <div className="footerBg">
        <Row>
          <Col xs={{ span: 16, offset: 4 }} sm={{ span: 16, offset: 4 }} md={{ span: 16, offset: 4 }} lg={{ span: 16, offset: 4 }}>
            <div>
              <h2 className="title">主办单位</h2>
              <p>国家海洋局、上海市人民政府</p>

              <h2 className="title">承办单位</h2>
              <p>
                上海临港地区开发建设管理委员会、<br/>
                上海市浦东新区人民政府、<br/>
                上海市海洋局
              </p>

              <h2 className="title">协办单位</h2>
              <p>港城集团</p>
            </div>

            <Row>
              <Col xs={{ span: 5 }} sm={{ span: 5 }} md={{ span: 5 }} lg={{ span: 5 }}>
                <div className="wechat">
                  <img width="100%" src={require('../../common/image/wechat_01.jpg')} />
                  <p>滴水湖海洋季官方微信</p>
                </div>
              </Col>

              <Col xs={{ span: 5 }} sm={{ span: 5 }} md={{ span: 5 }} lg={{ span: 5 }}>
                <div className="wechat">
                  <img width="100%" src={require('../../common/image/wechat_02.jpg')} />
                  <p>临港海洋高新订阅号</p>
                </div>
              </Col>

              <Col xs={{ span: 5 }} sm={{ span: 5 }} md={{ span: 5 }} lg={{ span: 5 }}>
                <div className="wechat">
                  <img width="100%" src={require('../../common/image/wechat_03.jpg')} />
                  <p>临港海洋高新服务号</p>
                </div>
              </Col>
            </Row>

          </Col>
        </Row>
      </div>
    </footer>;
  }
}

export default Footer;
