import UseWindowResize from ".";

const UseWindowResizeTest = () => {
  const { width, height } = UseWindowResize();
  // const {width, height } = windowSize;
  return (
    <div className="mt-16 text-center">
      <h1 className="mb-4 text-3xl font-semibold">Use Window Resize Hook</h1>
      <p>
        width is <span className="font-semibold">"{width}"</span>
      </p>
      <p>
        Height is <span className="font-semibold">"{height}"</span>{" "}
      </p>
    </div>
  );
};
export default UseWindowResizeTest;
