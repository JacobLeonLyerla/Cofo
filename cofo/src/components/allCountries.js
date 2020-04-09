import React from "react";

import { Link } from "react-router-dom";
import { Card } from "reactstrap";

import CountryCard from "../helpers/countryCard";
// DEV NOTE fix  it so there is a max height and handle the overflow
const AllCountries = (props) => {
  const renderAll = () => {
    if(props.context.countryData.countries.length <0){
    props.context.actions.getData(
      "https://restcountries-v1.p.rapidapi.com/all"
    );
    }
    const countries = props.context.countryData.countries;
    return countries.map((country) => (
      <div className="card-container">
        {" "}
        <Link
      className="link-styles"
      country={props.country}
      to={`/country/${props.country.name}`}
    >
      <Card>
        <CountryCard country={country} />
        </Card>
        </Link>
      </div>
    ));
  };

  return <div className="container">{renderAll()}</div>;
};
export default AllCountries;
