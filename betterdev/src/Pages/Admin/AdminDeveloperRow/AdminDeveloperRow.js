import "./AdminDeveloperRow.css";
import Logo from "../../../Assets/efumoLogo.svg";
import Edit from "../../../Assets/edit.svg"
import Remove from "../../../Assets/remove.svg"

const AdminDeveloperRow = () => {
    return (
        <div className="adminDeveloperRow blue">
            <div><span>Efumo</span></div>
            <div><span>Web, Mobile, IT Systems, Stores</span></div>
            <div><span>Riga, Latvia</span></div>
            <div><span>Drogas, Madara, Aizdevums.lv</span></div>
            <div><img src={Logo} className="adminLogo" /></div>
            <div className="activity">
                <div><img src={Edit} className="edit" /></div>
                <div><img src={Remove} className="remove" /></div>
            </div>
        </div>
    );
}

export default AdminDeveloperRow;