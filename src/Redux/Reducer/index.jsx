import {combineReducers} from "redux"
import { loginReducer,  } from "./aurhReducer"
import { Reducer } from "./reducer"

const RootReducer =combineReducers ({
Reducer :  Reducer,
loginReducer : loginReducer,



})

export default RootReducer