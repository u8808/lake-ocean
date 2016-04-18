import './index.less';
import React from 'react';
import ReactPlayer from 'react-player';
import { Row, Col } from 'antd';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
// import TweenOne from 'rc-tween-one';
import Navigation from '../Navigation';
import Login from '../Login';
import HotItem from './HotItem';

export default class Hot extends React.Component {
  render() {

    const hots = [{title: '“临港杯”2016寻找合伙人创新创业大赛',
      img: require('../../common/image/index_hot_01.jpg')},
      {title: '“海洋杯”2016_pds羽毛球邀请赛',
        img: require('../../common/image/index_hot_02.jpg')},
      {title: '万米级深潜器科考船——“张謇”号开放日',
        img: require('../../common/image/index_hot_03.jpg')},
      {title: '2016“珐伊杯”国际帆船大奖赛——临港站',
        img: require('../../common/image/index_hot_04.jpg')}];

    return <div className="page0">
      <ScrollElement scrollName="page0">
        <div>
        <Navigation backImage = {require('../../common/image/index.jpg')} />
      </div>
        <div className="hot">
          <Row>
            <Col xs={{ span: 4}} sm={{ span: 4}} md={{ span: 4}} lg={{ span: 4}}>
              <div className="login">
                <Login />
              </div>
            </Col>

            <Col xs={{ span: 16}} sm={{ span: 16}} md={{ span: 16}} lg={{ span: 16}}>
              <Row gutter={8}>

                <Col xs={{ span: 6}} sm={{ span: 6}} md={{ span: 6}} lg={{ span: 6}}>
                  <div className="item">
                    <HotItem title={hots[0].title} img={hots[0].img} />
                  </div>

                  <div className="item">
                    <HotItem title={hots[2].title} img={hots[2].img} />
                  </div>
                </Col>

                <Col xs={{ span: 6}} sm={{ span: 6}} md={{ span: 6}} lg={{ span: 6}}>
                  <div className="item">
                    <HotItem title={hots[1].title} img={hots[1].img} />
                  </div>

                  <div className="item">
                    <HotItem title={hots[3].title} img={hots[3].img} />
                  </div>
                </Col>

                <Col xs={{ span: 12}} sm={{ span: 12}} md={{ span: 12}} lg={{ span: 12}}>
                  <div className="video">
                    <video width="100%" height="100%" controls="controls">
                      <source src="" type="video/mp4" />
                    </video>
                  </div>
                </Col>

              </Row>
            </Col>
          </Row>
        </div>
      </ScrollElement>
    </div>;
  }
}
