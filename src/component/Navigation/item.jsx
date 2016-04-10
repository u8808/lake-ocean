import React from 'react';
import { Col } from 'antd';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Item';
  }

  render() {
    const itemStyle = {
      backgroundColor: "#"+this.props.bgColor
    };

    return <Col xs={{ span: 4}} sm={{ span: 4}} md={{ span: 4}} lg={{ span: 4}}>
      <a className="item" style={itemStyle}>
        {this.props.name}
      </a>
    </Col>;
  }
}

export default Item;
