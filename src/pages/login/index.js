import logo from '@/assets/logo.png'
import './index.scss'

import { Card, Form, Input, Checkbox, Button } from 'antd'
//图标
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useStore } from '@/store'



function Login () {
  const { loginStore } = useStore()
  const onFinish = (values) => {
    loginStore.doLogin({ mobile: values.username, code: values.password })
  }
  const onFinishFailed = (error) => {
    console.log(error)
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        <Form
          autoComplete='off'
          initialValues={{
            "isRead": true,
            username: "13000000000",
            password: "246810"
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          labelCol={{ span: 3 }}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item name="isRead" valuePropName="checked">
            <Checkbox >我已阅读并同意 《用户许可须知》</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </div >
  )
}

export default Login