import React from 'react'

export const Post = ({post}) => {
  return (
    <div>
      <ul>
        {post.map(item => {
          return <li key={item.id}>
            <img style={{width:"200px"}} src={item.avatar} alt="image" />
            <h3>{item.name}</h3>
            <p>{item.message}</p>
          </li>
        })}
        </ul>
    </div>
  )
}
