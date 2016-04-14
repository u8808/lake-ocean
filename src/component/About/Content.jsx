import './index.less';
import React from 'react';
import { Row, Col, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import TablePanel from './TablePanel';
import TimePanel from './TimePanel';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Content';
  }
  render() {

    return <div className="content">
      <Row>
        <Col xs={{ span: 24}} sm={{ span: 24}} md={{ span: 24}} lg={{ span: 24}}>
          <Tabs defaultActiveKey="2">
            <TabPane tab="时间轴" key="1">
              <TimePanel />
            </TabPane>
            <TabPane tab="时间表" key="2">
              <TablePanel />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>;
  }
}

export default Content;
