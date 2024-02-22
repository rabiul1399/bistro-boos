import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../src/Pages/Shared/Footer/Footer";
import Navbar from "../../src/Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location.pathname);
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signUp");

  return (
    <div className="mx-2">
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
