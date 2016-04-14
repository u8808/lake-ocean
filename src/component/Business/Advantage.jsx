import './index.less';
import React from 'react';
import { Row, Col } from 'antd';

export default class Advantage extends React.Component {
  render() {

    return <div className="advantage" id="advantage">
      <Row gutter={16}>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <div className="image">
            <img src={require('../../common/image/商务合作/优势-01.png')} alt=""/>
          </div>
        </Col>

        <Col xs={{ span: 12}} sm={{ span: 12}} md={{ span: 12}} lg={{ span: 12}}>
          <div>
            <h2 className="title">产业聚集</h2>
            <p className="body">
              作为上海发展海洋经济的重要阵地，近年来临港已经聚集了一大批从事高端海洋船舶、海洋工程装备等优秀企业。
            </p>
          </div>

          <div>
            <h2 className="title">政策扶持</h2>
            <p className="body">
              国家及上海市委市政府对临港大力发展海洋经济、打造上海乃至长三角地区的海洋名片给予很多支持，海洋节也将得到政府方面的肯定和扶持。
            </p>
          </div>

          <div>
            <h2 className="title">环境优美</h2>
            <p className="body">
              上海临港新城，滨临东海，气候宜人；国家级水利风景区-滴水湖环绕城区，水波浩淼、清澈见底；周边植被密布，森林覆盖率高。
            </p>
          </div>

        </Col>

        <Col xs={{ span: 12}} sm={{ span: 12}} md={{ span: 12}} lg={{ span: 12}}>
          <div>
            <h2 className="title">交通便利</h2>
            <p className="body">
              距浦东国际机场路程为12公里，大约半小时车程，轨道交通16号线滴水湖站，沪芦高速A2、两港大道、东海二桥高速公路、A30公路、申港大道均由此通过
            </p>
          </div>

          <div>
            <h2 className="title">人气项目</h2>
            <p className="body">
              上海迪士尼乐园距离临港不到25分钟的车程；海昌极地海洋世界落户临港，正在动工；上海唯一一个以航海为主题的博物馆——航海博物馆
            </p>
          </div>


        </Col>
      </Row>
    </div>;
  }
}
