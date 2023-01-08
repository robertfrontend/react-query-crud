import { useState } from 'react'
import './App.css'
import Posts from './components/Posts'
import PostsForm from './components/PostsForm'

function App() {

  return (
    <>
      <PostsForm/>
      <Posts/>
    </>

  )
}

export default App
