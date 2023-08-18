import React from 'react'

const Products = ({products}) => {
  return (
    <div>
      {
        products.map((product) => <div>
        <div>
           Product = {product.title}
        </div>
        <div>
           Price = {product.price}
        </div>
        </div>)
        }
    </div>
  )
}

export default Products
