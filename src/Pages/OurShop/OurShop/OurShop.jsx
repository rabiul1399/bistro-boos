import Cover from "../../Shared/Cover/Cover";

import { Helmet } from "react-helmet-async";
import shopImg from "../../../assets/shop/banner2.jpg";
import OrderFood from "../OrderFood/OrderFood";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const [menu] = useMenu();
  const categories = ["dessert", "salad", "pizza", "soup", "drinks"];
  const { category } = useParams();

  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);


  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");



  return (
    <div>
      <Helmet>
        <title>Bistro vibes | Our Shop</title>
      </Helmet>
      <Cover img={shopImg} title={"Our Menu"} />
      <Tabs
        className="text-center my-8 border-0 "
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderFood items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderFood items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderFood items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderFood items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderFood items={drinks} />
        </TabPanel>
      </Tabs>
     
    </div>
  );
};

export default OurShop;
