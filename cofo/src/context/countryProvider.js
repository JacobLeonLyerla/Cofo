import React, { Component } from "react";

import axios from "axios";

export const CountryContext = React.createContext({});

class CountryProvider extends Component {
  state = {
    countries:[]
  };
  getData = (url) => {
    axios
      .get(url, {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY
        }
      })
      .then(response => {
        const countries = []
       for(const country of response.data){
        countries.push(country)
       
       }
       this.setState({countries});
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const countryData = this.state
    return (
      <CountryContext.Provider
        value={{
          countryData,
          actions: {
            getData: this.getData
          }
        }}
      >
        {this.props.children}{" "}
      </CountryContext.Provider>
    );
  }
}

export default CountryProvider;
