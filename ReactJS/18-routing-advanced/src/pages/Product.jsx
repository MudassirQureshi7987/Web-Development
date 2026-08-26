import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold' to='/product/men'>
          Men
        </Link>

        <Link className='text-xl font-semibold' to='/product/women'>
          Women
        </Link>
      </div>

      <h1>Product Page</h1>
    </div>
  )
}

export default Product