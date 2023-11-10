import React from 'react'
import {Link} from "react-router-dom"
import "./Card.css"
const Card = () => {
  return (
    <div className="card-container">
      <div className='card '>
        <img src='https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='hello ?'/>
        <div className="overlay text-center ">
      <div className="  mb-1"><h1 className='font-bold'>Circuit Design</h1></div>
        <p className='px-2 py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora consequatur, odit dolor porro ratione quos! Accusamus quaerat eligendi quis et aliquam fuga, doloribus blanditiis numquam repellat molestiae repellendus ad id dolor pariatur, impedit veritatis </p>
      </div>     
      </div>
      <div className=" flex justify-evenly mt-4 ">
        <Link to="/registration"><button className='btn' >Register</button></Link>
        <Link to="/electrical"><button className='btn' >Explore</button></Link>
      </div>
    </div>
  )
}

export default Card