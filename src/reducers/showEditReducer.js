import { SHOW_EDIT,CLOSE_EDIT } from "../actions/types";
const initialState = null
export default (state = initialState,action)=>{
    switch(action.type){
        case SHOW_EDIT :
            return action.payload
        case CLOSE_EDIT:
            return null
        default:
            return state;
    }
}