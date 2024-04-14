import useFetch from ".";

const UseFetchHook = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {},
  );
  //   console.log(data, error, pending);
  return (
    <div>
      <h1 className="mb-8 text-center text-3xl">UseFetchHook</h1>
      <div className="mb-8 text-center">
        {pending ? (
          <h2 className="text-3xl">Loading ...! please wait</h2>
        ) : null}
        {error ? <h2>{error}</h2> : null}
        {data && data.products && data.products.length
          ? data.products.map((productItem) => {
              return <p key={productItem.id}>{productItem.title} </p>;
            })
          : null}
      </div>
    </div>
  );
};
export default UseFetchHook;
