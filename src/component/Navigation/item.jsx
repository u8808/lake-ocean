import React from 'react';
import { Col } from 'antd';
import { Link } from 'react-router';


class Item extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Item';
  }

  render() {
    const itemStyle = {
      backgroundColor: "#"+this.props.bgColor
    };

    return (
      <Link className="item" style={itemStyle} to={this.props.route}>
        {this.props.name}
      </Link>
    );
  }
}

export default Item;
