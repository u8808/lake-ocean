import './index.less';
import React from 'react';
import { Row, Col } from 'antd';

import Category from './Category';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Content';
  }
  render() {

    return <div className="content">
      <Category name="庆典"></Category>
      <Category name="会议"></Category>
      <Category name="科普"></Category>
      <Category name="竞赛"></Category>
      <Category name="展览"></Category>
      <Category name="娱乐"></Category>
    </div>;
  }
}

export default Content;
