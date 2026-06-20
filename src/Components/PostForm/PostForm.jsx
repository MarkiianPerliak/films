import React from 'react'
import { postAPI } from '../../API/Post/PostApi'
export const PostForm = () => {
    const Submit = (i) => {
        i.preventDefault()
        const name = i.currentTarget.elements.name.value
        const text = i.currentTarget.elements.message.value
        const message = {
            "name": name,
            "avatar": "https://avatars.githubusercontent.com/u/47180288",
            "message": text
        }
        postAPI(message)
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
