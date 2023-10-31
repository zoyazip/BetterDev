import "./AddNew.css";
import Exit from "../../../Assets/exit.svg";
import { useState } from "react";
import axios from "axios";

const AddNew = (props) => {

  const [developer, setDeveloper] = useState({
    name: "",
    services: "",
    location: "",
    clients: "",
    url: "",
    logo: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(developer);
    try {
        const response = await axios.post("your-backend-url", developer);
    
        if (response.status === 200) {
          console.log("Success");
          console.log(developer);
          //Clear inputs
          setDeveloper({
            name: "",
            services: "",
            location: "",
            clients: "",
            url: "",
            logo: ""
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
      clearForm();
}

const clearForm = () => {
  const formInputs = document.querySelectorAll("form input");
  formInputs.forEach(input => input.value = "");
  props.showHandler()
}

const handleDeveloperChange = (e) => {
    setDeveloper({
      ...developer,
      [e.target.name]: e.target.value
    });
  }


  return (
    <div className={`addNewContainer ${props.show}`}>
      <div className="addNewModal">
        <div className="modalTitle">
          <span>Add new</span>
          <div className="exitBtn">
            <img src={Exit} alt="Exit" onClick={clearForm} />
          </div>
        </div>
        <form className="addModalForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" onChange={handleDeveloperChange}/>
          <input type="text" placeholder="Services" name="services" onChange={handleDeveloperChange}/>
          <input type="text" placeholder="Location" name="location" onChange={handleDeveloperChange}/>
          <input type="text" placeholder="Recent clients" name="clients" onChange={handleDeveloperChange}/>
          <input type="text" placeholder="URL" name="url" onChange={handleDeveloperChange}/>
          <div className="modalBTNs">
            <label className="logo">
              <input type="file" name="logo" onChange={handleDeveloperChange}/>
              Logo
            </label>
            <input type="submit" className="add" onClick={clearForm} value="Add"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNew;
