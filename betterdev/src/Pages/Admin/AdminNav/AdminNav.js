import "./AdminNav.css";
import Logo from "../../../Assets/BetterDev_logo.svg";

const AdminNav = () => {

    const exit = () => {
        sessionStorage.removeItem("jwt")
    }


    return (
        <div className="adminNav">
            <img src={Logo} alt="Logo"/>
            <a href="/login" onClick={exit}>Exit</a>
        </div>
    );
}

export default AdminNav;