import "./AdminNav.css";
import Logo from "../../../Assets/BetterDev_logo.svg";

const AdminNav = () => {
    return (
        <div className="adminNav">
            <img src={Logo} alt="Logo"/>
            <a>Exit</a>
        </div>
    );
}

export default AdminNav;