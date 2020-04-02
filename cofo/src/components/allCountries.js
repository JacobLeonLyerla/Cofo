import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faBaby } from '@fortawesome/free-solid-svg-icons'
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const AllCountries = props => {
  const popCalulation=(population)=>{
    const pop = Math.round(population /10000000)
    let popIcons = [];
    if(pop < 1) return<FontAwesomeIcon icon={faBaby} />
    for (let i = 0; i < pop; i++) {
     popIcons.push(<FontAwesomeIcon icon={faUserAlt} />)

    }
     return popIcons.map(icon => (
      icon
     ))
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

            <CardTitle>{country.name}</CardTitle>
            <CardSubtitle>{country.region}</CardSubtitle>
            <CardText>Population: {popCalulation(country.population)}</CardText>
          </CardBody>
        </Card>
      </div>
    ));
  }

  return <div className="container">{renderAll()}</div>;
};
export default AllCountries;
