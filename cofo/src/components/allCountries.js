import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const AllCountries = props => {
  function renderAll() {
    if (
      props.context.countryData.countries.length < 1 ||
      !props.context.countryData.countries
    ) {
      props.context.actions.getData(
        "https://restcountries-v1.p.rapidapi.com/all"
      );
    }
    console.log(props.context.countryData.countries);
    const countries = props.context.countryData.countries;
    return countries.map(country => (
      <div className="card-container">
        {" "}
        <Card>
        
          <CardBody>
          <FontAwesomeIcon icon="coffee" />

            <CardTitle>{country.name}</CardTitle>
            <CardSubtitle>{country.region}</CardSubtitle>
            <CardText>Population: {country.population}</CardText>
          </CardBody>
        </Card>
      </div>
    ));
  }

  return <div className="container">{renderAll()}</div>;
};
export default AllCountries;
