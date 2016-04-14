import './index.less';
import React from 'react';
import { Row, Col, Pagination } from 'antd';

import Item from './Item';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Content';
  }
  render() {

    const newsItem = {
      title: '新版5澳元纸币遭吐槽 被指像“呕吐物”',
      bref: '新版5澳元纸币以粉色为主色调，辅以紫色色块和金合欢花等图案。澳储备银行行长格伦·史蒂文斯说，这一设计是向澳大利亚本土原生花草“致敬”....'
    }

    return <div className="content">
      <Row type="flex" justify="center">
        <Col xs={{ span: 18}} sm={{ span: 18}} md={{ span: 18}} lg={{ span: 18}}>
          <div className="newsList">
            <Item title={newsItem.title} bref={newsItem.bref} />
            <Item title={newsItem.title} bref={newsItem.bref} />
            <Item title={newsItem.title} bref={newsItem.bref} />
            <Item title={newsItem.title} bref={newsItem.bref} />
            <Item title={newsItem.title} bref={newsItem.bref} />
            <Item title={newsItem.title} bref={newsItem.bref} />
            <Item title={newsItem.title} bref={newsItem.bref} />
            <Item title={newsItem.title} bref={newsItem.bref} />
            <Item title={newsItem.title} bref={newsItem.bref} />
            <Item title={newsItem.title} bref={newsItem.bref} />
          </div>
          <div className="">
            <Pagination size="small" total={50} showSizeChanger showQuickJumper />
          </div>
        </Col>
      </Row>
    </div>;
  }
}

export default Content;
