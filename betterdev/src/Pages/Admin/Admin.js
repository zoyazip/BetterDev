import "./Admin.css";
import AdminNav from "./AdminNav/AdminNav";
import AdminPanel from "./AdminPanel/AdminPanel";

const Admin = () => {
    return (
        <div className="admin">
            <AdminNav />
            <AdminPanel />
        </div>
    );
}

export default Admin;