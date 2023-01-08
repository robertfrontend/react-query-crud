import axios from "axios"

const productAPI = axios.create({
    baseURL: "http://localhost:3000"
})

export const getProducts = async() => {
    const res = await productAPI.get("/products")
    return res.data
}

export const createProduct = async (post) =>  productAPI.post("/products", post)

export const deleteProduct = async (id) => productAPI.delete(`/products/${id}`)

export const updateProduct = async (product) => productAPI.put(`/products/${product.id}`, product)