import React, { useState } from 'react'
import "./RowEdit.css"
import axios from 'axios';

function RowEdit(props) {
    const [hide, setHide] = useState("");

    const handleHide = () => {
        setHide("hide");
      }
    
    const [developer, setDeveloper] = useState({
        name: props.name,
        services: props.services,
        location: props.location,
        clients: props.clients,
        url: props.url,
        file: createFileFromJSON(props.file),
        rating: props.rating
      })

      function createFileFromJSON(jsonData) {
        const byteCharacters = atob(jsonData.imageData);
        const byteNumbers = new Array(byteCharacters.length);
      
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
      
        const byteArray = new Uint8Array(byteNumbers);
      
        const blob = new Blob([byteArray], { type: jsonData.dataType });
      
        return new File([blob], jsonData.name, { lastModified: Date.now() });
      }
      
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("name", developer.name);
        formData.append("clients", developer.clients);
        formData.append("location", developer.location);
        formData.append("services", developer.services);
        formData.append("url", developer.url);
        formData.append("file", developer.file);
        formData.append("rating", developer.rating)
        console.log("EDIT==============")
        console.log(developer.file);

        try {
          const response = await 
          axios.
            put(`http://localhost:8080/api/v1/developer/update/${parseInt(props.id)}`,
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
    <div className={`rowEdit ${hide}`}>
        <form onSubmit={handleSubmit}>
            <input className='editName' type='text' placeholder='Name' name='name' onChange={handleDeveloperChange}/>
            <input className='editServices' type='text' placeholder='Services' name='name' onChange={handleDeveloperChange}/>
            <input className='editLocation' type='text' placeholder='Location' name='location' onChange={handleDeveloperChange}/>
            <input className='editClients' type='text' placeholder='Clients' name='clients' onChange={handleDeveloperChange}/>
            <input className='editRating' type='text' placeholder='Rating' name='rating' onChange={handleDeveloperChange}/>
            <input className='editUrl' type='text' placeholder='Url' name='rating' onChange={handleDeveloperChange}/>
            <label className="editLogo">
              <input type="file" accept="image/*" name="file" onChange={handleDeveloperChange}/>
              Logo
            </label>
            <button className='editSave' value="Add" onClick={handleHide}>Save</button>
        </form>
    </div>
  )
}

export default RowEdit