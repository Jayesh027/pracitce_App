import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Wrapper from './style'
import { useNavigate } from 'react-router'

const User = () => {
    const [name,setName] = useState("")
    const [contact,setNumber] =useState("")
    const [password,setPassword] =useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const add =()=>{
        dispatch({
            type:"ADD_USER",
            payload:{name,contact,password}
        })
        navigate("/login")
    }

  return (
    <Wrapper>
      <form action="">
    <h1>Sign In </h1>
      <input 
        type="text" 
        placeholder="Name" 
        value = {name}
        required
        onChange = { (e) => setName(e.target.value)} />
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
        value="Add" 
        onClick={add}
      />
      </form>
    </Wrapper>
  )
}

export default User