import './index.less'
import '../Header/index.less'
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

      <div className="others">
        可以使用以下方式登陆:
        <p className="logo">
          <i className="icon iconfont">&#xe604;</i>
          <i className="icon iconfont">&#xe602;</i>
          <i className="icon iconfont">&#xe600;</i>
        </p>
      </div>

    </div>;
  }
}

Login = Form.create()(Login);

export default Login;
