import axios from "axios"

const postsApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

export const getPosts = async() => {
    const res = await postsApi.get("/posts")
    return res.data
}