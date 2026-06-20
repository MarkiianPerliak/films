import React from 'react'
import { useState, useEffect } from 'react'

import {getAPI} from "../../API/Post/GetApi"

import { PostItem } from '../PostItem/PostItem';


export const Post = () => {
  const [post, setPost] = useState([])

  useEffect(() => {
    getAPI().then(data => setPost(data))
  }, [])
  return (
    <div>
      <ul>
        {post.map(item => {
          return <PostItem key={item.id} item={item}/>
        })}
        </ul>
    </div>
  )
}
