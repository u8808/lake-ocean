import './index.less';
import React from 'react';
import { Row, Col } from 'antd';

export default class Cooperation extends React.Component {
  render() {

    return <div className="cooperation" id="cooperation">
      <Row gutter={16}>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h1>全程冠名合作权益</h1>
          <div className="image">
            <img src={require('../../common/image/商务合作/全程冠名合作权益.png')} alt=""/>
          </div>
        </Col>

        <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }}>
          <div className="instruction">
            <div style={{display: "flex", justifyContent: "center"}}>
              <h3 className="title">影响广泛</h3>
            </div>
            <p className="body">
              此次海洋季活动全称2个月，影响上海及长三角地区千万级一线人口，覆盖企业领导、相关政府机构、学术研究机构、各大高校及广大市民群体等；由于活动的长期性,宣传的人次及宣传深度都非常高，因此企业形象和品牌形象能更加深入到这些专业及大众群体当中；
            </p>
          </div>
        </Col>

        <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }}>
          <div className="instruction">
            <div style={{display: "flex", justifyContent: "center"}}>
              <h3 className="title">总冠名宣传</h3>
            </div>
            <p className="body">
              战略合作企业享有活动的总冠名宣传权,活动所有出现的名称都将是带有战略合作企业的 ““XXX”首届上海滴水湖海洋季；
            </p>
          </div>
        </Col>

        <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }}>
          <div className="instruction">
            <div style={{display: "flex", justifyContent: "center"}}>
              <h3 className="title">持续影响</h3>
            </div>
            <p className="body">
              上海滴水湖海洋季作为上海地区以海洋为主题的节庆活动，将会受到越来越多的媒体关注,战略合作企业将同时将作为事件营销的典范案例被关注和记录,这是一个以实践为主体的长期的间接宣传效果。
            </p>
          </div>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title bule">品牌露出</h3>
          <p className="body">
            在所有活动开场前、期间，插播30秒企业宣传片
            <br/>
            新闻发布会现场、会议现场安排相关媒体对战略合作伙伴领导进行专访
          </p>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title bule">媒体宣传</h3>
          <p className="body">
            所有协办媒体上发布的活动预告报纸广告、杂志广告、网站广告上全部出现战略合作伙伴的 LOGO
            <br/>
            官方自媒体平台显著位置出现战略合作伙伴品牌信息，并将受众引流到企业自媒体当中
          </p>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title bule">品牌背书</h3>
          <p className="body">
            新闻发布会和活动现场主持人对战略合作单位口播鸣谢
            <br/>
            新闻发布会现场、会议现场、媒体采访现场主背景板以及活动全程物料等均体现战略合作企业名称或LOGO，并可在现场进行企业宣传
            <br/>
            安排战略合作单位领导或企业指定人员为活动颁奖，并与明星选手合影留念
            <br/>
            战略合作伙伴代表在活动现场及颁奖礼现场主宾显著位置就座
          </p>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title bule">其他</h3>
          <p className="body">
            赠送现场活动VIP入场卷2000张
            <br/>
            赠送滴水湖一日游套票2000张
          </p>
        </Col>



        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h1>冠名商参与项目合作权益</h1>
          <div className="image">
            <img src={require('../../common/image/商务合作/冠名商参与项目合作权益.png')} alt=""/>
          </div>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h2 className="instro">冠名合作企业享有板块/项目的冠名权,活动出现的名称都将带有冠名合作企业的名称和logo</h2>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title deepGreen">媒体宣传</h3>
          <p className="body">
            项目期间所有协办媒体上发布的活动报纸广告、杂志广告、网站广告上出现冠名合作企业的 LOGO
            <br/>
            官方自媒体平台显著位置出现冠名合作伙伴品牌信息，并将受众引流到企业自媒体当中
          </p>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title deepGreen">品牌背书</h3>
          <p className="body">
            新闻发布会和活动现场主持人对冠名合作单位口播鸣谢
            <br/>
            新闻发布会现场、会议现场、媒体采访现场主背景板以及活动全程物料等均体现冠名合作企业名称或LOGO，并可在现场进行企业宣传
            <br/>
            安排冠名合作单位领导或企业指定人员为活动颁奖，并与明星选手合影留念
            <br/>
            冠名合作伙伴代表在活动现场及颁奖礼现场主宾显著位置就座
          </p>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title deepGreen">其他</h3>
          <p className="body">
            赠送现场活动VIP入场卷100张
            <br/>
            赠送滴水湖一日游套票100张
          </p>
        </Col>




        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h1>冠名商自筹项目合作权益</h1>
          <div className="image">
            <img src={require('../../common/image/商务合作/冠名商自筹项目合作权益.png')} alt=""/>
          </div>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h2 className="instro">冠名合作企业享有板块/项目的冠名权，活动出现的名称都将带有冠名合作企业的名称和logo</h2>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title lightGreen">媒体宣传</h3>
          <p className="body">
            项目期间所有协办媒体上发布的活动报纸广告、杂志广告、网站广告上出现冠名合作企业的 LOGO
            <br/>
            官方自媒体平台显著位置出现冠名合作伙伴品牌信息，并将受众引流到企业自媒体当中
          </p>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title lightGreen">其他</h3>
          <p className="body">
            赠送现场活动VIP入场卷50张
            <br/>
            赠送滴水湖一日游套票50张
          </p>
        </Col>



        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h1>赞助商参与项目合作权益</h1>
          <div className="image">
            <img src={require('../../common/image/商务合作/赞助商参与项目合作权益.png')} alt=""/>
          </div>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h2 className="instro">赞助项目的显著位置出现赞助商名称及LOGO</h2>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title yellow">媒体宣传</h3>
          <p className="body">
            项目期间所有协办媒体上发布的活动报纸广告、杂志广告、网站广告上出现冠名合作企业的 LOGO
            <br/>
            官方自媒体平台显著位置出现赞助合作伙伴品牌信息，并将受众引流到企业自媒体当中
          </p>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title yellow">品牌背书</h3>
          <p className="body">
            新闻发布会和活动现场主持人对赞助合作单位口播鸣谢
            <br/>
            新闻发布会现场、会议现场、媒体采访现场主背景板以及活动全程物料等均体现赞助合作企业名称或LOGO，并可在现场进行企业宣传
            <br/>
            安排冠名合作单位领导或企业指定人员为活动颁奖，并与明星选手合影留念
            <br/>
            赞助单位代表在活动现场及颁奖礼现场主宾显著位置就座
          </p>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title yellow">其他</h3>
          <p className="body">
            赠送现场活动VIP入场卷100张
            <br/>
            赠送滴水湖一日游套票100张
          </p>
        </Col>


        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h1>赞助商自筹项目合作权益</h1>
          <div className="image">
            <img src={require('../../common/image/商务合作/赞助商参与项目合作权益2.png')} alt=""/>
          </div>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h2 className="instro">赞助项目的显著位置出现赞助商名称及LOGO</h2>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title grown">媒体宣传</h3>
          <p className="body">
            项目期间所有协办媒体上发布的活动报纸广告、杂志广告、网站广告上出现冠名合作企业的 LOGO
            <br/>
            官方自媒体平台显著位置出现赞助合作伙伴品牌信息，并将受众引流到企业自媒体当中
          </p>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title grown">其他</h3>
          <p className="body">
            赠送现场活动VIP入场卷50张
            <br/>
            赠送滴水湖一日游套票50张
          </p>
        </Col>


        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h1>具名赞助合作权益</h1>
          <div className="image">
            <img src={require('../../common/image/商务合作/具名赞助合作权益.png')} alt=""/>
          </div>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h2 className="instro">赞助项目的显著位置出现赞助商名称及LOGO</h2>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title red">媒体宣传</h3>
          <p className="body">
            项目期间所有协办媒体上发布的活动报纸广告、杂志广告、网站广告上出现冠名合作企业的 LOGO
            <br/>
            官方自媒体平台显著位置出现赞助合作伙伴品牌信息，并将受众引流到企业自媒体当中
          </p>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title red">品牌背书</h3>
          <p className="body">
            新闻发布会和活动现场主持人对赞助合作单位口播鸣谢
            <br/>
            赞助单位代表在活动现场及颁奖礼现场主宾显著位置就座
          </p>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
          <h3 className="title red">其他</h3>
          <p className="body">
            赠送现场活动VIP入场卷80张
            <br/>
            赠送滴水湖一日游套票80张
          </p>
        </Col>


      </Row>
    </div>;
  }
}
