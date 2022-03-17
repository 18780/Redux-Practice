import actionType from "../Reducer/constant"

const login =(data)=>{
    
    return(dispatch)=>{
        
        dispatch({
            type :actionType.USER_LOGIN,
            payload :data
        })
    }
}
const logOutAction=_=>{
    return(dispatch)=>{
        console.log("hi")
        dispatch({
            type : actionType.USER_LOGOUT
        })
    }
}
export {login , logOutAction}