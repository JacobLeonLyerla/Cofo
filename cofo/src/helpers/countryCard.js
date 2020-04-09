import React, { Fragment } from "react";
import { CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faBaby, faPlus } from "@fortawesome/free-solid-svg-icons";
const CountryCard = (props) => {
  const popCalulation = (population) => {
    const pop = Math.round(population / 10000000);
    let popIcons = [];
    if (pop < 1) return <FontAwesomeIcon icon={faBaby} />;
    for (let i = 0; i < pop; i++) {
      if (i === 8) {
        popIcons.push(<FontAwesomeIcon icon={faPlus} />);
        break;
      }
      popIcons.push(<FontAwesomeIcon icon={faUserAlt} />);
    }
    return popIcons.map((icon) => icon);
  };
  return (
    <Fragment>
      <CardTitle>{props.country.name}</CardTitle>
      <CardSubtitle>{props.country.region}</CardSubtitle>
      <CardText>
        {popCalulation(props.country.population)}{" "}
        {props.country.population > 1000000
          ? `${(props.country.population / 1000000).toFixed(1)} Milion`
          : `${props.country.population} Total`}
      </CardText>
    </Fragment>
  );
};
export default CountryCard;
