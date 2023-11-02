import "./Card.css";
import Logo from "../../../Assets/efumoLogo.svg";
import FullStar from "../../../Assets/fullStar.svg";
import HalfStar from "../../../Assets/halfStar.svg";
import ButtonArrow from "../../../Assets/buttonArrow.svg";

const Card = () => {
    return (
        <div className="card">
            <div className="DeveloperInfo">
                <img className="developerLogo" src={Logo} alt="Developer Logo"/>
                <div className="developerName">
                    <span>Efumo</span>
                </div>
                <div className="developerStars">
                    <div className="stars">
                        <img src={FullStar} />
                        <img src={FullStar} />
                        <img src={FullStar} />
                        <img src={FullStar} />
                        <img src={HalfStar} />
                    </div>
                    <div className="ratingInNumber">
                        <span>4.8</span>
                    </div>
                </div>
            </div>
            <div className="developerServices">
                <div><span>Services</span></div>
                <div className="services">
                    <div className="service">
                        <span>Web</span>
                    </div>
                    <div className="service">
                        <span>Mobile</span>
                    </div>
                    <div className="service">
                        <span>IT Systems</span>
                    </div>
                    <div className="service">
                        <span>Stores</span>
                    </div>
                </div>
            </div>
            <div className="developerLocation">
                <div><span>Location</span></div>
                <div className="location"><span>Riga, Latvia</span></div>
            </div>
            <div className="developerProjects">
                <div><span>Recent clients</span></div>
                <div className="projects"><span>Drogas, Madara, Aizdevums.lv</span></div>
            </div>
            <div className="developerCTA">
                <a className="cta" href="#">
                    <span>Info</span>
                    <img src={ButtonArrow} />
                </a>
            </div>
        </div>
    );
}

export default Card;