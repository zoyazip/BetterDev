import "./AdminPanel.css";
import AddUser from "../../../Assets/addUser.svg"
import AdminDeveloperRow from "../AdminDeveloperRow/AdminDeveloperRow";

const AdminPanel = ({ handleClick }) => {
    
    return (
        <div className="adminPanel">
            <div className="adminPanel__title">
                <h1>Admin Panel</h1>
                <img src={AddUser} onClick={handleClick}/>
            </div>
            <div className="adminTable">
                <div><span>Name</span></div>
                <div><span>Services</span></div>
                <div><span>Location</span></div>
                <div><span>Recent clients</span></div>
                <div><span>Logo</span></div>
            </div>
            <AdminDeveloperRow />
            <AdminDeveloperRow />
            <AdminDeveloperRow />
            <AdminDeveloperRow />
            <AdminDeveloperRow />
            <AdminDeveloperRow />
        </div>
    );
}

export default AdminPanel;