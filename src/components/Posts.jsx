import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getProducts, deleteProduct } from "../api/productsAPI"

export default function Posts() {
    const queryClient = useQueryClient()

  // get data
  const { isLoading, data: posts, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    select: products => products.sort((a, b) => b.id - a.id)
  })

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
          console.log("Producto eliminado creado con exito")
          queryClient.invalidateQueries("products");
    },
    onError: () => console.log("HA OCURRIDO UN ERROR")
  })

  const handleDelect = (id) => {
    deleteProductMutation.mutate(id)
  }

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
          <button
           onClick={() => handleDelect(item.id)}
          >delete</button>
          <input type="checkbox" />
        </div>
      ))}
    </div>
  )
}
