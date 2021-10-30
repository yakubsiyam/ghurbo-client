import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { googleLogIn } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    googleLogIn().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="login">
      <div className="d-flex justify-content-center mx-auto py-5 container">
        <div className="my-5 py-5">
          <p
            className="fs-4 btn my-5 btn-color text-center"
            onClick={handleGoogleLogin}
          >
            <i className=" fab fa-google"></i> Login with Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
