import { combineReducers } from "redux";
import item from "./item/reduce"
import page from "./page/reduce"

export default combineReducers({
     item,
     page
});




