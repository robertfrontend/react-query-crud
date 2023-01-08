import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../api/productsAPI"

export default function Posts() {
  const { isLoading, data: posts, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts
  })

  if (isLoading) {
    return <div>Loading...</div>
  } else if (isError) {
    return <div>
      Ha ocurrido un error
      {error.message}
    </div>
  }
  
  return (
    <div> 
      {/* {JSON.stringify(data)} */}
      {posts.map((item) => (
        <div key={item.id}>
          <h2> {item.title}</h2>
          <p>{item.body}</p>
          <button>delete</button>
          <input type="checkbox" />
        </div>
      ))}
    </div>
  )
}
