import React from 'react'

function Component1({detail}) {
  return (
    <>
      <div className="container">
      <div className='p-2 fw-bold text-dark'>{detail.name}</div>
      <div className='p-2 fw-bold text-primary'>{detail.age}</div>
      <div className='p-2 fw-bold text-danger'>{detail.phone}</div>
      </div>
    </>
  )
}

export default Component1
