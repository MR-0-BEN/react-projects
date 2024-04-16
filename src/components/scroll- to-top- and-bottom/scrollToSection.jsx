import { useRef } from "react";

const ScrollToSection = () => {
  const refSection = useRef(null);
  const data = [
    {
      label: "First card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
    {
      label: "Third card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Forth card",
      style: {
        width: "100%",
        height: "600px",
        background: "black",
      },
    },
    {
      label: "Fifth card",
      style: {
        width: "100%",
        height: "600px",
        background: "purple",
      },
    },
  ];
  const handleScrollSection = () => {
    // let position = refSection.current.getBoundingClientRect().top;
    // window.scrollTo({ top: position, behavior: "smooth" });
    refSection.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div >
      <h1 className="mb-8 text-center text-3xl font-bold">
        Scroll to a particular section
      </h1>{" "}
      <button 
        className=" block mx-auto rounded-md w-[9rem] bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4 "
        onClick={handleScrollSection}
      >
        click To Scroll
      </button>
      <div className="">
        {data.map((item, index) => (
          <div
            ref={index === 3 ? refSection : null}
            style={item.style}
            key={index}
            className="w-full"
          >
            <h3 className="text-center text-4xl text-white">{item.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ScrollToSection;
