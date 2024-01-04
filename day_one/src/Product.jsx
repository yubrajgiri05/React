import React from 'react'
import imag from '../public/blog1.png'

function Product(props) {
  return (
    <>
      <div className="container m-5">
       <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h4 className='card-title'>{props.price}</h4>
                <p>{props.info.ram}</p>
                <p>{props.info.screen}</p>
            </div>
        </div>

        </div>

    </>
  )
}

export default Product
