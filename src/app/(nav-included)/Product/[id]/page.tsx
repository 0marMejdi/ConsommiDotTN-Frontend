'use client'
import React from 'react'
import ProductUI from './ProductUI'
import { useParams } from 'next/navigation';

const ProductPage = ({ params }: { params: { id: string } }) => {
    // use QueryParams to get the productid from the url 
    console.log(params.id)
  return (
    <ProductUI productId={params.id}  />
   )
}

export default ProductPage