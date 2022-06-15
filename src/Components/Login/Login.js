import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../Header/Header";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toggle, setToggle] = useState(true);
  const { signInUsingGoogle, createNewUser, loginUser, error, setError } =
    useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!toggle) {
      if (password === confirmPassword) {
        createNewUser(email, password).then((result) => {
          setToggle(true);
          setError("");
        });
      } else {
        setError("Password Not match!");
      }
    }
    if (toggle) {
      loginUser(email, password).then((result) => {
        if (result) {
          history.push(redirect_uri);
        }
      });
    }
  };

  return (
    <>
      <Header></Header>
      <div className="bg-light w-50 my-5 m-auto shadow-sm p-5">
        <h2 className="mb-4"> {toggle ? "LogIn" : " Create Account"}</h2>
        <form onSubmit={handleLogin}>
          <input
            className="input w-100 form-control mb-3"
            type="email"
            name="email"
            placeholder="Enter your E-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="input w-100 form-control mb-3"
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {!toggle && (
            <input
              className="input w-100 form-control mb-3"
              type="password"
              name="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          {error && <small className="text-danger">{error}</small>}
          <input
            type="submit"
            value="Submit"
            className="w-100 btn btn-primary"
          />
        </form>
        <br />
        <p>
          New to City-Ride?{" "}
          <Link onClick={() => setToggle(!toggle)}>
            {toggle ? "Create Account" : "Login"}
          </Link>
        </p>
        ----------Or----------
        <br />
        <button
          className="btn btn-outline-dark btn-regular w-100"
          onClick={handleGoogleLogin}
        >
          Google
        </button>
        <br />
        <br />
        <button className="btn btn-outline-dark btn-regular w-100">
          Github
        </button>
      </div>
    </>
  );
};

export default Login;
