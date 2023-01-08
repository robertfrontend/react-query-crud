import axios from "axios"

const postsApi = axios.create({
    baseURL: "http://localhost:3000"
})

export const getProducts = async() => {
    const res = await postsApi.get("/products")
    return res.data
}

export const createProduct = async (post) =>  postsApi.post("/products", post)

export const deleteProduct = async (id) => postsApi.delete(`/products/${id}`)