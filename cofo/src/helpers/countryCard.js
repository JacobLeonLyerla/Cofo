import React from "react"
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";

const CountryCard = props =>{
  console.log(props)
return(
    <Link className='link-styles'
               country={props.country}
                to={`/country/${props.country.name}`}
              >
        <Card>
          {/* <CardBody>
            <CardTitle>{country.name}</CardTitle>
            <CardSubtitle>{country.region}</CardSubtitle>
            <CardText>{popCalulation(country.population)} {country.population > 1000000
                ? `${(country.population / 1000000).toFixed(1)} Milion`
                : `${country.population} Total`}
            </CardText>
    
          </CardBody> */}
        </Card>
        </Link>
)
}
export default CountryCard