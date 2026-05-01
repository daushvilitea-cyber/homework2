'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
      fetch("https.//fakestoreapi.com/products")
        .then((response) = response.json())
        .then((result) => setProducts(result))
    }
    catch (error) {
      console.error(error)
      setError(true)
    }
    finally {
      setLoading(false)
    }

  }, [])
  if (loading) {
    return <div>
      loading...
    </div>
  }
  if (error) {
    return <div>
      something went wrong!
    </div>
  }
  return <div>
    {products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))}

  </div>

}