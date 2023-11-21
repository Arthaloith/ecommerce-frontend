import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <div style={{ width: '100%', background: '#efefef', height: '100%' }}>
      <div style={{ width: '1270px', height: '100%', margin: '0 auto' }} >
        <div style={{ marginTop: '20px', backgroundColor: 'white', padding: '20px', textAlign: 'center' }}>
          <h5><span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { navigate('/') }}> HomePage</span> - Product Details</h5>
        </div>
        <ProductDetailsComponent idProduct={id} />
      </div>
    </div>
  )
}

export default ProductDetailsPage