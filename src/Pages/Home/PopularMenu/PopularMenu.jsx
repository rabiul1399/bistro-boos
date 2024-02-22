import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="">
      <SectionTitle heading="From our Menu" subHeading="---Check it Out---" />

      <div className="grid md:grid-cols-2 gap-4 md:mx-8">
        {popular.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
      <div className="text-center my-8">
        <Link
          to={"/menu"}
          className="btn hover:btn-outline border-0 border-b-4 border-black uppercase text-xl "
        >
          View full menu
        </Link>
      </div>
    </div>
  );
};

export default PopularMenu;
