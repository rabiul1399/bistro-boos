import { GoogleAuthProvider } from "firebase/auth";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { googleSignIn } = useContext(AuthContext);

  const handleSignInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        const userInfo = { email: user.email, name: user.displayName, token };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          // IdP data available using getAdditionalUserInfo(result)
          navigate(from, { replace: true });
        });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(credential);
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <h3 className="text-center mb-3">Or sign in with</h3>
      <div className="flex gap-12 justify-center">
        <a href="#">
          <FaFacebook />
        </a>
        <a onClick={handleSignInWithGoogle} href="#">
          <FaGoogle />
        </a>
        <a href="#">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialLogin;
