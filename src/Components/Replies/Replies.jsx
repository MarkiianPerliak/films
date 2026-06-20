import React from 'react'
import { useParams } from 'react-router-dom'

export const Replies = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>Replies</div>
  )
}
