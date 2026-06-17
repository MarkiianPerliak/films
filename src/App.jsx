import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Error } from "./pages/Error"
import { Content } from "./pages/Content"
import { Navigation } from "./Components/Navigation/Navigation"
import { Post } from "./Components/Post/Post"
import { useState, useEffect } from 'react'
import {getAPI} from "./API/Post/GetApi"
import { PostForm } from "./Components/PostForm/PostForm"


function App() {
  const [post, setPost] = useState([])

  useEffect(() => {
    getAPI().then(data => setPost(data))
  }, [])

  const AddPost = (message) => {
    setPost((prevPost) => {
      console.log([...prevPost, message]),
      [...prevPost, message]
    })
  }

  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/post" element={<Post post={post}/>} />
        <Route path="/postform" element={<PostForm addpost={AddPost}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
