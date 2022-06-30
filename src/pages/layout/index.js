import { Layout as AntLayout, Menu, message, Popconfirm } from 'antd'
import { observer } from 'mobx-react-lite'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useStore } from '@/store'

const { Header, Sider } = AntLayout

function Layout () {
  const { pathname } = useLocation()
  const { userStore, loginStore } = useStore()
  const navigate = useNavigate()
  //副作用调用
  useEffect(() => {
    userStore.getUserInfo()
  }, [userStore])

  const confirmExit = (e) => {
    loginStore.doLogout()
    message.success('退出登录成功!')
    navigate('/login')
  }

  return (
    <AntLayout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userStore.userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={confirmExit}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <AntLayout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            // 默认选中 从当前地址中获取pathname
            defaultSelectedKeys={pathname}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />} key="/">
              <Link to={"/"}>数据概览</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="/article">
              <Link to={"/article"}>内容管理</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="/publish">
              <Link to={"/publish"}>发布文章</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <AntLayout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </AntLayout>
      </AntLayout>
    </AntLayout >
  )
}
//监控视图 如果store中的数据发生变化，会通知视图重新渲染
export default observer(Layout)