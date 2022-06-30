import { http } from '@/utils'
import { makeAutoObservable } from 'mobx'
import { setToken, getToken, removeToken } from '@/utils'

class LoginStore {
  token = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }
  doLogin = async ({ mobile, code }) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    })
    this.token = res.data.token
    setToken(this.token)
  }
  doLogout = () => {
    this.token = ''
    removeToken()

  }

}

export default LoginStore 