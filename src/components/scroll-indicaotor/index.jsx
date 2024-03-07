import { useEffect, useState } from 'react'

const ScrollIndicator = ({ url, limit }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const fetchData = async () => {
    try {
      const res = await fetch(`${url}${limit}`)
      const data = await res.json()

      if (data && data.products && data.products.length > 0) {
        setData(data.products)
      }

      setLoading(false)
    } catch (error) {
      console.log(error)
      setError(error)
      setLoading(false)
    }
  }

  const updateScrollPercentage = () => {
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = document.documentElement.scrollTop
    const percentage = Math.floor((scrolled / scrollHeight) * 100)
    setScrollPercentage(percentage)
  }

  useEffect(() => {
    fetchData()
  }, [url, limit])

  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener('scroll', updateScrollPercentage)
    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  if (loading) {
    return <>loading .... </>
  }
  if (error) {
    return <>There is a error: {error} </>
  }

  return (
    <div>
      <div className="top-container fixed top-0 z-[1] w-full text-center bg-[#014f0b]">
        <h1 className="text-white p-3 text-2xl font-semibold">
          Data indicator
        </h1>
        <div className="scroll-bar-tracking-container w-full h-2 bg-[#aaf900] ">
          <div
            className="current-scroll-bar h-2  bg-[#8b02b5]"
            style={{ width: `${scrollPercentage}%` }}></div>
        </div>
      </div>
      <div className="data-container mt-20 flex items-center flex-col">
        {data && data.length > 0
          ? data.map((product) => {
              return <p>{product.title}</p>
            })
          : null}
      </div>
    </div>
  )
}
export default ScrollIndicator
