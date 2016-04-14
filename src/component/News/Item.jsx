import './index.less';
import React from 'react';
import { Row, Col } from 'antd';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Item';
  }
  render() {
    return <div className="item">
      <p className="title">
        <a>{this.props.title}</a>
      </p>
      <div className="line"></div>
      <p className="bref">
        {this.props.bref}
      </p>
    </div>;
  }
}

export default Item;
