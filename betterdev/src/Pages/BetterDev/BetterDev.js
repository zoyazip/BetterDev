import Nav from "./Nav/Nav";
import MainTitle from "./MainTitle/MainTitle";
import BackendOnly from "./BackendOnly/BackendOnly";
import Cards from "./Card/Cards";
import "./BetterDev.css"

const BetterDev = () => {
    return (
    <div className="betterDev">
        <Nav />
        <MainTitle />
        <Cards />
        <BackendOnly />
    </div>
    );
}

export default BetterDev;