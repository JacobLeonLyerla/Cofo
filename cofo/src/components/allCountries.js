import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const AllCountries = props => {
  const popCalulation=()=>{
    
  }
  const renderAll= () => {
    if (
      props.context.countryData.countries.length < 1 ||
      !props.context.countryData.countries
    ) {
      props.context.actions.getData(
        "https://restcountries-v1.p.rapidapi.com/all"
      );
    }
    const countries = props.context.countryData.countries;
    return countries.map(country => (
      <div className="card-container">
        {" "}
        <Card>
        
          <CardBody>
          <FontAwesomeIcon icon={faUserAlt} />

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
