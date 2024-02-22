import {
  FaArrowLeft,
  FaBook,
  FaCalendarAlt,
  FaCalendarDay,
  FaHome,
  FaListUl,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { BsList } from "react-icons/bs";
import { MdLibraryAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbDeviceImacStar } from "react-icons/tb";
const DashMenu = () => {
  const isAdmin = true;

  return (
    <div className="pt-4 ">
      <h2 className="pl-2">
        <Link to="/">
          <FaArrowLeft />
        </Link>
      </h2>
      <header className="pl-8">
        <h3 className="text-bold  text-3xl">Bistro Boss</h3>
        <p className="">Restaurant</p>
      </header>
      {isAdmin ? (
        // Admin panel
        <ul className="menu pl-5 text-white rounded-box">
          <li>
            <Link to="/dashboard" className="uppercase">
              <FaHome />
              Admin Home
            </Link>
          </li>
          <li>
            <Link to="dashboard/add" className="uppercase">
              <MdLibraryAdd />
              Add Items
            </Link>
          </li>
          <li>
            <Link to="dashboard/manageItems" className="uppercase">
              <FaListUl />
              Manage Items
            </Link>
          </li>
          <li>
            <a href="#" className="uppercase">
              <FaBook />
              Manage Bookings
            </a>
          </li>
          <li>
            <Link to="dashboard/users" className="uppercase">
              <FaUsers />
              AllUsers
            </Link>
          </li>
        </ul>
      ) : (
        // User panel
        <ul className="menu pl-5 text-white rounded-box">
          <li>
            <a className="uppercase">
              <FaHome />
              User Home
            </a>
          </li>
          <li>
            <a className="uppercase">
              <FaCalendarAlt />
              Reservation
            </a>
          </li>
          <li>
            <a className="uppercase">
              <FaWallet />
              Payment History
            </a>
          </li>
          <li>
            <a className="uppercase">
              <FaShoppingCart />
              My Cart
            </a>
          </li>
          <li>
            <a className="uppercase">
              <TbDeviceImacStar />
              Add Review
            </a>
          </li>
          <li>
            <a className="uppercase">
              <FaCalendarDay />
              My Booking
            </a>
          </li>
        </ul>
      )}

      <div className="divider mx-4 divider-neutral"></div>

      <div>
        <ul className="menu pl-5 text-black rounded-box">
          <li>
            <a className="uppercase">
              <FaHome />
              Home
            </a>
          </li>
          <li>
            <a className="uppercase">
              <BsList />
              Menu
            </a>
          </li>
          <li>
            <a className="uppercase">
              <FaShoppingBag />
              Shop
            </a>
          </li>
          <li>
            <a className="uppercase">
              <TbMailFilled />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashMenu;
