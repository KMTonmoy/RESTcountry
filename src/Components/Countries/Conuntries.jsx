import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
const Conuntries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <div id="countrys">
        {countries.map((country) => (
          <Country country={country} key={country.name.common} />
        ))}
      </div>
    </div>
  );
};

export default Conuntries;
