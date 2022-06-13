import "react-datepicker/dist/react-datepicker.css"
import "./App.css"
import "./grid.css"
import { Provider } from "react-redux"
import Header from "./header"
import Shops from "./shoplist"
import store from "../store"
import { getList } from "../actions"
if (localStorage.shopList) {
  store.dispatch(getList())
}
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Shops />
    </Provider>
  )
}

export default App
