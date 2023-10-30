import React, { useState } from 'react';
import AddNew from "./AddNew/AddNew";
import "./Admin.css";
import AdminNav from "./AdminNav/AdminNav";
import AdminPanel from "./AdminPanel/AdminPanel";

const Admin = () => {
    const [click, setClick] = useState("hidden")

    const handleClick = () => {
        click == "hidden" ? setClick("visible") : setClick("hidden")
    }

    return (
        <div className="admin">
            <AdminNav />
            <AdminPanel handleClick={handleClick}/>
            <AddNew show={click} showHandler={handleClick}/>
        </div>
    );
}

export default Admin;