import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/productsAPI"

export default function Posts() {

  // get data
  const { isLoading, data: posts, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    select: products => products.sort((a, b) => b.id - a.id)
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
          <h2> {item.name}</h2>
          <p>{item.description}</p>
          <p>$ {item.price}</p>
          <button>delete</button>
          <input type="checkbox" />
        </div>
      ))}
    </div>
  )
}
