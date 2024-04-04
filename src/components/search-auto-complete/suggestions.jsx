const Suggestions = ({ data, handleClick }) => {
  return (
    <ul className="mt-2 border border-gray-300 rounded-md shadow-md w-72 mx-auto">
      {data && data.length
        ? data.map((item, index) => (
            <li
              onClick={handleClick}
              key={index}
              className="cursor-pointer py-2 px-4 hover:bg-gray-100">
              {item}
            </li>
          ))
        : null}
    </ul>
  )
}
export default Suggestions
