import "./AdminPanel.css";
import AddUser from "../../../Assets/addUser.svg"
import AdminDeveloperRow from "../AdminDeveloperRow/AdminDeveloperRow";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = ({ handleClick }) => {
    
    const [developers, setDevelopers] = useState([]);

    const handleDeveloperRemove = (developerId) => {

        const updatedDevelopers = developers.filter(dev => dev.id !== developerId);
        setDevelopers(updatedDevelopers);
      }

    useEffect(() => {
        axios
        .get("http://localhost:8080/api/v1/developer/all")
        .then((response) => {
            setDevelopers(response.data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);

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
            {developers.map((developer) => (
            <AdminDeveloperRow
            key={developer.id}
            id={developer.id}
            name={developer.name}
            rating={developer.rating}
            services={developer.services}
            location={developer.location}
            url={developer.url}
            clients={developer.clients}
            logo={developer.logo}

            onRemove={handleDeveloperRemove}
            />
        ))}
        </div>
    );
}

export default AdminPanel;