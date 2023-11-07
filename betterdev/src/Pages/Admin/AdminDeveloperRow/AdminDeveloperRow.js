import "./AdminDeveloperRow.css";
import Edit from "../../../Assets/edit.svg"
import Remove from "../../../Assets/remove.svg"
import { useEffect, useState } from "react";

const AdminDeveloperRow = (props) => {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        if (props.logo && props.logo.imageData) {
          const dataURL = `data:image/png;base64,${props.logo.imageData}`;
          setImageSrc(dataURL);
        } else {
          console.log("Logo or logo.imageData is not defined");
        }
      }, [props.logo]);

      const handleRemove = () => {
        console.log("removed");
      }

    return (
        <div className="adminDeveloperRow blue">
            <div><span>{props.name}</span></div>
            <div><span>{props.services}</span></div>
            <div><span>{props.location}</span></div>
            <div><span>{props.clients}</span></div>
            <div><img src={imageSrc} className="adminLogo" /></div>
            <div className="activity">
                <div><img src={Edit} className="edit" /></div>
                <div><img src={Remove} className="remove" onClick={handleRemove} /></div>
            </div>
        </div>
    );
}

export default AdminDeveloperRow;