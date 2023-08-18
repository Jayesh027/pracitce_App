import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Wrapper from './style'

const LogIn = () => {

    const [contact,setNumber] =useState("")
    const [password,setPassword] =useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const login =()=>{
        dispatch({
            type:"LOGIN",
            payload:{contact,password}
        })
    }
    const signIn = () => {
        navigate("/user")
    }

  return (
    <Wrapper>
      <form action="">
      <h1>Login</h1>
      <input type="text"  
        placeholder= "Contact" 
        value = {contact}
        required 
        onChange = { (e) => setNumber(e.target.value)} 
        pattern="[0-9]{10}"/>
      <input type="password"
        placeholder='Enter Password'
        value={password}
        required
        onChange = { (e) => setPassword(e.target.value)}
      />
      <input 
        type="button" 
        value="login" 
        onClick={login}
      />
      
      <p>Are you a new user ?<span onClick={signIn}> Sign In </span></p>
    </form>
    </Wrapper>
  )
}

export default LogIn
