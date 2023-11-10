import React from 'react'
import Card from './Card'
const EventCards = () => {


  return (
    <div>
     <h1 className='text-6xl text-center my-10 text-white'>EventCards</h1>
      <br />
      <div className='container flex justify-center flex-wrap flex-1'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default EventCards