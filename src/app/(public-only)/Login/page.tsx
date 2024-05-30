"use client"
import React from 'react'
import Login from './login'

const page = () => {
  return (
    <div>
    <Login initialEmail={""} initialPassword={""} />
    </div>
  )
}

export default page