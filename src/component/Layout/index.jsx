import './index.less';
import React from 'react';
import { Row, Col, Breadcrumb } from 'antd';
import Login from '../Login';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Layout';
  }
  render() {
    const routes = this.props.routes;
    const breadCrumbs = [];
    for (let i=0; i<routes.length; i++) {
      let crumb = "";
      for (let j=0; j<=i; j++) {
        crumb += routes[j].path;
      }
      breadCrumbs[i] = <Breadcrumb.Item key={crumb} href={crumb}>{routes[i].breadcrumbName}</Breadcrumb.Item>;
    }

    return <div className="layout">
      <Row>
        <Col xs={{ span: 4}} sm={{ span: 4}} md={{ span: 4}} lg={{ span: 4}}>
          <div className="login">
            <Login />
          </div>
        </Col>

        <Col xs={{ span: 16}} sm={{ span: 16}} md={{ span: 16}} lg={{ span: 16}}>
          <Breadcrumb separator=">">
            {breadCrumbs}
          </Breadcrumb>
          { this.props.children }
        </Col>
      </Row>
    </div>;
  }
}

export default Layout;
