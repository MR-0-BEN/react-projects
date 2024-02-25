import { useEffect, useState } from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

const ImageSlider = ({ url, limit, page }) => {
  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchImage = async (url) => {
    try {
      const resp = await fetch(`${url}?page=${page}&limit=${limit}`)
      const data = await resp.json()

      if (data) {
        setImages(data)
        setLoading(false)
      }
    } catch (error) {
      setErrorMsg(error.massage)
      setLoading(false)
    }
  }
  useEffect(() => {
    if (url !== '') fetchImage(url)
  }, [url])

  // console.log(images)
  const handlePervious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }

  if (loading) {
    return <div>Loading ...</div>
  }
  if (errorMsg !== null) {
    return <div>Error happened !{errorMsg}</div>
  }

  return (
    <div className="relative flex justify-center items-center w-[600px] h-[450px]">
      <BsArrowLeftCircle
        className="absolute w-8 h-8 text-white drop-shadow-md left-4"
        onClick={handlePervious}
      />

      {images && images.length
        ? images.map((imageItem, index) => {
            return (
              <img
                className={
                  currentSlide === index
                    ? 'rounded-md shadow-md w-full h-full'
                    : 'rounded-md shadow-md w-full h-full hidden'
                }
                key={imageItem.id}
                src={imageItem.download_url}
                alt={imageItem.download_url}
              />
            )
          })
        : null}
      <BsArrowRightCircle
        className="absolute w-8 h-8 text-white drop-shadow-md right-4"
        onClick={handleNext}
      />
      <span className="flex absolute bottom-4">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? 'bg-gray-500 h-[15px] w-[15px] rounded-full border-none outline-none my-0 mx-1 cursor-pointer'
                      : 'bg-white h-[15px] w-[15px] rounded-full border-none outline-none my-0 mx-1 cursor-pointer'
                  }
                  onClick={() => setCurrentSlide(index)}></button>
              )
            })
          : null}
      </span>
    </div>
  )
}
export default ImageSlider
