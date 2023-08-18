import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const LogInData = () => {
    const navigate = useNavigate()

  const login = useSelector(state => state.login)
    
  return (
    <div>
       { 
        // login.map( user => <div>{user.name} {user.contact}</div>)
        navigate("/home")
       }
    </div>
  )
}

export default LogInData