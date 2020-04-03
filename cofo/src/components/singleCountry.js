import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faBaby } from "@fortawesome/free-solid-svg-icons";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

// DEV NOTE fix  it so there is a max height and handle the overflow
const SingleCountries = props => {
  // I am using this two places make this into helper
  const popCalulation = population => {
    const pop = Math.round(population / 10000000);
    let popIcons = [];
    if (pop < 1) return <FontAwesomeIcon icon={faBaby} />;
    for (let i = 0; i < pop; i++) {
      popIcons.push(<FontAwesomeIcon icon={faUserAlt} />);
    }
    return popIcons.map(icon => icon);
  };
  const renderSingle = () => {
      props.context.actions.getData(
        `https://restcountries-v1.p.rapidapi.com/name/${props.match.params.country}`
        );
    
    const countries = props.context.countryData.countries;
    return countries.map(country => (
      <div className="card-container">
        {" "}
    
        <Card>
          <CardBody>
            <CardTitle>{country.name}</CardTitle>
            <CardSubtitle>{country.region}</CardSubtitle>
            <CardText>{popCalulation(country.population)} {country.population > 1000000
                ? `${(country.population / 1000000).toFixed(1)} Milion`
                : `${country.population} Total`}
            </CardText>
            <CardText>
            {country.demonym}
            {country.capital}
            </CardText>
    
          </CardBody>
        </Card>
      </div>
    ));
  };

  return <div className="container">{renderSingle()}</div>;
};
export default SingleCountries;
