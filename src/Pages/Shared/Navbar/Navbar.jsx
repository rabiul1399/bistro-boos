import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  // let totalPrice = 0;
  // for (let i = 0; i < cart?.length; i++) {
  //   const { price } = cart[i];
  //   totalPrice += price;
  // }

  const totalPrice = cart?.reduce((total, item) => total + item.price, 0) || 0;

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contacts">Contact Us</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>

      {user && (
        <li>
          <div className="dropdown ">
            <div tabIndex={0} className="indicator">
              <FaShoppingCart className="h-6 w-5" />
              <span className="badge badge-sm badge-secondary indicator-item">
                +{cart?.length || 0}
              </span>
            </div>
            <div
              tabIndex={0}
              className="mt-44 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body text-black ">
                <span className="font-bold text-lg">
                  {" "}
                  {cart?.length || 0} Items
                </span>
                <span className="text-info">
                  Total Price:{" "}
                  <span className="text-red-500">
                    ${parseFloat(totalPrice.toString().slice(0, 5))}
                  </span>
                </span>
                <div className="card-actions">
                  <Link
                    to="dashboard/mangeItem"
                    className="btn btn-sm btn-primary btn-block"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>
      )}
      <li>
        <Link to="/shop/salad">Our Shop</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link onClick={handleLogOut}>LogOut</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar z-10 fixed bg-slate-800 text-white bg-opacity-50">
      <div className="flex-1">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro vibes</a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-sm menu-horizontal uppercase">{navOptions}</ul>

        {/* <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
