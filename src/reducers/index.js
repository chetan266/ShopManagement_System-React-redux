import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import shopReducer from "./shopReducer"
import addShopReducer from "./addShopReducer"
import editShopReducer from "./showEditReducer"
import filterShopReducer from "./filterShopReducer"

export default combineReducers({
  form: formReducer,
  shops: shopReducer,
  add: addShopReducer,
  edit: editShopReducer,
  filter_: filterShopReducer,
})
