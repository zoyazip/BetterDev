import "./Card.css";
import FullStar from "../../../Assets/fullStar.svg";
import HalfStar from "../../../Assets/halfStar.svg";
import EmptyStar from "../../../Assets/emptyStar.svg"
import ButtonArrow from "../../../Assets/buttonArrow.svg";
import { useState, useEffect } from "react";


const Card = ({name, rating, clients, services, location, url, logo}) => {

    const [imageSrc, setImageSrc] = useState('');
    const [servicesList, setServicesList] = useState([]);
    const [ratingDouble, setRatingDouble] = useState(0.0);

    const fullStars = Math.floor(ratingDouble);
    const hasHalfStar = ratingDouble - fullStars > 0.4;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [...Array(fullStars)].map((_, index) => (
        <img key={index} src={FullStar} alt="Full Star" />
    ));

    if (hasHalfStar) {
        stars.push(<img key="half" src={HalfStar} alt="Half Star" />);
    }

    stars.push(...[...Array(emptyStars)].map((_, index) => (
        <img key={`empty-${index}`} src={EmptyStar} alt="Empty Star" />
    )));

    useEffect(() => {
        setRatingDouble(parseFloat(rating))
    }, [rating]);

    useEffect(() => {
        setServicesList(services.split(/,\s*/))
    }, [services]);

  useEffect(() => {
    if (logo && logo.imageData) {
      const dataURL = `data:image/png;base64,${logo.imageData}`;
      setImageSrc(dataURL);
    } else {
      console.log("Logo or logo.imageData is not defined");
    }
  }, [logo]);

    
    return (
        <div className="card">
            <div className="DeveloperInfo">
                <img className="developerLogo" src={imageSrc} alt="Developer Logo"/>
                <div className="developerName">
                    <span>{name}</span>
                </div>
                <div className="developerStars">
                    <div className="stars">
                    {stars.map((star) => star)}
                    </div>
                    <div className="ratingInNumber">
                        <span>{ratingDouble}</span>
                    </div>
                </div>
            </div>
            <div className="developerServices">
                <div><span>Services</span></div>
                <div className="services">
                    {servicesList.map((element) => (
                        <div className="service" key={element}>
                            <span>{element}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="developerLocation">
                <div><span>Location</span></div>
                <div className="location"><span>{location}</span></div>
            </div>
            <div className="developerProjects">
                <div><span>Recent clients</span></div>
                <div className="projects"><span>{clients}</span></div>
            </div>
            <div className="developerCTA">
                <a className="cta" href={url} target="_blank">
                    <span>Info</span>
                    <img src={ButtonArrow} />
                </a>
            </div>
        </div>
    );
}

export default Card;