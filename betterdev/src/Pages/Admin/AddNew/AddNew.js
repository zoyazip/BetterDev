import "./AddNew.css";
import Exit from "../../../Assets/exit.svg";
import { useState } from "react";

const AddNew = (props) => {

  return (
    <div className={`addNewContainer ${props.show}`}>
      <div className="addNewModal">
        <div className="modalTitle">
          <span>Add new</span>
          <div className="exitBtn">
            <img src={Exit} alt="Exit" onClick={props.showHandler} />
          </div>
        </div>
        <form className="addModalForm">
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Services"/>
          <input type="text" placeholder="Location"/>
          <input type="text" placeholder="Recent clients"/>
          <input type="text" placeholder="URL"/>
          <div className="modalBTNs">
            <button className="logo">Logo</button>
            <button className="add">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNew;
