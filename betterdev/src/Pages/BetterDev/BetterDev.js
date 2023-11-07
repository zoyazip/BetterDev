import Nav from "./Nav/Nav";
import MainTitle from "./MainTitle/MainTitle";
import BackendOnly from "./BackendOnly/BackendOnly";
import Cards from "./Card/Cards";
import "./BetterDev.css"
import { useState } from "react";

const BetterDev = () => {
    const [category, setCategory] = useState("All");


    return (
    <div className="betterDev">
        <Nav setCategory={setCategory}/>
        <MainTitle />
        <Cards category={category}/>
        <BackendOnly />
    </div>
    );
}

export default BetterDev;