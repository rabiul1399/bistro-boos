const MenuItem = ({ item }) => {

  const { image, name, price, recipe } = item;
  return (
    <div className="flex bg-gray-100 py-3 rounded  space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[120px] mr-3"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}---------------</h3>
        <p className="mr-8">{recipe}</p>
      </div>
      <p className="pr-4 my-auto text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
