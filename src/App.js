
import './App.css'
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'//BrowserRouter,
import Home from './pages/home'
import Article from './pages/article'
import Publish from './pages/publish'
import { history } from './utils'

//carco webpack配置调整包 需要在根路径添加craco.config.js文件
//craco 调整完配置后 , 调整package.json命令脚本
// "scripts": {
//   "start": "craco start",
//   "build": "craco build",
//   "test": "craco test",
//   "eject": "react-scripts eject"
// },

//添加网上面配置后 会丢失文件路径提示
//所以需要在项目根路径添加jsconfig.js , 如果有tsconfig.js 则删除它
// {
//   "compilerOptions": {
//     "baseUrl": "./",
//     "paths": {
//       "@/*": [
//         "src/*"
//       ]
//     }
//   }
// }

//pages  
import Login from '@/pages/login'
import Layout from '@/pages/layout'
import AuthComponent from './components/AuthComponent'

function App () {
  return (
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<AuthComponent><Layout /></AuthComponent>}>
            <Route index element={<Home />}></Route>
            <Route index path='/article' element={<Article />}></Route>
            <Route index path='/publish' element={<Publish />}></Route>
          </Route>
        </Routes>
      </div>
    </HistoryRouter>
  )
}

export default App
