import "./AdminNav.css";
import Logo from "../../../Assets/BetterDev_logo.svg";
import Cookies from "js-cookie";

const AdminNav = () => {

    const exit = () => {
        Cookies.remove("jwt")
    }


    return (
        <div className="adminNav">
            <img src={Logo} alt="Logo"/>
            <a href="/login" onClick={exit}>Exit</a>
        </div>
    );
}

export default AdminNav;