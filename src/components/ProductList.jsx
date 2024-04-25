import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import fakeApi from '../api'
import { setProducts } from '../redux-toolkit/product/productSlice'

function ProductList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.product)
  console.log("products from redux toolkit store", products)

  const fetchProducts = async () => {
    const { data } = await fakeApi().get("")
    console.log("data", data)
    dispatch(setProducts(data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return products.length === 0 ? (<div>Loading...</div>) : (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto',
      gap: 20,
      padding: 20,
      cursor: 'pointer'
    }}>
      {
        products.map((product, index) => {
          const { id, price, category, image, description } = product
          return (
            <div
              onClick={() => {
                navigate(`/${id}`)
              }}
              key={index}
              style={{
                border: '1px solid gray',
                borderRadius: 10,
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <img src={image} style={{
                width: 200,
                height: 200,
              }} alt='product-image' />
              <div>
                <h3>{category}</h3>
                <p>{price}</p>
                <p>{description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductList