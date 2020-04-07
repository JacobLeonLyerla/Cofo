import react from "React"
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const CountryCard = Props =>{
return(
    <Link className='link-styles'
               country={country}
                to={`/country/${country.name}`}
              >
        <Card>
          <CardBody>
            <CardTitle>{country.name}</CardTitle>
            <CardSubtitle>{country.region}</CardSubtitle>
            <CardText>{popCalulation(country.population)} {country.population > 1000000
                ? `${(country.population / 1000000).toFixed(1)} Milion`
                : `${country.population} Total`}
            </CardText>
    
          </CardBody>
        </Card>
        </Link>
)
}
default export CountryCard