import "./Login.css";
import Logo from "../../Assets/BetterDev_logo.svg"
import { useState } from "react";
import axios from "axios";

const Login = () => {

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("your-backend-url", loginData);
        
            if (response.status === 200) {
              console.log("Success");
              console.log(loginData);
            }
          } catch (error) {
            console.error("Error:", error);
          }
    }

    const handleChange = (e) => {
        setLoginData({
          ...loginData,
          [e.target.name]: e.target.value
        });
      }


    return (
        <div className="login">
            <img src={Logo} alt="Logo"/>
            <h1>Login to Admin Panel</h1>
            <form className="form__container" onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" onChange={handleChange} name="username" ></input>
                <input type="password" placeholder="Password" onChange={handleChange} name="password" ></input>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;