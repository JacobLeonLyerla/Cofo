import React, { Component } from "react";

import axios from "axios";

export const CountryContext = React.createContext({});

class CountryProvider extends Component {
  state = {};
  getData = () => {
    axios
      .get("https://restcountries-v1.p.rapidapi.com/all", {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <CountryContext.Provider
        value={{
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
