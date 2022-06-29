
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Layout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
