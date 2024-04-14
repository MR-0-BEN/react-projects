import { useRef, useState } from "react";
import UseOutsideClick from ".";

const UseOnclickOutsideTest = () => {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    UseOutsideClick(ref, ()=> setShowContent(false) )


  return (
    <div className="text-center" ref={ref}>
      {showContent ? (
        <div>
          <h1 className="mt-8 text-3xl font-semibold">
            This is a random content
          </h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click in side of this content
          </p>
        </div>
      ) : (
        <button
          className=" odd:focus:shadow-outline mt-8 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none"
          onClick={() => setShowContent(true)}
        >
          Show content
        </button>
      )}
    </div>
  );
};
export default UseOnclickOutsideTest;
