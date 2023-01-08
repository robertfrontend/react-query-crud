import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getProducts, deleteProduct, updateProduct } from "../api/productsAPI"

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
          queryClient.invalidateQueries("products");
    },
    onError: () => console.log("HA OCURRIDO UN ERROR")
  })

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
          queryClient.invalidateQueries("products");
    },
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
      {posts.map((product) => (
        <div key={product.id}>
          <h2> {product.name}</h2>
          <p>{product.description}</p>
          <p>$ {product.price}</p>

          <button
           onClick={() => handleDelect(product.id)}
          >
            delete
          </button>

          <input type="checkbox"
            checked={product.inStock}
            id={product.id}
            onChange={(e) => {
              updateProductMutation.mutate({
                ...product,
                inStock: e.target.checked
              });
            }}
          />
          <label htmlFor={product.id}>In Stock</label>
        </div>
      ))}
    </div>
  )
}
