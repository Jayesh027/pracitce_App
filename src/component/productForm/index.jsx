import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Wrapper from './style'

const ProductForm = ({addProduct}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState()
    const [PhotoURL, setPhotoURL] = useState("");

    const navigate = useNavigate()

    const add = () => {
        addProduct({
            title : title,
            description : description,
            price : price
        })
        navigate("/products")
    }

  return (
    <Wrapper>
            <form action = "">
              <h1>Add Products</h1>
                <input
                    type = "text"
                    placeholder = "Title"
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)} 
                />
                <input
                    type = "text"
                    placeholder = "Discription"
                    value = {description}
                    onChange = {(e) => setDescription(e.target.value)} 
                />
                <input
                    type = "text"
                    placeholder = "price"
                    value = {price}
                    onChange = {(e) => setPrice(e.target.value)} 
                />
                <input
                    type = "button"
                    value = "Add Product"
                    onClick = {add} 
                    
                />
                <input type="file"
          onChange={(e) =>{
            setPhotoURL(URL.createObjectURL(e.target.files[0]))
          }} />
          <img src={PhotoURL} alt="add photo"/>

            </form>
    </Wrapper>
  )
}

export default ProductForm
