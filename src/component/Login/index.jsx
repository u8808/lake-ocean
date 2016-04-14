import './index.less'
import React from 'react';
import { Form, Input, Button, Checkbox, Modal } from 'antd';
import Register from './register'
import ChangePassword from './changePassword';

const FormItem = Form.Item;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.displayName = "Login";
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  }

  render() {
    const { getFieldProps } = this.props.form;
    return <div className="login">
      <Form onSubmit={this.handleSubmit}>

        <FormItem style={{marginBottom: 10}}>
          <Input placeholder="用户名" {...getFieldProps('userName')} />
        </FormItem>

        <FormItem style={{marginBottom: 5}}>
          <Input type="password" placeholder="密码" {...getFieldProps('password')} />
        </FormItem>

        <FormItem style={{marginBottom: 5}}>
          <Register  />
          <ChangePassword />
        </FormItem>
        <Button type="primary" htmlType="submit" style={{width: "100%", backgroundColor: "#cc0066", border: "none"}}>登录</Button>
      </Form>

      <div className="otherWays">
        可以使用以下方式登陆:
        <p className="logo">
          <a href=""><img src={require('../../common/image/share_01.png')} width="24" alt=""/></a>
          <a href=""><img src={require('../../common/image/share_03.png')} width="24" alt=""/></a>
          <a href=""><img src={require('../../common/image/share_05.png')} width="24" alt=""/></a>
        </p>
      </div>

    </div>;
  }
}

Login = Form.create()(Login);

export default Login;
