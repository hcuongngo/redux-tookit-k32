import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function ProductList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.product)
  
  
  
  return (
    <div>ProductList</div>
  )
}

export default ProductList