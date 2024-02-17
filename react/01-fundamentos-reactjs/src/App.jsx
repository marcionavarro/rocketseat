import { Post } from "./Post"
import { Header } from "./components/Header"
import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <Post
        author="Marcio Navarro"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aspernatur."
      />
      <Post
        author="Carlos Eduardo"
        content="Um novo Post"
      />
    </div>
  )
}



