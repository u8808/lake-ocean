import './index.less';
import React from 'react';
import { Table, Icon } from 'antd';

class TablePanel extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'TablePanel';
  }
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'key'
    }, {
      title: '类型',
      dataIndex: 'type'
    }, {
      title: '名称',
      dataIndex: 'name'
    }, {
      title: '时间',
      dataIndex: 'date'
    }, {
      title: '地点',
      dataIndex: 'address'
    }];

    const data = [{
      key: '1',
      type: '娱乐',
      name: '春浪音乐节',
      time: '4.30-5.1',
      address: '西岛'
    },{
      key: '2',
      type: '竞赛',
      name: '016“珐伊杯”国际帆船大奖赛',
      time: '5.12-15',
      address: '滴水湖'
    },{
      key: '3',
      type: '娱乐',
      name: '春浪音乐节',
      time: '4.30-5.1',
      address: '西湖区湖底公园1号'
    },{
      key: '4',
      type: '娱乐',
      name: '春浪音乐节',
      time: '4.30-5.1',
      address: '西湖区湖底公园1号'
    },{
      key: '5',
      type: '娱乐',
      name: '春浪音乐节',
      time: '4.30-5.1',
      address: '西湖区湖底公园1号'
    },{
      key: '6',
      type: '娱乐',
      name: '春浪音乐节',
      time: '4.30-5.1',
      address: '西岛'
    },{
      key: '7',
      type: '竞赛',
      name: '016“珐伊杯”国际帆船大奖赛',
      time: '5.12-15',
      address: '滴水湖'
    },{
      key: '8',
      type: '娱乐',
      name: '春浪音乐节',
      time: '4.30-5.1',
      address: '西湖区湖底公园1号'
    },{
      key: '9',
      type: '娱乐',
      name: '春浪音乐节',
      time: '4.30-5.1',
      address: '西湖区湖底公园1号'
    },{
      key: '10',
      type: '娱乐',
      name: '春浪音乐节',
      time: '4.30-5.1',
      address: '西湖区湖底公园1号'
    }];

    const pagination = {
      total: data.length,
      showSizeChanger: true,
      onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
      },
      onChange(current) {
        console.log('Current: ', current);
      }
    };

    return <div className="table">
      <Table columns={columns} dataSource={data} pagination={pagination} />
    </div>;
  }
}

export default TablePanel;
