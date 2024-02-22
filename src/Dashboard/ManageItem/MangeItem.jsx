import SectionTitle from "../../Pages/Shared/SectionTitle/SectionTitle";
import useCart from "../../hooks/useCart";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const MangeItem = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0) || 0;
  console.log(cart);

  const handleDeleteItem = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          console.log(res);
          res.json();
          if (res.status === 200) {
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className=" ">
      <div className="">
        <SectionTitle subHeading="---Hurry Up!---" heading="Manage All Items" />
      </div>
      <div>
        <div className="card w-4/5  mt-16 mx-auto shadow-2xl">
          <div className="flex justify-between">
            {" "}
            <h3 className="pl-3 font-semibold mt-2">
              Total Items:{cart?.length}
            </h3>
            <h3 className="pl-3 font-semibold mt-2">Price:   ${parseFloat(totalPrice.toString().slice(0, 5))}</h3>
            <button className="btn btn-sm btn-ghost">pay</button>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-orange-300 ">
                <tr>
                  <th></th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="bg-base-300">
                {cart?.map((cartItem, index) => (
                  <tr key={cartItem._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={cartItem.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{cartItem.name}</td>
                    <td>{cartItem.price}</td>
                    <td>
                      <button className="btn bg-red-500 text-white hover:bg-red-400">
                        {" "}
                        <FaRegEdit />
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn bg-red-500 text-white hover:bg-red-400"
                        onClick={() => handleDeleteItem(cartItem._id)}
                      >
                        {" "}
                        <RiDeleteBin5Line />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangeItem;
