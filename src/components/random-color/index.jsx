import { useEffect, useState } from 'react'

const RandomColor = () => {
  const [color, setColor] = useState('#000000')
  const [colorType, setColorType] = useState('hex')

  // random index from array
  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length)
  }

  const handleRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    console.log(hexColor)
    setColor(hexColor)
  }
  const handleRandomRgpColor = () => {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)
    let rgb = `RGB(${r},${g},${b})`
    console.log(rgb)
    setColor(rgb)
  }
  //   to change color when type change
  useEffect(() => {
    if (colorType === 'rgb') handleRandomRgpColor()
    else handleRandomHexColor()
  }, [colorType])

  return (
    <div className=" w-[100vw] h-[100vh]" style={{ backgroundColor: color }}>
      <div className="text-center">
        <button
          type="button"
          onClick={() => setColorType('rgb')}
          className="btn-color ">
          change to RGP color
        </button>
        <button
          type="button"
          onClick={() => setColorType('hex')}
          className="btn-color">
          change to Hex color
        </button>
        <button
          type="button"
          onClick={
            colorType === 'hex'
              ? () => handleRandomHexColor()
              : () => handleRandomRgpColor()
          }
          className="btn-color ">
          Generate Random Color ({colorType})
        </button>
      </div>
      <div className="flex justify-center items-center text-white text-7xl font-bold mt-16 flex-col gap-[4rem]">
        <h2>{colorType} Color</h2>
        <h3>{color}</h3>
      </div>
    </div>
  ) 
}
export default RandomColor
