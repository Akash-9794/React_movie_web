import React from 'react'
import noimage from "../../../public/noimage.jpg"
import loader from "../../../public/circle.gif"
const NotFound = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center relative'>
      <img className='h-1/2 ' src={loader} alt="loder" />
    </div>
  )
}

export default NotFound
