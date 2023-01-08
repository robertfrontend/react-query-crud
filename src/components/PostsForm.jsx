import React from 'react'

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createProduct, getProducts } from '../api/productsAPI'

export default function PostsForm() {

    const queryClient = useQueryClient()

    const addPostMutation = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries("products");
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const postForm = Object.fromEntries(formData)
        console.log(postForm)

        addPostMutation.mutate({...postForm, inStock: true})
    }

  return (
      <form onSubmit={handleSubmit}>
          <label >Name</label>
          <input type="text" id="name" name="name" />
          
          <label >Description</label>
          <input type="text" id="description" name="description" />
          
          <label>Price</label>
          <input type="text" id="price" name="price" />
          
          <button>Add Post</button>
    </form>
  )
}
