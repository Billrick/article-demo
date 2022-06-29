import { useContext } from "react"
import { createContext } from "react"
import LoginStore from "./loginStore"


class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
  }
}

const rootStore = new RootStore()
const context = createContext(rootStore)
const useStore = () => useContext(context)

export { useStore }