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
    file: null,
    rating: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(developer);

    const formData = new FormData();
    formData.append("name", developer.name);
    formData.append("clients", developer.clients);
    formData.append("location", developer.location);
    formData.append("services", developer.services);
    formData.append("url", developer.url);
    formData.append("file", developer.file);
    formData.append("rating", developer.rating)

    try {
      const response = await 
      axios.
        post("http://localhost:8080/api/v1/developer/add",
        formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      console.log(response)
    }
    catch (error) {
      console.log(error);
    }
      clearForm();
}

const clearForm = () => {
  const formInputs = document.querySelectorAll("form input");
  formInputs.forEach(input => input.value = "");
  props.showHandler()
}

const handleDeveloperChange = (e) => {
  if (e.target.name === 'file') {
    setDeveloper({
      ...developer,
      file: e.target.files[0],
    });
  } else {
    setDeveloper({
      ...developer,
      [e.target.name]: e.target.value,
    });
  }
};


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
          <input type="text" placeholder="Rating" name="rating" onChange={handleDeveloperChange}/>
          <input type="text" placeholder="Services" name="services" onChange={handleDeveloperChange}/>
          <input type="text" placeholder="Location" name="location" onChange={handleDeveloperChange}/>
          <input type="text" placeholder="Recent clients" name="clients" onChange={handleDeveloperChange}/>
          <input type="text" placeholder="URL" name="url" onChange={handleDeveloperChange}/>
          <div className="modalBTNs">
            <label className="logo">
              <input type="file" accept="image/*" name="file" onChange={handleDeveloperChange}/>
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
