import "./Cards.css";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";

const Cards = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/developer/all")
      .then((response) => {
        setDevelopers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {developers.map((developer) => (
        <Card
          key={developer.id}
          name={developer.name}
          rating={developer.rating}
          services={developer.services}
          location={developer.location}
          url={developer.url}
          clients={developer.clients}
          logo={developer.logo}
        />
      ))}
    </div>
  );
};

export default Cards;
