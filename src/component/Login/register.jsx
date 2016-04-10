import React from 'react';
import { Button, Form, Input, Radio } from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

function noop() {
  return false;
}
class Register extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = "Register";
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  getValidateStatus(field) {
    const { isFieldValidating, getFieldError, getFieldValue } = this.props.form;

    if (isFieldValidating(field)) {
      return 'validating';
    } else if (!!getFieldError(field)) {
      return 'error';
    } else if (getFieldValue(field)) {
      return 'success';
    }
  }

  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  }

  userExists(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      setTimeout(() => {
        if (value === 'JasonWood') {
          callback([new Error('抱歉，该用户名已被占用。')]);
        } else {
          callback();
        }
      }, 800);
    }
  }

  checkPass(rule, value, callback) {
    const { validateFields } = this.props.form;
    if (value) {
      validateFields(['rePasswd'], { force: true });
    }
    callback();
  }

  checkPass2(rule, value, callback) {
    const { getFieldValue } = this.props.form;
    if (value && value !== getFieldValue('passwd')) {
      callback('两次输入密码不一致！');
    } else {
      callback();
    }
  }

  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const nameProps = getFieldProps('name', {
      rules: [
        { required: true, min: 5, message: '用户名至少为 5 个字符' },
        { validator: this.userExists },
      ],
    });
    const emailProps = getFieldProps('email', {
      validate: [{
        rules: [
          { required: true },
        ],
        trigger: 'onBlur',
      }, {
        rules: [
          { type: 'email', message: '请输入正确的邮箱地址' },
        ],
        trigger: ['onBlur', 'onChange'],
      }]
    });
    const passwdProps = getFieldProps('passwd', {
      rules: [
        { required: true, whitespace: true, message: '请填写密码' },
        { validator: this.checkPass },
      ],
    });
    const rePasswdProps = getFieldProps('rePasswd', {
      rules: [{
        required: true,
        whitespace: true,
        message: '请再次输入密码',
      }, {
        validator: this.checkPass2,
      }],
    });
    const textareaProps = getFieldProps('textarea', {
      rules: [
        { required: true, message: '真的不打算写点什么吗？' },
      ],
    });
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
    return (
      <Form horizontal form={this.props.form}>
        <FormItem
          {...formItemLayout}
          label="用户名："
          hasFeedback
          help={isFieldValidating('name') ? '校验中...' : (getFieldError('name') || []).join(', ')}>
          <Input {...nameProps} placeholder="用户名" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="账户类型："
          hasFeedback >
          <RadioGroup defaultValue="0">
            <Radio value="0">个人</Radio>
            <Radio value="1">企业</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="密码："
          hasFeedback>
          <Input {...passwdProps} type="password" autoComplete="off"
                                  onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="确认密码："
          hasFeedback>
          <Input {...rePasswdProps} type="password" autoComplete="off" placeholder="两次输入密码保持一致"
                                    onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="手机："
          hasFeedback>
          <Input placeholder="手机号码" />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="邮箱："
          hasFeedback>
          <Input {...emailProps} type="email" placeholder="电子邮箱" />
        </FormItem>


        <FormItem wrapperCol={{ span: 12, offset: 7 }}>
          <Button type="primary" onClick={this.handleSubmit}>确定</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={this.handleReset}>重置</Button>

        </FormItem>
      </Form>
    );
  }
}

Register = createForm()(Register);

export default Register;
