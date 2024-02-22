import loginImg from "../../../assets/others/authentication1.png";
import bgImg from "../../../assets/others/authentication.png";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../../component/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let errorMessage;
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const handleLoginButton = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
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
          title: "User Login successfully",
        });

        // ...login successfully then navigate page
        navigate(from, { replace: true });
      })
      .catch((error) => {
        errorMessage = error.message;
        console.log("error---", errorMessage);
      });
  };

  const handleValidateCaptcha = (e) => {
    const captcha = e.target.value;
    if (validateCaptcha(captcha)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
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
          <h3 className="text-center text-3xl font-semibold">Login</h3>
          <form onSubmit={handleLoginButton} className="card-body  ">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Type here"
                className="input  border-none shadow"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input  border-none shadow"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                onBlur={handleValidateCaptcha}
                placeholder="Type here Captcha"
                className="input  border-none shadow"
                required
              />
            </div>

            <div className="form-control mt-6">
              <p className="text-red-500"> {errorMessage}</p>
              <input
                type="submit"
                value={"Login"}
                disabled={disabled}
                className="btn bg-orange-300 hover:bg-orange-700 hover:text-white"
              ></input>
            </div>
          </form>
          <label className="label  justify-center ">
            <span className="cursor-text">Don`t have an account?
              <span>
                {" "}
                <Link
                  to="/signUp"
                  className="font-semibold label-text-alt link link-hover underline"
                >
                  Sign up
                </Link>
              </span>{" "}
            </span>
          </label>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
