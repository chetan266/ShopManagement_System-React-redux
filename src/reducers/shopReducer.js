import { FILTER_SHOPS, UPDATE_SHOP_LIST } from "../actions/types"

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SHOP_LIST:
      return action.payload
    case FILTER_SHOPS:
      return action.payload
    default:
      return state
  }
}
