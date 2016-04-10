import './index.less'
import '../Header/index.less'
import React from 'react';
import { Form, Input, Button, Checkbox, Modal } from 'antd';
import Register from './register'

const FormItem = Form.Item;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerModalVisible: false
    }
    this.displayName = "Login";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showRegisterModal = this.showRegisterModal.bind(this);
    this.handleRegisterModalOk = this.handleRegisterModalOk.bind(this);
    this.handleRegisterModalCancel = this.handleRegisterModalCancel.bind(this);
  }

  showRegisterModal() {
    this.setState({
      registerModalVisible: true
    });
  }

  handleRegisterModalOk() {
    console.log('点击了确定');
    this.setState({
      registerModalVisible: false
    });
  }

  handleRegisterModalCancel(e) {
    console.log(e);
    this.setState({
      registerModalVisible: false
    });
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
          <p className="ant-form-text">
            <a onClick={this.showRegisterModal} style={{color: "red"}}>快速注册</a>
            <Modal title="快速注册" visible={this.state.registerModalVisible}
               onOk={this.handleRegisterModalOk} onCancel={this.handleRegisterModalCancel}>
              <Register {...this.props} />
            </Modal>
          </p>
          <p className="ant-form-text">
            <a href="" style={{color: "black"}}>忘记密码</a>
          </p>
        </FormItem>
        <Button type="primary" htmlType="submit" style={{width: "100%"}}>登录</Button>
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
