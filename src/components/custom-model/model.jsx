const Model = ({
  id = 'Model',
  header = 'Header',
  body = 'This our Model body',
  footer = 'Footer',
  closeModel,
}) => {
  return (
    <div
      id={id}
      className="model fixed z-[1] pt-[150px] left-0 top-0 w-full h-full overflow-auto bg-[#baf005] ">
      <div className="  model-content popup-animation relative bg-[#fefefe] m-auto p-0 border-solid border-[red] border-[1px] w-[80%] ">
        <div className="model-header py-4 px-4 text-white  bg-[#5cb85c] text-3xl font-bold">
          <span
            onClick={closeModel}
            className="cursor-pointer text-5xl font-bold float-right  text-red-600 mt-[-10px]">
            &times;
          </span>
          <h2 className="">{header}</h2>
        </div>
        <div className="model-body py-2 px-4 h-[200px]  ">
          <p>{body}</p>
        </div>
        <div className="model-footer py-2 px-4 bg-[#5cb85c] text-white text-3xl font-bold">
          <h2>{footer}</h2>
        </div>
      </div>
    </div>
  )
}
export default Model
