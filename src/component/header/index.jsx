import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './style'
const Header = () => {
  return (
    <Wrapper>
        {/* <h1>I am {user.name.split(" ")[0][0] + user.name.split(" ")[1][0]}</h1> */}
        <nav>
          <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/cover">Cover</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/productForm">Add Product</Link></li>
        <li><Link to="/user">Add Users</Link></li>
        <li><Link to="/login">LogIn</Link></li>
        </ul>
        </nav>
    </Wrapper>
  )
}

export default Header
