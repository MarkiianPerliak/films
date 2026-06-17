import React from 'react'

export const PostForm = ({addpost}) => {
    const Submit = (i) => {
        i.preventDefault()
        const name = i.currentTarget.elements.name.value
        const text = i.currentTarget.elements.message.value
        const message = {
            "name": name,
            "avatar": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/71.jpg",
            "message": text,
            "id": "100"
        }
        addpost(message)
    }
  return (
    <div>
        <form onSubmit={Submit}>
            <input placeholder='Name' type="text" name="name" id="" />
            <input placeholder='Message' type="text" name="message" id="" />
            <button type='submit'>Send</button>
        </form>
    </div>
  )
}
