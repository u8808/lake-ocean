import './index.less';
import React from 'react';

export default class HotItem extends React.Component {
  render() {
    
    return <div className="hotItem" >
      <img src={this.props.img} width="100%" alt=""/>
      <p className="itemTitle">
        {this.props.title}
      </p>
    </div>;
  }
}
