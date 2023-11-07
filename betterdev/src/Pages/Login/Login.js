import "./Login.css";
import Logo from "../../Assets/BetterDev_logo.svg";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import Cookies  from "js-cookie";


const Login = () => {
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        loginData
      );

      if (response.status === 200) {
        Cookies.set("jwt", response.data.token, {expires: 1});
        navigate("/admin", {replace: true})
      }
    } catch (error) {
      alert("Wrong login and/or password");
      console.error("Error:", error);
    }
  };


  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div className="login">
      <img src={Logo} alt="Logo" />
      <h1>Login to Admin Panel</h1>
      <form className="form__container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={handleChange}
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
