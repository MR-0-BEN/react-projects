import { useState } from 'react'
import QRCode from 'react-qr-code'

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')

  const handleGenerateCode = () => {
    setQrCode(input)
    setInput('')
  }

  return (
    <div className="flex items-center flex-col gap-5 text-center">
      <h1 className="text-4xl font-bold text-gray-800 leading-tight">
        QR Code Generator
      </h1>
      <div>
        <input
          className="placeholder:text-center shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
          type="text"
          name="qr-code"
          placeholder="Enter Your Value"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== '' ? false : true}
          type="button"
          onClick={handleGenerateCode}
          className="ml-5 transition-colors duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 disabled:opacity-50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Generate QR
        </button>
      </div>
      <div className="m-5 p-5">
        <QRCode id="QR code value" value={qrCode} size={400} />
      </div>
    </div>
  )
}
export default QRCodeGenerator
