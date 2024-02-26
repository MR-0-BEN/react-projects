import { useEffect, useState } from 'react'

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [disableButton, setDisableButton] = useState(false)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const resp = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      )
      const result = await resp.json()
      console.log(result)
      if (result && result.products && result.products.length) {
        setProducts([...products, ...result.products])
        setLoading(false)
      }

      //   console.log(result.products)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [count])
  useEffect(() => {
    if (products.length === 100) {
      setDisableButton(true)
    }
  }, [products])

  if (loading) {
    return <div className="text-center">Loading...</div>
  }

  return (
    <div className="load-more-container flex flex-col gap-5 items-center">
      <div className="product-container grid grid-cols-4 gap-3 ">
        {products && products.length
          ? products.map((item) => {
              return (
                <div
                  key={item.id}
                  className="product p-5 flex flex-col gap-3 border-2">
                  <img
                    className="w-[200px] h-[200px]"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <p>{item.title}</p>
                </div>
              )
            })
          : null}
      </div>
      <div className="button-container text-center">
        <button
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
          className={
            disableButton
              ? `py-2 px-5 rounded-xl bg-slate-700 cursor-not-allowed`
              : `py-2 px-5 rounded-xl bg-slate-300 cursor-pointer`
          }>
          load more products
        </button>
        <div>
          {disableButton ? <p>you have reached to 100 Product</p> : null}
        </div>
      </div>
    </div>
  )
}
export default LoadMoreData
