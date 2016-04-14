import './index.less';
import React from 'react';
import { Row, Col, Card } from 'antd';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Item';
  }
  render() {

    const status = {
      close: <div className="close">活动<br/>回顾</div>,
      doing: <div className="doing">正在<br/>进行</div>,
      open: <div className="open">尚未<br/>开始</div>,
    }

    return <Col xs={{ span: 8}} sm={{ span: 8}} md={{ span: 8}} lg={{ span: 8}}>
      <div className="item">
        <Card style={{ width: "100%" }} bodyStyle={{ padding: 10 }}  >
          <div className="status">
            {status[this.props.status || "open"]}
          </div>
          <p>2016/06/08</p>
          <p>开幕式暨2016上海海洋论坛</p>
          <p style={{textAlign: "right"}}>
            <a href="">详细></a>
          </p>
        </Card>
      </div>
    </Col>;
  }
}

export default Item;
