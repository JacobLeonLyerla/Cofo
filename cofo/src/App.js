import React, { Fragment } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import CountryProvider, { CountryContext } from "./context/countryProvider";

import SearchBar from "./components/searchBar";
import AllCountries from "./components/allCountries";
import SingleCounty from "./components/singleCountry";
function App() {
  return (
    <div className="App">
      <CountryProvider>
        <CountryContext.Consumer>
          {context => (
            <Fragment>
              <SearchBar context={context} />
              <Link
                onClick={() =>
                  context.actions.getData(
                    "https://restcountries-v1.p.rapidapi.com/all"
                  )
                }
                to="/"
              >
                fetch
              </Link>
              <Route
                exact
                path="/"
                render={() => <AllCountries context={context} />}
              />
              <Route
                exact
                path="/country/:country"
                render={() => <SingleCounty context={context} />}
              />
            </Fragment>
          )}
        </CountryContext.Consumer>
      </CountryProvider>
    </div>
  );
}

export default App;
