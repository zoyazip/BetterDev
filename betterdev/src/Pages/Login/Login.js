import "./Login.css";
import Logo from "../../Assets/BetterDev_logo.svg"

const Login = () => {
    return (
        <div className="login">
            <img src={Logo} alt="Logo"/>
            <h1>Login to Admin Panel</h1>
            <form className="form__container">
                <input type="text" placeholder="Username"></input>
                <input type="password" placeholder="Password"></input>
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;