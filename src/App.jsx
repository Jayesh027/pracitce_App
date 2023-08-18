import { BrowserRouter, Route, Routes } from "react-router-dom"
import Counter from "./component/counter"
import Cover from "./component/cover"
import Footer from "./component/footer"
import Header from "./component/header"
import Products from "./component/products"
import ProductForm from "./component/productForm"
import { useState } from "react"
import User from "./component/user"
import LogIn from "./component/logIn"
import Users from "./component/users"
import LogInData from "./component/logIn/loginData"

export const App = () => {
  const [products , setProducts] = useState([])
  const addProduct = (product) =>{
    setProducts([...products , product])
  }

  return(
    <BrowserRouter>
      <Header />
      {/* <Cover />
      <Counter /> */}
    <Routes>
      <Route path="/" element = {<LogIn />} />
      <Route path="/home" element = {<h1>HOME</h1>} />
      <Route path="/counter" element = {<Counter />} />
      <Route path="/cover" element = {<Cover />} />
      <Route path="/products" element = {<Products products = {products} />} />
      <Route path="/productForm" element = {<ProductForm addProduct = {addProduct}/>} />
      <Route path="/user" element = {<><User /><Users /></>} /> 
      <Route path="/login" element = {<><LogIn /><LogInData /></>} />
    </Routes>

      <Footer />
      </BrowserRouter>
  )
}