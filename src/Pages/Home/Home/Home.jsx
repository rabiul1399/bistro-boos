import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";

import Featured from "../Featured/Featured.jsx";
import PopularMenu from "../PopularMenu/PopularMenu.jsx";
import Testimonial from "../Testimonial/Testimonial.jsx";
import Contact from "../../Contacts/Contact/Contact.jsx";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Bistro vibes | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <ChefService />
      <PopularMenu />
      <Contact />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
