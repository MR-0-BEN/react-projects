import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({ numOfStars = 10 }) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (currentIndex) => {
    setRating(currentIndex)
    // console.log(currentIndex)
  }
  const handleMouseMove = (currentIndex) => {
    setHover(currentIndex)
    // console.log(currentIndex)
  }
  const handleMouseleave = () => {
    setHover(rating)
  }
  return (
    <div className="flex justify-center">
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            size={40}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseleave()}
            className={
              index <= hover ? 'text-[#fff700]' : 'text-[#000000]'
            }
          />
        )
      })}
    </div>
  )
}
export default StarRating
