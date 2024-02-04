import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {id} = useParams()
  return (
    <div className='bg-orange-400 text-white text-3xl p-4 text-center'>User :{id} </div>
  )
}
