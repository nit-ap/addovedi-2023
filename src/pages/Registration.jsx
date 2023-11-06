import React from 'react'
import {Typography} from "antd"

import RegistrationForm from '../components/RegistrationForm'
const Registration = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
<Typography.Title ><p className='text-white'>Registration Form</p></Typography.Title>
<RegistrationForm/>
    </div>
  )
}

export default Registration