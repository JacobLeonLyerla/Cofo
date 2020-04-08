import React from "react";


import CountryCard from "../helpers/countryCard"
// DEV NOTE fix  it so there is a max height and handle the overflow
const AllCountries = props => {

  const renderAll = () => {
 
      props.context.actions.getData(
        "https://restcountries-v1.p.rapidapi.com/all"
      );
    
    const countries = props.context.countryData.countries;
    return countries.map(country => (
      <div className="card-container">
        {" "}
        <CountryCard country={country}/>
      </div>
    ));
  };

  return <div className="container">{renderAll()}</div>;
};
export default AllCountries;
