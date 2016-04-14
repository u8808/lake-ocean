import './index.less';
import React from 'react';
import { Row, Col } from 'antd';

export default class Partners extends React.Component {
  render() {

    return <div className="partners">
      <Row>
        <Col xs={{ span: 16, offset: 4}} sm={{ span: 16, offset: 4}} md={{ span: 16, offset: 4}} lg={{ span: 16, offset: 4}}>
          <Row type="flex" align="middle">
            <Col xs={{ span: 24}} sm={{ span: 24}} md={{ span: 24}} lg={{ span: 24}}>
              <div className="title">合 作 伙 伴</div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="http://www.shou.edu.cn/" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-01.jpg')} />
                </a>
              </div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="http://www.shsea.gov.cn" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-02.jpg')} />
                </a>
              </div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="https://www.shanghaidisneyresort.com" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-03.jpg')} />
                </a>
              </div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="http://www.shmtu.edu.cn/" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-04.jpg')} />
                </a>
              </div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="http://www.lgxc.gov.cn/home.aspx" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-05.jpg')} />
                </a>
              </div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="http://www.rainbowfish.com.cn" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-06.jpg')} />
                </a>
              </div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="www.shanghaisailing.com" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-07.jpg')} />
                </a>
              </div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="http://www.shou.edu.cn/" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-08.jpg')} />
                </a>
              </div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="http://www.reedexpo.com.cn/home/" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-09.jpg')} />
                </a>
              </div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="http://www.haichangchina.com/" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-10.jpg')} />
                </a>
              </div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="http://www.fareastboats.com/zh/home" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-11.jpg')} />
                </a>
              </div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="http://cn.ihg.com/crowneplaza" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-12.jpg')} />
                </a>
              </div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="http://www.spring-wave.com/" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-13.jpg')} />
                </a>
              </div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="http://www.iheima.com/" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-14.jpg')} />
                </a>
              </div>
            </Col>

            <Col xs={{ span: 12}} sm={{ span: 8}} md={{ span: 6}} lg={{ span: 4}}>
              <div className="item">
                <a href="http://www.dji.com/cn" target="_blank">
                  <img src={require('../../common/image/合作伙伴logo/合作伙伴-15.jpg')} />
                </a>
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    </div>;
  }
}
