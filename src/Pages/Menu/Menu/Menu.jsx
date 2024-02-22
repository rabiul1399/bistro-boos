import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../../assets/menu/salad-bg.jpg";
import soupsImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro vibes | Menu</title>
      </Helmet>

      <Cover img={menuImg} title={"Our Menu"} />
      <SectionTitle subHeading={"---Don't miss---"} heading={"Today's Offer"} />

      <MenuCategory items={offered} />
      <MenuCategory coverImg={dessertImg} title={"desserts"} items={dessert} />
      <MenuCategory coverImg={pizzaImg} title={"pizza"} items={pizza} />
      <MenuCategory coverImg={saladsImg} title={"salad"} items={salad} />
      <MenuCategory coverImg={soupsImg} title={"soup"} items={soup} />
     
    </div>
  );
};

export default Menu;
