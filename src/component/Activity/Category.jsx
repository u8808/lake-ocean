import './../Volunteer/index.less';
import React from 'react';
import { Row, Col } from 'antd';

import Item from './Item';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Category';
  }
  render() {
    const typeStyle = {
      border: "solid 3px #" + this.props.color,
      color: "#" + this.props.color,
    };
    return <Row gutter={24} className="category">
      <Col xs={{ span: 6}} sm={{ span: 6}} md={{ span: 6}} lg={{ span: 6}}>
        <div className="type">
          <div className="name" style={typeStyle}>
            <img className="ico" src={require('../../common/image/icon_categary.png')} alt=""/>
            <p>
              {this.props.name}
            </p>
          </div>
        </div>
      </Col>
      <Col xs={{ span: 18}} sm={{ span: 18}} md={{ span: 18}} lg={{ span: 18}}>
        <Row>
          <Item status = "close" />
          <Item status = "doing" />
          <Item status = "doing" />
          <Item status = "open" />
        </Row>
      </Col>
    </Row>;
  }
}

export default Category;
