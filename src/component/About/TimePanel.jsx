import './index.less';
import React from 'react';
import { Timeline } from 'antd';

class TimePanel extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'TimePanel';
  }
  render() {

    return <div className="timePanel">
      <Timeline pending={<a href="#">查看更多</a>}>
        <Timeline.Item color="green">春浪音乐节 2016-06-05</Timeline.Item>
        <Timeline.Item color="green">2016“珐伊杯”国际帆船大奖赛 2016-06-06</Timeline.Item>
        <Timeline.Item color="red">中国航海博物馆开放日 2016-06-07</Timeline.Item>
        <Timeline.Item>2016年上海市青少年建筑模型锦标赛 2016-06-08</Timeline.Item>
        <Timeline.Item>唐代中国的海外交往——以印尼勿里洞沉船为例 2016-06-09</Timeline.Item>
        <Timeline.Item>二战期间盟军中的中国海员 2016-06-10</Timeline.Item>
        <Timeline.Item>二战期间盟军中的中国海员 2016-06-11</Timeline.Item>
      </Timeline>
    </div>;
  }
}

export default TimePanel;
