import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title }) => {
  console.log("order title", title);
  return (
    <div>
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-4 md:mx-8 md:my-8">
        {items.slice(0, 6).map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
      <div className="text-center my-8">

        <Link to={`/shop/${title}`}>
          <button className="btn hover:btn-outline border-0 border-b-4 border-black uppercase text-xl ">
            Order NOw
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
