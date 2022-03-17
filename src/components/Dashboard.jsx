import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOutAction } from '../Redux/action/authAction'
const Dashboard = () => {
  const {name1 ,email1} = useSelector(
      (state) =>state.loginReducer
      )
      const  dispatch=useDispatch()
  const logOut=_=>{
      dispatch(logOutAction())
  }   
  return <div>
      <h1>userName  : {name1 }</h1>
      <h1>userEmail : {email1 }</h1>
<button onClick={logOut}>logout</button>
    </div>
  
}

export default Dashboard
