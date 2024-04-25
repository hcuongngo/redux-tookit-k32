import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


function ProductDetail() {
  const { id } = useParams()
  console.log('id', id)
  const dispatch = useDispatch()
  const { product } = useSelector(state => state.product)
  const fetchProductDetail = async () => {
    try {
      
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail