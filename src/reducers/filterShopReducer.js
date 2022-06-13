import { SHOW_FILTER, CLOSE_FILTER } from "../actions/types"
const initialState = false
export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FILTER:
      return true
    case CLOSE_FILTER:
      return false
    default:
      return state
  }
}
