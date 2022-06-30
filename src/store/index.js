import { useContext } from "react"
import { createContext } from "react"
import LoginStore from "./loginStore"
import UserStore from "./userStore"


class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()
  }
}

const rootStore = new RootStore()
const context = createContext(rootStore)
const useStore = () => useContext(context)

export { useStore }