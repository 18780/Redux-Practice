import React, { useState } from 'react'
import { login } from '../Redux/action/authAction'
import {useDispatch} from "react-redux"
const Login = () => {
  let [name ,setName]= useState("")
  let [email ,setEmail]= useState("")
const loginbtn=_=>{
  console.log(name,email)
  

}
let dispatch = useDispatch()
dispatch(login({name , email}))
  return (
    <div className='cv'>
      <h1>SignUp</h1>
      <input type="text"
      value={name}
      onChange={(e)=>{setName(e.target.value)}}
       placeholder='Name' /><br />
      <input type="email"
      value={email}
      onChange={(e)=>{setEmail(e.target.value)}}

       placeholder='Email' /><br />
<button className='b' onClick={loginbtn}>login</button>
    </div>
  )
}

export default Login
