import "./Login.css";
import Logo from "../../Assets/BetterDev_logo.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [isLoged, setIsLoged] = useState(false); 

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const redirect = () => {
    if (isLoged) {
      navigate("/admin")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        loginData
      );

      if (response.status === 200) {
        sessionStorage.setItem("jwt", response.data.token);
        setIsLoged(true);
        redirect();
      }
    } catch (error) {
      alert("Wrong login and/or password");
      setIsLoged(false)
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
