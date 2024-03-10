import React from "react";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags,population } = country;
  return (
    <div className="country">
      <h2>Name: {name?.common}</h2>
      <img className="flag" src={flags.png} alt="" />
      <p>Population: {population}</p>
    </div>
  );
};

export default Country;
