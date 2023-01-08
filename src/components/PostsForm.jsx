import React from 'react'

export default function PostsForm() {

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        Object.fromEntries(formData)
        console.log(formData)
    }

  return (
      <form onSubmit={handleSubmit}>
          <label for="title">Title</label>
          <input type="text" id="title" name="title" />
          
          <label for="body">Body</label>
          <input type="text" id="body" name="body" />
          
          <button>Add Post</button>
    </form>
  )
}
