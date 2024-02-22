import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, recipe, _id, price } = item;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [, reFetch] = useCart();
  
  const handelAddToCart = () => {
    if (user && user.email) {
      const currentItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            reFetch();

            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "success",
              title: "Saved your product",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Login First",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {
            state: { from: location },
          });
        }
      });
    }
  };

  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="food" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div>
          <h3 className="bg-black text-white w-16 p-3 inline-block  absolute top-4 right-2  rounded">
            ${price}
          </h3>
        </div>

        <div className="card-actions justify-center">
          <button
            onClick={() => handelAddToCart(item)}
            className="btn w-42 shadow-xl hover:btn-outline border-0 border-b-4 border-yellow-600 text-yellow-600 uppercase text-xl "
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
