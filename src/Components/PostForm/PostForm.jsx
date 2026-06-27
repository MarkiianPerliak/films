import React from 'react'
import { postAPI } from '../../API/Post/PostApi'
import { useNavigate, useLocation, Navigate, replace} from 'react-router-dom'
export const PostForm = () => {
    const navigate = useNavigate()
    const loc = useLocation()
    console.log(loc)
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
        navigate("/post", {replace: true})
        
        // return <Navigate to="/post" replace />
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
