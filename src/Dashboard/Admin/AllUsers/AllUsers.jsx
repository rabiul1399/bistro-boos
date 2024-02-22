import { FaUsers } from "react-icons/fa";
import SectionTitle from "../../../Pages/Shared/SectionTitle/SectionTitle";
import useAllUsers from "../../../hooks/useAllUsers";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users] = useAllUsers();
  console.log(users);


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
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          console.log(res);
          res.json();
          if (res.status === 200) {
            // refetch();
          }
        });
      }
    });
  };


  return (
    <div>
      <div className="">
        <SectionTitle subHeading="---Hurry Up!---" heading="Manage All Users" />
      </div>
      <div className="card w-4/5  mt-16 mx-auto shadow-2xl">
        <div className="flex justify-between">
          {" "}
          <h3 className="pl-3 font-semibold mt-2">
            Total Items:{users?.length}
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-300 ">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="bg-base-300">
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn bg-orange-400 text-white hover:bg-red-400">
                      {" "}
                      <FaUsers />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn bg-red-500 text-white hover:bg-red-400"
                      onClick={() => handleDeleteItem(user._id)}
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
  );
};

export default AllUsers;
