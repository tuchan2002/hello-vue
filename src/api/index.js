export const getAllProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data = await res.json();

  return data
}

export const getProductById = async (productId) => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
  const data = await res.json();

  return data
}