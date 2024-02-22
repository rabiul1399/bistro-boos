import loginImg from "../../../assets/others/authentication1.png";
import bgImg from "../../../assets/others/authentication.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SignUp = () => {
  const { createUser, userUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;

    createUser(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        userUpdateProfile(name)
          .then(() => {
            // create user api saved in database
            const userInfo = {
              name,
              email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res) {
                console.log("user data posetd", res);
                reset();
                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  },
                });
                Toast.fire({
                  icon: "success",
                  title: "Signed in successfully",
                });
                // ...

                navigate(from, { replace: true });
              }
                    // Profile updated!
          })
          .catch((error) => {
            // An error occurred
            console.log("update profile error", error);
            // ...
          });

            });

      
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log("firebase error", errorMessage);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
          footer: '<a href="#">Please login your account</a>',
        });

        // ..
      });

    console.log(data);
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss || SignUP</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
        className="hero min-h-screen bg-base-200"
      >
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className=" w-2/5">
            <img className=" shadow rounded " src={loginImg} alt="" />
          </div>
          <div className="card w-full max-w-sm  ">
            <h3 className="text-center text-3xl font-semibold">SignUP</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body  ">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Type here"
                  className="input  border-none shadow"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500">Name is required</p>
                )}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Type here"
                  className="input  border-none shadow"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 16,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                  })}
                  placeholder="Enter your password"
                  className="input  border-none shadow"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    Password must be 6 character is required
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must be one uppercase letter, one lowercase letter
                    and one number:
                  </p>
                )}

                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">MaxLength 16 character over</p>
                )}
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn  bg-orange-300" />
              </div>
            </form>
            <label className="label  justify-center ">
              <span className="cursor-text">
                Already have an account?
                <span>
                  {" "}
                  <Link
                    to="/login"
                    className="font-semibold label-text-alt link link-hover underline"
                  >
                    Sign In
                  </Link>
                </span>{" "}
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
