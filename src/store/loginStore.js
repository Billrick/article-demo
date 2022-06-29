import { http } from '@/utils'
import { makeAutoObservable } from 'mobx'

class LoginStore {
  token = ''
  constructor() {
    makeAutoObservable(this)
  }
  doLogin = async ({ mobile, code }) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    })
    this.token = res.data.data.token
    console.log(res)
  }

}

export default LoginStore 