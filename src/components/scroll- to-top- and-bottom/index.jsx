import { useRef } from "react";
import useFetch from "../use-fetch";

const ScrollToTopAndBottom = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {},
  );
  const bottomRef = useRef(null);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  if (pending) {
    return (
      <h1 className="text-center text-2xl font-bold text-gray-800">
        Loading ...
      </h1>
    );
  }
  if (error) {
    return (
      <h1 className="text-center text-2xl font-bold text-red-600">
        Error occurred! Please try again
      </h1>
    );
  }
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="mb-4 text-3xl font-bold text-blue-800">
        Scroll To Top And Bottom Feature
      </h1>
      <h3 className="mb-2 text-xl text-gray-700">This is the top section</h3>
      <button
        className="mb-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleScrollToBottom}
      >
        Scroll To Bottom
      </button>
      <ul className="list-none">
        {data && data.products && data.products.length
          ? data.products.map((item, index) => (
              <li key={index} className="text-gray-800 text-center">
                {item.title}
              </li>
            ))
          : null}
      </ul>
      <button
        className="my-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleScrollToTop}
      >
        Scroll To Top
      </button>
      <div ref={bottomRef}></div>
      <h3 className="mt-6 text-xl text-gray-700">
        This is the Bottom of the page
      </h3>
    </div>
  );

};
export default ScrollToTopAndBottom;
