import React from "react";

import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

function AllCountries(props) {
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
      <div>
        {" "}
        <Card>
          <CardBody>
            <CardTitle>{country.name}</CardTitle>
            <CardSubtitle>{country.region}</CardSubtitle>
            <CardText>Population: {country.population}</CardText>
          </CardBody>
        </Card>
      </div>
    ));
  }

  return renderAll();
}
export default AllCountries;
