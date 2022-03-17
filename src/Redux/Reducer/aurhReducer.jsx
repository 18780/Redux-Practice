import actionType from "./constant"

let INITAIL_STATE ={
userName:"",
userEmail:""
}
const loginReducer=(state = INITAIL_STATE ,action)=>{
if(action.type === actionType.USER_LOGIN){
    return{
        ...state,
        name1 :action.payload.name,
        email1 :action.payload.email,

    }
}
else if(action.type ===actionType.USER_LOGOUT){
    return{
        ...state,
        name1:"",
        email1:""
    }
}
else{
    return state
}
}
// const logOut=(state = INITAIL_STATE ,action)=>{
// switch(action.type){
//     case actionType.USER_LOGOUT:
//         return{
//             ...state,
//             name1:"",
//             email1:""
//         }
//         default:
//             return state
// }
// }
export {loginReducer }