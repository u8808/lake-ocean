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
      <Category name="庆典" color="FA0D1B"></Category>
      <Category name="会议" color="C8996A"></Category>
      <Category name="科普" color="2073CE"></Category>
      <Category name="竞赛" color="FC9827"></Category>
      <Category name="展览" color="CA0F66"></Category>
      <Category name="娱乐" color="98C941"></Category>
    </div>;
  }
}

export default Content;
