import React from "react";
import { Link } from "react-router-dom";
import './Country.css'

const Country = (props) => {
  const { name, capital, region } = props.country;
  const countryStyle = {
    margin: "20px",
    border: "2px solid grey",
    padding: "10px",
    textAlign: "center",
    backgroundColor: "salmon"
    
  };

  return (
    <div style={countryStyle}>
      <h1>Country name:{name}</h1>
      <h3>Capital:{capital}</h3>
      <h5>region:{region}</h5>
     
      <p>
        Country:<Link to={`/country/${name}`}>About</Link>
      </p>
    </div>
  );
};

export default Country;
