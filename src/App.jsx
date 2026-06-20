import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Error } from "./pages/Error"
import { Content } from "./pages/Content"
import { Navigation } from "./Components/Navigation/Navigation"
import { Post } from "./Components/Post/Post"
import { Replies } from "./Components/Replies/Replies"
import { PostForm } from "./Components/PostForm/PostForm"


function App() {

  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/post" element={<Post />} ><Route path="/post/:id" element={<Replies />}></Route></Route>
        <Route path="/postform" element={<PostForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
